var Random = require('./Random');
var Distance = require('./Distance');
var Direction = require('./util/Direction');
var Stat = require('./Stat.class');
var Item = require('./Item.class');

var TrainerAI = require('./ai/Trainer');

function Being(game, level, race){
	this.game = game;
	this.race = race;
	this.level = level;
	this.tile = race.tile;
	this.x = null;
	this.y = null;
	this.hp = new Stat(race.hp);
	this.intent = 'CHASE';
	this.isFriendly = false;
}

Being.prototype = {
	act: function(){
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
		this.game.display.message("The "+this.race.name+" attacks the "+enemy.race.name+".");
		if (enemy.intent === 'STILL'){
			// No longer!!!
			this.game.display.message("The "+enemy.race.name+" becomes hostile!");
			enemy.intent = 'CHASE';
		}
		enemy.hp.reduce(1);
		if (enemy.hp.current <= 0){
			enemy.die();
		}
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
	}
}

module.exports = Being;