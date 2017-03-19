var Races = require('./monster/Races.enum');
var Items = require('./Items.enum');

module.exports = {
	cities: 4,
	towns: 1,
	startingMonsters: [
		Items.CHARMANDER_POKEBALL,
		Items.BULBASAUR_POKEBALL,
		Items.SQUIRTLE_POKEBALL,
		Items.PIKACHU_POKEBALL
	],
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
					race: Races.CATERPIE,
					weight: 15
				},
				{
					race: Races.WEEDLE,
					weight: 15
				},
				{
					race: Races.PIDGEY,
					weight: 40
				},
				{
					race: Races.RATTATA,
					weight: 45
				}
			]
		},
		{
			monsters: [
				{
					race: Races.PIDGEY,
					levelBoost: 1,
					weight: 50
				},
				{
					race: Races.SPEAROW,
					levelBoost: 1,
					weight: 40
				},
				{
					race: Races.JIGGLYPUFF,
					weight: 10
				}
			]
		},
		{
			monsters: [
				{
					race: Races.RATTATA,
					levelBoost: 1,
					weight: 45
				},
				{
					race: Races.SPEAROW,
					levelBoost: 1,
					weight: 30
				},
				{
					race: Races.EKANS,
					weight: 25
				},
				{
					race: Races.SANDSHREW,
					weight: 25
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
					race: Races.SPEAROW,
					weight: 30
				},
				{
					race: Races.EKANS,
					weight: 25
				},
				{
					race: Races.SANDSHREW,
					weight: 25
				}
			]
		},
		{
			monsters: [
				{
					race: Races.PIDGEY,
					weight: 35
				},
				{
					race: Races.ODDISH,
					weight: 40
				},
				{
					race: Races.MEOWTH,
					weight: 25
				},
				{
					race: Races.MANKEY,
					weight: 25
				},
				{
					race: Races.BELLSPROUT,
					weight: 40
				}
			]
		},
		{
			monsters: [
				{
					race: Races.PIDGEY,
					weight: 35
				},
				{
					race: Races.VULPIX,
					weight: 10
				},
				{
					race: Races.ODDISH,
					weight: 25
				},
				{
					race: Races.MEOWTH,
					weight: 30
				},
				{
					race: Races.MANKEY,
					weight: 30
				},
				{
					race: Races.GROWLITHE,
					weight: 30
				},
				{
					race: Races.BELLSPROUT,
					weight: 25
				}
			]
		},
		{
			monsters: [
				{
					race: Races.PIDGEY,
					weight: 35
				},
				{
					race: Races.EKANS,
					weight: 20
				},
				{
					race: Races.SANDSHREW,
					weight: 20
				},
				{
					race: Races.VULPIX,
					weight: 20
				},
				{
					race: Races.MEOWTH,
					weight: 25
				},
				{
					race: Races.GROWLITHE,
					weight: 20
				},
				{
					race: Races.MANKEY,
					weight: 25
				}
			]
		},
		{
			monsters: [
				{
					race: Races.SPEAROW,
					weight: 30
				},
				{
					race: Races.EKANS,
					weight: 25
				},
				{
					race: Races.SANDSHREW,
					weight: 25
				},
				{
					race: Races.VOLTORB,
					weight: 45
				}
			]
		},
		{
			monsters: [
				{
					race: Races.SPEAROW,
					weight: 30
				},
				{
					race: Races.EKANS,
					weight: 45
				},
				{
					race: Races.SANDSHREW,
					weight: 45
				},
				{
					race: Races.DROWZEE,
					weight: 25
				}
			]
		},
		{
			monsters: [
				{
					race: Races.PIDGEY,
					weight: 35
				},
				{
					race: Races.ODDISH,
					weight: 40
				},
				{
					race: Races.GLOOM,
					weight: 5
				},
				{
					race: Races.VENONAT,
					weight: 20
				},
				{
					race: Races.BELLSPROUT,
					weight: 40
				},
				{
					race: Races.WEEPINBELL,
					weight: 5
				}
			]
		},
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