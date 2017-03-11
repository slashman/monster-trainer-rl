var Races = require('./Races.enum');
var Items = require('./Items.enum');

module.exports = {
	cities: 2,
	towns: 2,
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
		}
	}
}