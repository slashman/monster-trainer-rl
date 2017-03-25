function Race(name, chara, r, g, b, aggressive, type, typeb, hp, attack, defense, spAttack, spDefense, speed, xp){
	this.name = name;
	this.tile = new ut.Tile(chara, r, g, b);
	this.aggressive = aggressive;
	this.type = type;
	this.typeb = typeb;
	this.hp = hp;
	this.attack = attack;
	this.defense = defense;
	this.spAttack = spAttack;
	this.spDefense = spDefense;
	this.speed = speed;
	this.xp = xp;

	this.skills = [];
}

Race.prototype = {
	setMainEvolution: function(level, race){
		this.evolution = {minLevel: level, race: race};
		race.setPreevolution(level, race);
	},
	setPreevolution: function(level, race){
		// Get the skills from the preevolution
		this.preevolution = {level: level, race: race};
	}

}

module.exports = Race;