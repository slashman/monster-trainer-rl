module.exports = function(skill, monster, target){
	if (modifiers[skill.type.id]){
		if (modifiers[skill.type.id][target.race.type.id])
			return modifiers[skill.type.id][target.race.type.id];
		if (target.race.typeb && modifiers[skill.type.id][target.race.typeb.id])
			return modifiers[skill.type.id][target.race.typeb.id];
		return 1;
	} else {
		return 1;
	}
}

var modifiers = {
	NORMAL: {
		ROCK: 0.5,
		GHOST: 0
	},
	FIGHTING: {
		NORMAL: 2,
		FLYING: 0.5,
		POISON: 0.5,
		ROCK: 2,
		BUG: 0.5,
		GHOST: 0,
		PSYCHIC: 0.5,
		ICE: 2
	},
	FLYING: {
		FIGHTING: 2,
		ROCK: 0.5,
		BUG: 2,
		GRASS: 2,
		ELECTRIC: 0.5
	},
	POISON: {
		POISON: 0.5,
		GROUND: 0.5,
		ROCK: 0.5,
		BUG: 2,
		GHOST: 0.5,
		GRASS: 2
	},
	GROUND: {
		FLYING: 0,
		POISON: 2,
		ROCK: 2,
		BUG: 0.5,
		FIRE: 2,
		GRASS: 0.5,
		ELECTRIC: 2
	},
	ROCK: {
		FIGHTING: 0.5,
		FLYING: 2,
		GROUND: 0.5,
		BUG: 2,
		FIRE: 2,
		ICE: 2
	},
	BUG: {
		FIGHTING: 0.5,
		FLYING: 0.5,
		POISON: 2,
		GHOST: 0.5,
		FIRE: 0.5,
		GRASS: 2,
		PSYCHIC: 2
	},
	GHOST: {
		NORMAL: 0,
		GHOST: 2,
		PSYCHIC: 0
	},
	FIRE: {
		ROCK: 0.5,
		BUG: 2,
		FIRE: 0.5, 
		WATER: 0.5,
		GRASS: 2,
		ICE: 2,
		DRAGON: 0.5
	},
	WATER: {
		GROUND: 2,
		ROCK: 2,
		FIRE: 2,
		WATER: 0.5,
		GRASS: 0.5,
		DRAGON: 0.5
	},
	GRASS: {
		FLYING: 0.5,
		POISON: 0.5,
		GROUND: 2,
		ROCK: 2,
		BUG: 0.5,
		FIRE: 0.5,
		WATER: 2,
		GRASS: 0.5,
		DRAGON: 0.5
	},
	ELECTRIC: {
		FLYING: 2,
		GROUND: 0,
		WATER: 2,
		GRASS: 0.5,
		ELECTRIC: 0.5,
		DRAGON: 0.5
	},
	PSYCHIC: {
		FIGHTING: 2,
		POISON: 2,
		PSYCHIC: 0.5,
	},
	ICE: {
		FLYING: 2,
		GROUND: 2,
		WATER: 0.5,
		GRASS: 2,
		ICE: 0.5,
		DRAGON: 2
	},
	DRAGON: {
		DRAGON: 2
	}
}