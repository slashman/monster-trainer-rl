var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Being = require('./Being.class');
var Random = require('./Random');

var Level = function(game, id, fromId){
	this.init(game, id, fromId);
}

Level.prototype = {
	map: [],
	beings: [],
	beingsList: [],
	exits: [],
	init: function(game, id, fromId){
		this.game = game;
		this.id = id;
		this.player = game.player;
		this.createTestLevel(fromId);
	},
	beingsTurn: function(){
		for (var i = 0; i < this.beingsList.length; i++){
			this.beingsList[i].act();
		}
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
	},
	createTestLevel: function(fromId){
		for (var x = 0; x < 40; x++){
			this.map[x] = [];
			for (var y = 0; y < 40; y++){
				this.map[x][y] = Tiles.GRASS;
			}
		}
		for (var i = 0; i < 40; i++){
			this.map[Random.n(0,39)][Random.n(0,39)] = Tiles.BUSH;
		}
		for (var i = 0; i < 40; i++){
			this.map[Random.n(0,39)][Random.n(0,39)] = Tiles.WATER;
		}
		for (var i = 0; i < 5; i++){
			var being = new Being(this.game, this, Races.RAT);
			this.addBeing(being, Random.n(0,39), Random.n(0,39));
			being.intent = 'RANDOM';
			being = new Being(this.game, this, Races.TROLL);
			this.addBeing(being, Random.n(0,39), Random.n(0,39));
			being.intent = 'CHASE';
		}
		if (fromId){
			var xs = Random.n(0,39);
			var ys = Random.n(0,39);
			this.addExit(xs, ys, fromId, Tiles.STAIRS_DOWN);
			this.player.x = xs;
			this.player.y = ys;
			// Looks like when using this stair, we stay in the same level...
		}
		this.addExit(Random.n(0,39),Random.n(0,39),'test'+Random.n(0,1000), Tiles.STAIRS_UP);
	}
}

module.exports = Level;