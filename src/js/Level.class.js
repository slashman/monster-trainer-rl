var Distance = require('./Distance');
var Random = require('./Random');
var Being = require('./Being.class');

var Level = function(game, id){
	this.init(game, id);
}

Level.prototype = {
	init: function(game, id){
		this.map = [];
		this.beings = [];
		this.beingsList = [];
		this.exits = [];
		this.exitsMap = [];
		this.items = [];
		this.spawnPositions = []; // For respawning
		this.spawnCounter = 200;

		this.storePlaces = []; // For restocking

		this.game = game;
		this.id = id;
		this.player = game.player;
	},
	getBeing: function(x, y){
		if (!this.beings[x])
			return false;
		return this.beings[x][y];
	},
	respawnMonsters: function(){
		var initialPopulation = this.initialPopulation + Random.n(0,5);
		var currentMonsters = this.beingsList.length;
		initialPopulation -= currentMonsters;
		var level = this;
		for (var i = 0; i < initialPopulation; i++){
			var spawnPosition = level.spawnPositions.length > 0 ? Random.from(level.spawnPositions) : false;
			if (spawnPosition){
				var x = spawnPosition.x;
				var y = spawnPosition.y;
			}
			if (!spawnPosition || level.getBeing(x, y)){
				// Place somewhere else
				x = Random.n(0,this.map.length-1);
				y = Random.n(0,this.map[0].length-1);
			}
			if (Distance.distance(x,y,this.game.player.x, this.game.player.y) < 12){
				continue;
			}
			var wm = Random.fromWeighted(this.wildMonsters);
			var being = new Being(level.game, level, wm.race, wm.level);
			level.addBeing(being, x, y);
			if (wm.race.aggressive){
				being.intent = 'CHASE';
			} else if (wm.race.trainer){
				being.intent = 'TRAINER';
			} else {
				being.intent = 'STILL';
			}
		}
	},
	beingsTurn: function(){
		this.spawnCounter--;
		if (this.spawnCounter === 0){
			this.respawnMonsters();
		}
		for (var i = 0; i < this.beingsList.length; i++){
			this.beingsList[i].act();
		}
		this.player.updateFOV();
		this.game.display.refresh();
		this.game.input.inputEnabled = true;
	},
	addBeing: function(being, x, y){
		this.beingsList.push(being);
		if (!this.beings[x])
			this.beings[x] = [];
		being.x = x;
		being.y = y;
		this.beings[x][y] = being;
	},
	removeBeing: function(being){
		this.beings[being.x][being.y] = false;
		this.beingsList.splice(this.beingsList.indexOf(being), 1);
	},
	getCell: function(x, y){
		try {
			return this.map[x][y];
		} catch (e){
			// Catch OOB
			return false;
		}
	},
	canWalkTo: function(x, y){
		try {
			if (this.map[x][y].solid){
				return false;
			}
		} catch (e){
			// Catch OOB
			return false;
		}
		if (this.beings[x] && this.beings[x][y]){
			return false;
		}
		return true;
	},
	addExit: function(x,y, levelId, tile){
		if (!this.map[x])
			this.map[x] = [];
		this.map[x][y] = tile;
		if (!this.exits[x])
			this.exits[x] = [];
		this.exits[x][y] = levelId;
		this.exitsMap[levelId] = {
			x: x,
			y: y
		};
	},
	getExit: function(levelId){
		return this.exitsMap[levelId];
	},
	addItem: function(item, x, y){
		if (!this.items[x])
			this.items[x] = [];
		this.items[x][y] = item;
	},
	getItem: function(x, y){
		if (!this.items[x])
			return false;
		return this.items[x][y];
	},
	removeItem: function(x, y){
		if (!this.items[x])
			this.items[x] = [];
		this.items[x][y] = false;
	},
}

module.exports = Level;