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
	this.counters = [];
	this.statusFlags = {};
	this.iv = {
		hp: 0,
		attack: 0,
		defense: 0,
		spAttack: 0,
		spDefense: 0 
	};

	this.ev = {
		hp: 1,
		attack: 1,
		defense: 1,
		spAttack: 1,
		spDefense: 1 
	}
	
	this.speed = new Stat(race.speed);
	this.intent = 'CHASE';
	this.isFriendly = false;
	this.xpLevel = xpLevel;
	this.randomId = Random.n(8,10000);
	if (xpLevel){
		this.xp = this.calculateXP(xpLevel);
		this.nextLevelXP = this.calculateXP(xpLevel+1);
		this.calculateStats();
	}
	if (race.skills && xpLevel){
		this.skills = race.skills.filter(function(def){return def.level <= xpLevel;});
		this.skills = this.skills.map(function(val){
			return {
				skill: val.skill,
				pp: new Stat(val.skill.pp)
			};
		});
		while (this.skills.length > 4){
			Random.from(this.skills, true);
		}
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
			this.enemiesList.forEach(this.grantXP.bind(this));
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
			this.game.player.badgesCount++;
			this.game.player.money += this.prizeMoney;
			if (this.game.player.badgesCount === 8){
				this.game.display.showScene("VICTORY");
			}
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
		if (Effects.skipTarget(skill.skill)){
			return true;
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
	},
	calculateXPGain: function(){
		var a = this.isTame ? 1.5 : 1;
		var b = this.race.xp;
		var e = 1; // Lucky Egg
		var f = 1; // Affection
		var L = this.xpLevel;
		var p = 1; // Exp Points Power
		var s = this.enemiesList.length;
		var t = 1; // Trading origin
		var v = 1; // Non evolve bonus
		if (s === 0)
			s = 1;
		return Math.floor((a*t*b*e*L*p*f*v)/(7*s));
	},
	calculateXP: function(level){
		return Math.pow(level, 3); // Corresponds to the Medium Fast group
		/*
		// Alternate 
		if (level === 1){
			return 0;
		}
		var xp = 100;
		for (var i = 2; i <= level; i++){
			xp += (i-1) * 50;
		}
		return xp;
		*/
	},
	recordHitBy: function(enemy){
		if (!this.enemiesList){
			this.enemiesMap = {};
			this.enemiesList = [];
		}
		if (!this.enemiesMap[enemy.randomId]){
			this.enemiesList.push(enemy);
			this.enemiesMap[enemy.randomId] = enemy;
		}
	},
	grantXP: function(enemy){
		enemy.addXP(this.calculateXPGain());
	},
	addXP: function(xp){
		this.game.display.message(this.race.name+" gets "+xp+" XP");
		this.xp += xp;
		if (this.xp >= this.nextLevelXP){
			this.levelUp();
		}
	},
	levelUp: function(){
		this.game.display.message(this.race.name+" levels up!");
		this.xpLevel++;
		this.xp = this.calculateXP(this.xpLevel);
		this.nextLevelXP = this.calculateXP(this.xpLevel+1);
		// Increase stats
		this.calculateStats();

		// Check evolution and new skills
		var newSkill = this.race.skills.find(function(def){return def.level === this.xpLevel;}, this);
		if (newSkill){
			if (this.skills.length === 4){
				// Randomly forget one ;)
				var oldSkill = Random.from(this.skills, true);
				this.game.display.message(this.race.name+" forgets "+oldSkill.skill.name+".");
			} 
			this.skills.push({
				skill: newSkill.skill,
				pp: new Stat(newSkill.skill.pp)
			});
			this.game.display.message(this.race.name+" learns "+newSkill.skill.name+".");
		}
		if (this.race.evolution && this.race.evolution.minLevel === this.xpLevel){
			var newRace = this.race.evolution.race;
			this.game.display.message(this.race.name+" evolves into "+newRace.name+"!");
			this.setRace(newRace);
		}
	},
	setRace: function(race){
		this.race = race;
		this.tile = race.tile;
	},
	_calculateStatBase: function(stat){
		var base = this.race[stat];
		var iv = this.iv[stat];
		var ev = this.ev[stat];
		//return Math.floor((Math.floor((base + iv) * 2 + (Math.sqrt(ev) / 4))*this.xpLevel)/100);
		if (stat === 'hp'){
			var statValue = (base + iv + 50) * this.xpLevel / 50 + 10;
		} else {
 			statValue = (base + iv) * this.xpLevel / 50 + 5;
		}
		statValue = Math.floor(statValue);
		var extraPoints = Math.floor(((Math.sqrt(ev - 1)) + 1) * this.xpLevel / 400);
		extraPoints = Math.floor(extraPoints);
		return statValue + extraPoints;
	},
	calculateStats: function(){
		var hp = this._calculateStatBase('hp') + this.xpLevel;
		var attack = this._calculateStatBase('attack');
		var defense = this._calculateStatBase('defense');
		var spAttack = this._calculateStatBase('spAttack');
		var spDefense = this._calculateStatBase('spDefense');

		if (this.hp){
			this.hp.max = hp;
		} else {
			this.hp = new Stat(hp);
		} 
		this.attack = new Stat(attack);
		this.defense = new Stat(defense);
		this.spAttack = new Stat(spAttack);
		this.spDefense = new Stat(spDefense);
	},
	takeDamage: function(damage){
		this.hp.reduce(damage);
		if (this.hp.current <= 0){
			this.die();
		}
	},
	isUnderground: function(){
		return false; //TODO: Implement
	},
	changeStat: function(stat, turns, level){
		this.counters.push({type: "CHANGE_STAT", stat: stat, turns: turns, level: level});
	},
	lowerCounters: function(){
		for (var i = 0; i < this.counters.length; i++){
			this.counters[i].turns--;
			if (this.counters[i].turns < 0){
				if (this.counters[i].type === "CHANGE_STAT"){
					if (this.counters[i].level < 0)
						this.game.display.message("The "+this.race.name+"'s "+this.counters[i].stat.name+" recovers.");
				}
				this.counters.splice(i,1);
				i--;
			}
		}
	},
	getEffectiveAttack: function(){
		return this.getEffectiveStat('attack', 'ATK');
	},
	getEffectiveDefense: function(){
		return this.getEffectiveStat('defense', 'DEF');
	},
	getEffectiveSpecialAttack: function(){
		return this.getEffectiveStat('spAttack', 'SP_ATK');
	},
	getEffectiveSpecialDefense: function(){
		return this.getEffectiveStat('spDefense', 'SP_DEF');
	},
	getEffectiveSpeed: function(){
		return this.getEffectiveStat('speed', 'SPD');
	},
	getEffectiveAccuracy: function(){
		return this.getEffectiveStat('accuracy', 'ACC');
	},
	getEffectiveEvasion: function(){
		return this.getEffectiveStat('evasion', 'EVA');
	},
	getEffectiveStat: function(statName, statId){
		var variation = 0;
		var base = 0;
		for (var i = 0; i < this.counters.length; i++){
			if (this.counters[i].type === "CHANGE_STAT" && this.counters[i].stat === statId){
				variation += this.counters[i].level;
			}
		}
		if (statId === 'EVA' || statId === 'ACC'){
			base = 1;
		} else {
			base = this[statName].current;
		}
		if (variation < -6)
			variation = -6;
		if (variation > 6){
			variation = 6;
		}
		return base * this.STAGE_MULTIPLIERS[variation];
	},
	STAGE_MULTIPLIERS: {
		"-6": 25 / 100,
		"-5": 28 / 100,
		"-4": 33 / 100,
		"-3": 40 / 100,
		"-2": 50 / 100,
		"-1": 66 / 100,
		"0": 100 / 100,
		"1": 150 / 100,
		"2": 200 / 100,
		"3": 250 / 100,
		"4": 300 / 100,
		"5": 350 / 100,
		"6": 400 / 100
	},
	inflictStatus: function(status){
		this.statusFlags[status.id] = true;
	},
	endTurn: function(){
		this.lowerCounters();
	}
}

module.exports = Being;