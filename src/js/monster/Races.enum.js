var Skills = require('./Skills.enum');

module.exports = {
	RATTATA: {
		name: "Rattata",
		tile: new ut.Tile('r', 128, 0, 128),
		aggresive: true,
		hp: 39,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,

		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			},
			{
				skill: Skills.TACKLE,
				level: 1
			},
			{
				skill: Skills.TAIL_WHIP,
				level: 1
			},
			{
				skill: Skills.GROWL,
				level: 1
			},
			{
				skill: Skills.EMBER,
				level: 2
			}
		],
		xp: 66
	},
	PIDGEY: {
		name: "Pidgey",
		tile: new ut.Tile('p', 255, 128, 0),
		hp: 10,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	CHARMANDER: {
		name: "Charmander",
		tile: new ut.Tile('c', 255, 0, 0),
		hp: 20,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		pickupDescription: "the fire lizard pokemon",
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			},
			{
				skill: Skills.GROWL,
				level: 1
			},
			{
				skill: Skills.TACKLE,
				level: 9
			},
			{
				skill: Skills.EMBER,
				level: 9
			}
		],
		xp: 66
	},
	BULBASAUR: {
		name: "Bulbasaur",
		tile: new ut.Tile('b', 0, 128, 0),
		hp: 20,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		pickupDescription: "the grass seed pokemon",
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			},
			{
				skill: Skills.GROWL,
				level: 1
			},
			{
				skill: Skills.EMBER,
				level: 9
			}
		],
		xp: 66
	},
	SQUIRTLE: {
		name: "Squirtle",
		tile: new ut.Tile('s', 83, 255, 255),
		hp: 20,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		pickupDescription: "the water turtle pokemon",
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			},
			{
				skill: Skills.GROWL,
				level: 1
			},
			{
				skill: Skills.EMBER,
				level: 9
			}
		],
		xp: 66
	},

	ONYX: {
		name: "Onyx",
		tile: new ut.Tile('O', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	GEODUDE: {
		name: "Geodude",
		tile: new ut.Tile('g', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	GRAVELLER: {
		name: "Graveller",
		tile: new ut.Tile('G', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	STARMIE: {
		name: "Starmie",
		tile: new ut.Tile('S', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	STARYU: {
		name: "Staryu",
		tile: new ut.Tile('s', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	VOLTORB: {
		name: "Voltorb",
		tile: new ut.Tile('v', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	PIKACHU: {
		name: "Pikachu",
		tile: new ut.Tile('p', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		pickupDescription: "the electric rat pokemon",
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	RAICHU: {
		name: "Raichu",
		tile: new ut.Tile('R', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},


	CATERPIE: {
		name: "Caterpie",
		tile: new ut.Tile('c', 0, 255, 0),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	WEEDLE: {
		name: "Weedle",
		tile: new ut.Tile('w', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	SPEAROW: {
		name: "Spearow",
		tile: new ut.Tile('s', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	},
	JIGGLYPUFF: {
		name: "Jigglypuff",
		tile: new ut.Tile('k', 128, 128, 128),
		hp: 30,
		attack: 52,
		defense: 43,
		spAttack: 60,
		spDefense: 50,
		speed: 65,
		skills: [
			{
				skill: Skills.SCRATCH,
				level: 1
			}
		],
		xp: 66
	}
}