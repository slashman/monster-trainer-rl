var Random = require('./Random');
var Distance = require('./Distance');
var Direction = require('./util/Direction');
var Stat = require('./Stat.class');
var Item = require('./Item.class');
var Effects = require('./monster/Effects.enum');
var TrainerAI = require('./ai/Trainer');

function Being(game, level, race, xpLevel){
	this.game = game;
	this.race = race;
	this.level = level;
	this.tile = race.tile;
	this.x = null;
	this.y = null;
	this.hp = new Stat(race.hp);
	this.attack = new Stat(race.attack);
	this.defense = new Stat(race.defense);
	this.spAttack = new Stat(race.spAttack);
	this.spDefense = new Stat(race.spDefense);
	this.speed = new Stat(race.speed);
	this.intent = 'CHASE';
	this.isFriendly = false;
	this.xpLevel = xpLevel;
	if (race.skills && xpLevel){
		this.skills = race.skills.filter(function(def){return def.level <= xpLevel;});
		this.skills = this.skills.map(function(val){
			return {
				skill: val.skill,
				pp: new Stat(val.skill.pp)
			};
		});
		this.basicAttackSkill = this.skills.find(function(skill){return skill.skill.effect === Effects.DAMAGE;});
	}
}

Being.prototype = {
	act: function(){
		if (this.nextSkill){
			if (this.validateSkill(this.nextSkill)){
				this.nextSkill.pp.reduce(1);
				this.nextSkill.skill.effect(this, this.nextSkill.skill);
			}
			this.nextSkill = false;
			return;
		}

		switch (this.intent){
			case 'RANDOM':
				this.actRandom();
				break;
			case 'CHASE':
				this.actChase();
				break;
			case 'STILL':
				this.actStill();
				break;
			case 'TRAINER':
				this.actAsTrainer();
				break;
		}
	},
	actAsTrainer: function(){
		TrainerAI.act(this);
	},
	actRandom: function(){
		var dx = Random.n(-1, 1);
		var dy = Random.n(-1, 1);
		if (!this.level.canWalkTo(this.x+dx,this.y+dy)){
			return;
		}
		this.moveTo(dx, dy);
	},
	actStill: function(){
		if (this.seen){
			this.actRandom();
		} else {
			// Do nothing
		}
	},
	actChase: function(){
		var nearestEnemy = this.getNearestEnemy();
		if (!nearestEnemy){
			return;
		}
		var dx = Math.sign(nearestEnemy.x - this.x);
		var dy = Math.sign(nearestEnemy.y - this.y);
		if (this.game.player.x === this.x+dx && this.game.player.y === this.y+dy){
			this.tacklePlayer();
			return;
		}
		var being = this.level.getBeing(this.x+dx,this.y+dy);
		if (being){
			if (this.isFriendly !== being.isFriendly){
				this.tackle(being);
			}
			return;
		}
		if (!this.level.canWalkTo(this.x+dx,this.y+dy)){
			return;
		}
		this.moveTo(dx, dy);
	},
	tackle: function(enemy){
		if (!this.basicAttackSkill){
			return;
		}
		if (this.basicAttackSkill.pp.empty()){
			// Try to get another basic attack skill
			this.basicAttackSkill = this.skills.find(
				function(skill){
					return skill.skill.effect === Effects.DAMAGE && !skill.pp.empty();
				}
			);
			if (!this.basicAttackSkill){
				// Try to use any skill
				this.basicAttackSkill = this.skills.find(
					function(skill){
						return !skill.pp.empty();
					}
				);
			}

			if (!this.basicAttackSkill){
				// Struggle it is then
				this.game.display.message("The "+this.race.name+" can't attack!");
				return;
			}
		}
		if (!this.validateSkill(this.basicAttackSkill)){
			return;
		}
		this.basicAttackSkill.pp.reduce(1);
		this.basicAttackSkill.skill.effect(this, this.basicAttackSkill.skill);
	},
	tacklePlayer: function(){
		this.game.display.message("The "+this.race.name+" attacks you.");
		this.game.player.hp.reduce(1);
		if (this.game.player.hp.current <= 0){
			this.game.player.die();
		}
	},
	die: function(){
		if (this.slotNumber !== undefined){
			this.game.display.message("Your "+this.race.name+" dies!");
			this.game.player.monsterSlots[this.slotNumber] = false;
			if (this.game.input.selectedMonsterSlot === this.slotNumber){
				this.game.input.selectAvailableMonsterSlot();
			}
			if (this.game.player.gymTown){
				this.game.player.releasedMonster = false;
			}
		} else {
			this.game.display.message("The "+this.race.name+" dies!");
		}
		this.game.world.level.removeBeing(this);
		if (this.owner){
			this.owner.monsterDied(this);
		}

	},
	getNearestEnemy: function(){
		var nearestDistance = 999;
		var nearestEnemy = false;
		for (var i = 0; i < this.level.beingsList.length; i++){
			var being = this.level.beingsList[i];
			if (this.isTame && being.isTrainer){
				continue;
			}
			if (being.isFriendly != this.isFriendly){
				var distance = Distance.flatDistance(being.x, being.y, this.x, this.y);
				if (distance < this.getSightRange() && distance < nearestDistance){
					nearestDistance = distance;
					nearestEnemy = being;
				}
			}
		}
		if (!this.isFriendly && !this.isTame){
			// Consider the player too
			var distance = Distance.flatDistance(this.game.player.x, this.game.player.y, this.x, this.y);
			if (distance < this.getSightRange() && distance < nearestDistance){
				nearestDistance = distance;
				nearestEnemy = this.game.player;
			}
		}
		return nearestEnemy;
	},
	moveTo: function(dx,dy){
		this.level.beings[this.x][this.y] = false;
		this.x = this.x + dx;
		this.y = this.y + dy;
		if (!this.level.beings[this.x])
			this.level.beings[this.x] = [];
		this.level.beings[this.x][this.y] = this;
	},
	getSightRange: function(){
		return 10;
	},
	recoverHP: function(points){
		this.hp.increase(points);
	},
	// Trainer functions
	pullBackMonster: function(){
		var monster = this.monsterDeployed;
		this.game.display.message(this.race.name+" calls back "+monster.race.name+".");
		this.game.world.level.removeBeing(monster);
		this.monsterDeployed = false;
	},
	useItem: function(item){
		//Used on the current monster
	},
	issueOrder: function(order){

	},
	releaseMonster: function(monster){
		// Select a direction toward player
		var dir = Direction.direction(this.x, this.y, this.game.player.x, this.game.player.y);
		if (this.game.world.level.canWalkTo(this.x + dir.x, this.y + dir.y) &&
			this.game.world.level.canWalkTo(this.x + dir.x * 2, this.y + dir.y * 2)){
			monster.level = this.level;
			this.game.world.level.addBeing(monster, this.x + dir.x * 2, this.y + dir.y * 2);
			this.game.display.message(this.race.name+" sends out "+monster.race.name+".");
			this.monsterDeployed = monster;
		}
	},
	monsterDied: function(monster){
		this.monsterDeployed = false;
		this.monsters.splice(this.monsters.indexOf(monster), 1);
	},
	givePrize: function(){
		if (this.prize){
			this.game.display.message("Congratulations! take the "+this.prize.name+"!");
			this.game.player.addItem(new Item(this.prize));
			this.gavePrize = true;
			this.game.player.gymTown.gymComplete = true;
			this.game.player.gymTown = false;
		} else if (this.prizeMoney){

		}
	},
	healAll: function(){
		for (var i = 0; i < this.monsters.length; i++){
			this.monsters[i].heal();
		}
	},
	validateSkill: function(skill){
		if (skill.pp.empty()){
			this.game.display.message(this.race.name+" has no power points!");
			return false;
		}
		var nearestEnemy = this.getNearestEnemy();
		if (!nearestEnemy){
			this.game.display.message("No target!");
			return false;
		}
		var distance = Distance.flatDistance(this.x, this.y, nearestEnemy.x, nearestEnemy.y);
		if (!skill.skill.range){
			skill.skill.range = 1;
		}
		if (distance > skill.skill.range){
			this.game.display.message(nearestEnemy.race.name+" is too far!");
			return false;
		}
		return true;
	},
	useSkill: function(index){
		if (this.skills && this.skills[index]){
			this.nextSkill = this.skills[index];
			this.game.display.message(this.race.name+", use "+this.skills[index].skill.name+"!");
			this.game.player.endTurn();
		}
	},
	heal: function(){
		this.hp.replenish();
		this.skills.forEach(function(skill){skill.pp.replenish();});
	}
}

module.exports = Being;