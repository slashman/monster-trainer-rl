var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var Random = require('./Random');

module.exports = {
	generateTestLevel: function(level, specs){
		this.level = level;
		for (var x = 0; x < specs.width; x++){
			level.map[x] = [];
			for (var y = 0; y < specs.height; y++){
				level.map[x][y] = Tiles.GRASS;
			}
		}
		for (var i = 0; i < 40; i++){
			level.map[Random.n(0,specs.width-1)][Random.n(0,specs.height-1)] = Tiles.BUSH;
		}
		switch (specs.type){
			case "TOWN":
				this.buildTown(level, specs);
				break;
			case "ROUTE":
				this.buildRoute(level, specs);
				break;
		}
		if (specs.addEnemies){
			for (var i = 0; i < 5; i++){
				var being = new Being(level.game, level, Races.RAT);
				level.addBeing(being, Random.n(0,specs.width-1), Random.n(0,specs.height-1));
				being.intent = 'RANDOM';
				being = new Being(level.game, level, Races.TROLL);
				level.addBeing(being, Random.n(0,specs.width-1), Random.n(0,specs.height-1));
				being.intent = 'CHASE';
			}
		}
		level.addItem(new Item(Items.IRON_SWORD), Random.n(0,specs.width-1), Random.n(0,specs.height-1));
		level.addItem(new Item(Items.BOOK_OF_MIRDAS), Random.n(0,specs.width-1), Random.n(0,specs.height-1));
		for (var i = 0; i < specs.exits.length; i++){
			var xs = Math.round(specs.width/2);
			var ys = Math.round(specs.height/2);
			var exit = specs.exits[i];
			switch (exit.dir){
				case 'UP':
					ys = 0;
					break;
				case 'DOWN':
					ys = specs.height-1;
					break;
				case 'LEFT':
					xs = 0;
					break;
				case 'RIGHT':
					xs = specs.width-1;
					break;
			}
			level.addExit(xs, ys, exit.toId, Tiles.STAIRS_DOWN);
		}
		if (specs.startPosition){
			level.player.x = specs.startPosition.x;
			level.player.y = specs.startPosition.y;
		}
	},
	buildTown: function(level, specs){
		// Place houses based on specs on a grid
		var grid = [];
		var gridx = Math.round((specs.width - 6) / 10);
		var gridy = Math.round((specs.height - 6) / 10);
		for (var i = 0; i < gridx; i++){
			grid[i] = [];
		}
		for (var i = 0; i < specs.features.length; i++){
			var feature = specs.features[i];
			var x = feature.x;
			var y = feature.y;
			var w = feature.w;
			var h = feature.h;
			if (!w)
				w = Random.n(6,8);
			if (!h)
				h = Random.n(6,8);
			if (!x){
				x = Random.n(0,gridx-1);
			}
			if (!y){
				y = Random.n(0,gridy-1);
			}
			while (grid[x][y]){
				x = Random.n(0,gridx-1);
				y = Random.n(0,gridy-1);	
			}
			grid[x][y] = true;
			x = x * 10 + Random.n(0,10-w-1) + 3;
			y = y * 10 + Random.n(0,10-h-1) + 3;
			this.fillFeature(feature.type, x, y, w, h);
		}
	},
	fillFeature: function(type, x, y, w, h){
		switch (type){
			case 'myHouse':
				this.fillMyHouse(x,y,w,h);
				break;
			case 'lab':
				this.fillLab(x,y,w,h);
				break;
			case 'house':
				this.fillHouse(x,y,w,h);
				break;
			case 'pond':
				this.fillPond(x,y,w,h);
				break;
		}
	},
	fillHouse: function(x, y, w, h){
		for (var xx = x; xx < x + w; xx++){
			for (var yy = y; yy < y + h; yy++){
				if (xx === x || xx === x + w - 1 || yy === y || yy === y + h - 1){
					this.level.map[xx][yy] = Tiles.WALL;
				} else {
					this.level.map[xx][yy] = Tiles.FLOOR;
				}
			}
		}
		// Place door
		var xd = x + 2 + Random.n(0, w - 4);
		var yd = y + 2 + Random.n(0, h - 4);
		switch (Random.n(0,3)){
			case 0:
				yd = y;
				break;
			case 1:
				yd = y+h-1;
				break;
			case 2:
				xd = x;
				break;
			case 3:
				xd = x+w-1;
				break;
		}
		this.level.map[xd][yd] = Tiles.FLOOR;
	},
	fillLab: function(x, y, w, h){
		this.fillHouse(x,y,w,h);
	},
	fillMyHouse: function(x, y, w, h){
		this.fillHouse(x,y,w,h);
	},
	fillPond: function(x, y, w, h){
		for (var xx = x; xx < x + w; xx++){
			for (var yy = y; yy < y + h; yy++){
				this.level.map[xx][yy] = Tiles.WATER;
			}
		}
	}
}