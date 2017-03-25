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
		race.setPreevolution(level, this);
	},
	setPreevolution: function(level, race){
		// Add the skills from the preevolution
		var originalSkills = this.skills;
		this.skills = this.skills.concat(race.skills.filter((skill) => {
			if (originalSkills.find((originalSkill) => { return originalSkill.skill === skill.skill }))
				return false;
			return skill.level <= level;
		}));
	},
	setStoneEvolution: function(itemId, fromRace){
		this.parentRace = fromRace;
	}
}

module.exports = Race;