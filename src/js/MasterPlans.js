var Races = require('./Races.enum');
var Items = require('./Items.enum');

module.exports = {
	cities: 4,
	towns: 1,
	items: [
		{
			item: Items.POKEBALL,
			weight: 100,
			tier: 1
		},
		{
			item: Items.GREATBALL,
			weight: 20,
			tier: 2
		},
		{
			item: Items.ULTRABALL,
			weight: 20,
			tier: 3
		},
		{
			item: Items.POTION,
			weight: 100,
			tier: 1
		},
		{
			item: Items.SUPER_POTION,
			weight: 5,
			tier: 2
		},
		{
			item: Items.HYPER_POTION,
			weight: 5,
			tier: 3
		},
		{
			item: Items.MAX_POTION,
			weight: 5,
			tier: 4
		}
	],
	routeStereotypes: [
		{
			monsters: [
				{
					race: Races.RATTATA,
					weight: 45
				},
				{
					race: Races.PIDGEY,
					levelBoost: 1,
					weight: 55
				}
			]
		},
		{
			monsters: [
				{
					race: Races.RATTATA,
					weight: 45
				},
				{
					race: Races.PIDGEY,
					levelBoost: 1,
					weight: 55
				}
			]
		},
		{
			monsters: [
				{
					race: Races.RATTATA,
					weight: 45
				},
				{
					race: Races.PIDGEY,
					levelBoost: 1,
					weight: 55
				}
			]
		},
		{
			monsters: [
				{
					race: Races.RATTATA,
					weight: 45
				},
				{
					race: Races.PIDGEY,
					levelBoost: 1,
					weight: 55
				}
			]
		},
		{
			monsters: [
				{
					race: Races.RATTATA,
					weight: 45
				},
				{
					race: Races.PIDGEY,
					levelBoost: 1,
					weight: 55
				}
			]
		},
		{
			monsters: [
				{
					race: Races.RATTATA,
					weight: 45
				},
				{
					race: Races.PIDGEY,
					levelBoost: 1,
					weight: 55
				}
			]
		},
		{
			monsters: [
				{
					race: Races.RATTATA,
					weight: 45
				},
				{
					race: Races.PIDGEY,
					levelBoost: 1,
					weight: 55
				}
			]
		},
		{
			monsters: [
				{
					race: Races.CATERPIE,
					levelBoost: 1,
					weight: 15
				},
				{
					race: Races.WEEDLE,
					levelBoost: 1,
					weight: 15
				},
				{
					race: Races.RATTATA,
					weight: 45
				},
				{
					race: Races.PIDGEY,
					levelBoost: 1,
					weight: 40
				}
			]
		},
		{
			monsters: [
				{
					race: Races.SPEAROW,
					levelBoost: 2,
					weight: 40
				},
				{
					race: Races.PIDGEY,
					levelBoost: 3,
					weight: 50
				},
				{
					race: Races.JIGGLYPUFF,
					weight: 10
				}
			]
		}
	],
	gymStereotypes: {
		ROCK: {
			monsters: [
				{
					race: Races.ONYX,
					levelBoost: 5,
					weight: 60
				},
				{
					race: Races.GEODUDE,
					weight: 60
				},
				{
					race: Races.GRAVELLER,
					weight: 20
				}
			],
			badge: Items.BOULDER_BADGE
		},
		WATER: {
			monsters: [
				{
					race: Races.STARMIE,
					levelBoost: 5,
					weight: 60
				},
				{
					race: Races.STARYU,
					weight: 20
				}
			],
			badge: Items.CASCADE_BADGE
		},
		ELECTRIC: {
			monsters: [
				{
					race: Races.VOLTORB,
					weight: 20
				},
				{
					race: Races.PIKACHU,
					weight: 60
				},
				{
					race: Races.RAICHU,
					levelBoost: 5,
					weight: 60
				}
			],
			badge: Items.THUNDER_BADGE
		},
		GRASS: {
			monsters: [
				{
					race: Races.VOLTORB,
					weight: 20
				},
				{
					race: Races.PIKACHU,
					weight: 60
				},
				{
					race: Races.RAICHU,
					levelBoost: 5,
					weight: 60
				}
			],
			badge: Items.RAINBOW_BADGE
		},
		PSYCHIC: {
			monsters: [
				{
					race: Races.VOLTORB,
					weight: 20
				},
				{
					race: Races.PIKACHU,
					weight: 60
				},
				{
					race: Races.RAICHU,
					levelBoost: 5,
					weight: 60
				}
			],
			badge: Items.MARSH_BADGE
		}
	}
}