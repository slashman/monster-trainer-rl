var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Direction = require('./util/Direction')
var Random = require('./Random');
var MasterPlans = require('./MasterPlans');

module.exports = {
	plansComplete: function(){
		return this.remainingTowns === 0 && this.remainingCities === 0;
	},
	generateMetadata: function(){
		this.exits = [];
		this.metadata = {};
		this.currentRouteId = 0;
		this.currentTownId = 0;
		this.currentGymId = 0;
		this.masterPlans = MasterPlans;

		if (Object.keys(this.masterPlans.gymStereotypes).length < this.masterPlans.cities){
			throw "Not enough gym stereotypes";
		}

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
			var routeStereotype = Random.from(this.masterPlans.routeStereotypes, true);

			this.metadata[routeId] = {
				type: 'ROUTE',
				orientation: orientation,
				name: 'Route '+this.currentRouteId,
				width: orientation === "VERTICAL" ? 32 : 64,
				height: orientation === "VERTICAL" ? 64 : 32,
				initialPopulation: 5,
				wildMonsters: routeStereotype.monsters,
				exits: [
					{
						dir: Direction.opposite[exit.direction],
						toId: exit.fromId
					}
				]
			}
			this.metadata[routeId].wildMonsters = this.metadata[routeId].wildMonsters.map(function(spec){
				return {
					race: spec.race,
					level: this.currentRouteId * 3 + (spec.levelBoost ? spec.levelBoost : 0),
					weight: spec.weight
				}
			}, this);
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
		var houses = Random.n(0,3);
		for (var i = 0; i < houses; i++){
			metadata.features.push(
				{
					type: 'house'
				}
			);
		}
		if (specs.hasGym){ //TODO: Separate hasMart
			var maxTier = Math.floor(this.currentTownId / (this.masterPlans.cities+this.masterPlans.towns)) * 4;
			if (maxTier < 1)
				maxTier = 1;
			metadata.features.push(
				{
					type: 'mart',
					items: this.masterPlans.items.filter(function(itemDef){return itemDef.tier <= maxTier;})
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
			this.currentGymId++;
			var gymId = "GYM" + this.currentGymId;
			metadata.features.push(
				{
					type: 'gym',
					name: townName+" Gym",
					toId: gymId
				}
			);
			var gymStereotype = Random.fromObject(this.masterPlans.gymStereotypes, true);
			var numberOfMonsters = Random.n(3,4);
			var gymMonsters = [];
			for (var i = 0; i < numberOfMonsters; i++){
				var monsterSpec = Random.fromWeighted(gymStereotype.monsters);
				var monsterRace = monsterSpec.race;
				var levelBoost = monsterSpec.levelBoost ? monsterSpec.levelBoost : 0;
				levelBoost += Random.n(0,3);
				gymMonsters.push({
					race: monsterRace,
					level: this.currentGymId * 5 + 5 + levelBoost
				});
			}
			
			var gymMetadata = {
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
					race: Races.GYM_LEADER,
					monsters: gymMonsters
				},
				badge: gymStereotype.badge
			}
			this.metadata[gymId] = gymMetadata;
		}
		return townId;
	}
}