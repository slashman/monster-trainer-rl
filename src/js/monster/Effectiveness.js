module.exports = function(skill, monster, target){
	if (modifiers[skill.type] && modifiers[skill.type][target.type]){
		return modifiers[skill.type][target.type];
	} else {
		return 1;
	}
}

var modifiers = {
	Normal: {
		Rock: 0.5,
		Ghost: 0
	},
	Fight: {
		Normal: 2,
		Flying: 0.5,
		Poison: 0.5,
		Rock: 2,
		Bug: 0.5,
		Ghost: 0,
		Psychic: 0.5,
		Ice: 2
	},
	Flying: {
		Fight: 2,
		Rock: 0.5,
		Bug: 2,
		Grass: 2,
		Electric: 0.5
	},
	Fire: {
		Rock: 0.5,
		Bug: 2,
		Fire: 0.5, 
		Water: 0.5,
		Grass: 2,
		Ice: 2,
		Dragon: 0.5
	}
}