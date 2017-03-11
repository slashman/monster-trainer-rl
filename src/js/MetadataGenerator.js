var Races = require('./Races.enum');
var Items = require('./Items.enum');

module.exports = {
	generateMetadata: function(){
		return {
			"PALLET_TOWN":{
				type: 'TOWN',
				name: 'Pallet Town',
				width: 48,
				height: 48,
				exits: [
					{
						dir: 'UP',
						toId: "ROUTE_1"
					}
				],
				startPosition: {
					x: 16,
					y: 16
				},
				features: [
					{ // Hero's house
						type: 'myHouse',
						x: 1,
						y: 1
					},
					{ // Oak's Lab
						type: 'lab'
					},
					{
						// Rival's house (empty)
						type: 'house'
					},
					{
						type: 'pond'
					},
					{
						type: 'mart',
						items: [
							{
								item: Items.POKEBALL,
								weight: 100
							},
							{
								item: Items.SUPERBALL,
								weight: 20
							},
							{
								item: Items.POTION,
								weight: 100
							},
							{
								item: Items.SUPER_POTION,
								weight: 5
							}
						]
					},
					{
						type: 'gym',
						name: 'Test Gym',
						toId: "GYM1"
					}
				]
			},
			"ROUTE_1":{
				type: 'ROUTE',
				orientation: 'VERTICAL',
				name: 'Route 1',
				width: 32,
				height: 64,
				initialPopulation: 5,
				wildMonsters: [
					{
						race: Races.PIDGEY,
						level: 1,
						weight: 50
					},
					{
						race: Races.RATTATA,
						level: 1,
						weight: 2
					}
				],
				exits: [
					{
						dir: 'DOWN',
						toId: "PALLET_TOWN"
					}
				]
			},
			"GYM1": {
				type: "GYM",
				name: "Test Gym",
				width: 16,
				height: 16,
				exits: [
					{
						dir: "DOWN",
						toId: "PALLET_TOWN"
					}
				],
				trainer: {
					race: Races.TRAINER_BROK,
					monsters: [
						{
							race: Races.ONYX,
							level: 10
						},
						{
							race: Races.RATTATA,
							level: 10
						}
					]
				},
				badge: Items.BOULDER_BADGE
			}
		}
	}
}