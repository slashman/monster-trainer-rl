var NPCRaces = require('./NPCRaces.enum');
var Items = require('./Items.enum');
var Direction = require('./util/Direction')
var Random = require('./Random');
var MasterPlans = require('./MasterPlans');
var TownNameGen = require('./procgen/TownNames');

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
		this.supermap = {
			x: 0,
			y: 0,
			minx: 0,
			miny: 0,
			maxx: 0,
			maxy: 0,
			map: []
		};

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
		this.showSupermap();
		return this.metadata;
	},
	showSupermap: function(){
		// Normalize
		for (var y = this.supermap.miny; y <= this.supermap.maxy; y++){
			var str = "";
			for (var x = this.supermap.minx; x <= this.supermap.maxx; x++){
				if (this.supermap.map[x] && this.supermap.map[x][y]){
					str += (this.supermap.map[x][y]+"        ").substring(0,8);
				} else {
					str += "        ";
				}
			}
			console.log((y-this.supermap.miny)+":"+str);
		}
		console.log("---------");
	},
	addToSuperMap: function(id){
		if (!this.supermap.map[this.supermap.x]){
			this.supermap.map[this.supermap.x] = [];
		}
		this.supermap.map[this.supermap.x][this.supermap.y] = id;
		if (this.supermap.x < this.supermap.minx){
			this.supermap.minx = this.supermap.x;
		}
		if (this.supermap.y < this.supermap.miny){
			this.supermap.miny = this.supermap.y;
		}
		if (this.supermap.x > this.supermap.maxx){
			this.supermap.maxx = this.supermap.x;
		}
		if (this.supermap.y > this.supermap.maxy){
			this.supermap.maxy = this.supermap.y;
		}
	},
	isClear: function(x, y, dir){
		return !(this.supermap.map[x+dir.x] && this.supermap.map[x+dir.x][y+dir.y]) &&
			   !(this.supermap.map[x+dir.x*2] && this.supermap.map[x+dir.x*2][y+dir.y*2])
	},
	placeTown: function(specs){
		if (this.exits.length === 0){
			// First town
			this.supermap.x = 0;
			this.supermap.y = 0;
			var townId = this.createTown(specs);
			this.metadata._startingLevelId = townId;
			this.addToSuperMap(townId);
			
		} else {
			while (true){
				var exit = Random.from(this.exits);
				var dx = Direction.dxMap[exit.direction];
				if (this.isClear(exit.x, exit.y, dx)){
					break;
				}
			}

			this.exits.splice(this.exits.indexOf(exit), 1);

			this.supermap.x = exit.x;
			this.supermap.y = exit.y;

			var currentMetadata = this.metadata[exit.fromId];
			this.currentRouteId++;
			var routeId = "ROUTE_"+this.currentRouteId;
			currentMetadata.exits.push({
				dir: exit.direction,
				toId: routeId
			});
			var orientation = dx.x === 0 ? "VERTICAL" : "HORIZONTAL";
			this.supermap.x += dx.x;
			this.supermap.y += dx.y;
			this.addToSuperMap(routeId);

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
			this.supermap.x += dx.x;
			this.supermap.y += dx.y;
			var townId = this.createTown(specs, Direction.opposite[exit.direction], routeId);
			this.metadata[routeId].exits.push({
				dir: exit.direction,
				toId: townId
			});
			this.addToSuperMap(townId);
		}
	},
	createTown: function(specs, fromDir, fromId){
		// Creates a town and puts this.exits
		this.currentTownId++;
		var townId = "TOWN_"+this.currentTownId;
		var townName = TownNameGen.generateName()+(specs.hasGym?" City":" Town");;
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
					type: 'lab',
					monsters: this.masterPlans.startingMonsters
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
			metadata.features.push(
				{
					type: 'hospital'
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
				x: this.supermap.x,
				y: this.supermap.y,
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
					race: NPCRaces.GYM_LEADER,
					monsters: gymMonsters
				},
				badge: gymStereotype.badge
			}
			this.metadata[gymId] = gymMetadata;
		}
		return townId;
	}
}