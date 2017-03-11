var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Direction = require('./util/Direction')
var Random = require('./Random');

module.exports = {
	getMasterPlans: function(){
		return {
			cities: 2,
			towns: 2,
			gyms: [
				{
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
			]
		}
	},
	plansComplete: function(){
		return this.remainingTowns === 0 && this.remainingCities === 0;
	},
	generateMetadata: function(){
		this.exits = [];
		this.metadata = {};
		this.currentRouteId = 1;
		this.currentTownId = 1;
		this.currentGymId = 1;
		this.masterPlans = this.getMasterPlans();
		this.remainingTowns = this.masterPlans.towns;
		this.remainingCities = this.masterPlans.cities;
		this.placeTown({starting: true});
		while (!this.plansComplete()){
			if (Random.chance(50) && this.remainingTowns > 0){
				this.placeTown({});
				this.remainingTowns--;
			}
			if (Random.chance(50) && this.remainingCities > 0){
				this.placeTown({hasGym: true});
				this.remainingCities--;
			}
		}
		return this.metadata;
	},
	placeTown: function(specs){
		if (this.exits.length === 0){
			// First town
			var townId = this.createTown(specs);
			this.metadata._startingLevelId = townId;
		} else {
			var exit = Random.from(this.exits);
			this.exits.splice(this.exits.indexOf(exit), 1);
			var dx = Direction.dxMap[exit.direction];
			var currentMetadata = this.metadata[exit.fromId];
			this.currentRouteId++;
			var routeId = "ROUTE_"+this.currentRouteId;
			currentMetadata.exits.push({
				dir: exit.direction,
				toId: routeId
			});
			var orientation = dx.x === 0 ? "VERTICAL" : "HORIZONTAL";
			this.metadata[routeId] = {
				type: 'ROUTE',
				orientation: orientation,
				name: 'Route '+this.currentRouteId,
				width: orientation === "VERTICAL" ? 32 : 64,
				height: orientation === "VERTICAL" ? 64 : 32,
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
						dir: Direction.opposite[exit.direction],
						toId: exit.fromId
					}
				]
			}
			var townId = this.createTown(specs, Direction.opposite[exit.direction], routeId);
			this.metadata[routeId].exits.push({
				dir: exit.direction,
				toId: townId
			});
		}
	},
	createTown: function(specs, fromDir, fromId){
		// Creates a town and puts this.exits
		this.currentTownId++;
		var townId = "TOWN_"+this.currentTownId;
		var townName = townId;
		var metadata = {
			type: 'TOWN',
			name: townName,
			width: 48,
			height: 48,
			exits: []
		}
		this.metadata[townId] = metadata;
		metadata.features = [];
		if (specs.starting){
			metadata.startPosition = {
				x: 16,
				y: 16
			};
			metadata.features.push(
				{ // Hero's house
					type: 'myHouse',
					x: 1,
					y: 1
				}
			);
			metadata.features.push(
				{ // Oak's Lab
					type: 'lab'
				}
			);
			metadata.features.push(
				{
					// Rival's house (empty)
					type: 'house'
				}
			);
		}
		if (specs.hasGym){
			metadata.features.push(
				{
					type: 'gym',
					name: 'Test Gym',
					toId: "GYM1"
				}
			);
			metadata.features.push(
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
				}
			);
		}
		if (Random.chance(10)){
			metadata.features.push(
				{
					type: 'pond'
				}
			);
		}
		for (var i = 0; i < Direction.CARDINALS.length; i++){
			if (fromDir === Direction.CARDINALS[i]){
				continue;
			}
			this.exits.push({
				direction: Direction.CARDINALS[i],
				fromId: townId
			});
		}
		if (fromDir){
			metadata.exits.push({
				dir: fromDir,
				toId: fromId
			});
		}

		if (specs.hasGym){
			var gymId = "GYM" + this.currentGymId;
			var metadata = {
				type: 'GYM',
				name: townName+" Gym",
				width: 24,
				height: 24,
				exits: [
					{
						dir: "DOWN",
						toId: townId
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
			this.metadata[gymId] = metadata;
		}
		return townId;
	},
	generateFixedMetadata: function(){
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