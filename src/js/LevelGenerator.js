var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var CA = require('./ca/CA');
var Rule = require('./ca/Rule.class');
var Random = require('./Random');

module.exports = {
	generateTestLevel: function(level, specs){
		this.level = level;
		this.level.name = specs.name;
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
		if (specs.wildMonsters){
			var initialPopulation = specs.initialPopulation + Random.n(0,5);
			for (var i = 0; i < initialPopulation; i++){
				var spawnPosition = level.spawnPositions.length > 0 ? Random.from(level.spawnPositions) : false;
				if (spawnPosition){
					var x = spawnPosition.x;
					var y = spawnPosition.y;
				}
				if (!spawnPosition || level.getBeing(x, y)){
					// Place somewhere else
					x = Random.n(0,specs.width-1);
					y = Random.n(0,specs.height-1);
				}
				var race = Random.fromWeighted(specs.wildMonsters).race;
				var being = new Being(level.game, level, race);
				level.addBeing(being, x, y);
				if (race.aggresive){
					being.intent = 'CHASE';
				} else {
					being.intent = 'STILL';
				}
			}
		}
		/*level.addItem(new Item(Items.IRON_SWORD), Random.n(0,specs.width-1), Random.n(0,specs.height-1));
		level.addItem(new Item(Items.BOOK_OF_MIRDAS), Random.n(0,specs.width-1), Random.n(0,specs.height-1));*/
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
	CA_GRASS_RULES: [
		new Rule(Tiles.GRASS, Rule.MORE_THAN, 2, Tiles.TALL_GRASS, Tiles.TALL_GRASS, 50)
	],
	buildRoute: function(level, specs){
		// Place a road based on the orientation and some patches of grass
		switch (specs.orientation){
			case "HORIZONTAL":
				var midy = Math.round(specs.height/2);
				for (var x = 0; x < specs.width; x++){
					for (var y = midy-5; y < midy + 2; y++){
						this.level.map[x][y] = Tiles.ROAD;
					}
				}
			break;
			case "VERTICAL":
				var midx = Math.round(specs.width/2);
				for (var x = midx-5; x < midx+5; x++){
					for (var y = 0; y < specs.height; y++){
						this.level.map[x][y] = Tiles.ROAD;
					}
				}
			break;
		}
		var patches = Random.n(3,10);
		for (var i = 0; i < patches; i++){
			var w = Random.n(8,10);
			var h = Random.n(8,10);
			var x = Random.n(0,specs.width - w - 1);
			var y = Random.n(0,specs.height - h - 1);
			for (var xx = x; xx < x + w; xx++){
				for (var yy = y; yy < y + h; yy++){
					if (Random.chance(80)){
						this.level.map[xx][yy] = Tiles.TALL_GRASS;
					}
					if (xx > x + 3 && xx < x + w - 3 && yy > y + 3 && yy < y + h - 3 && Random.chance(30)){
						this.level.spawnPositions.push({x: xx, y: yy});
					}
				}
			}
		}
		// Run a Non deterministic CA to smooth patches of grass
		CA.runCA(level.map, this.CA_GRASS_RULES, 4);
	},
	buildTown: function(level, specs){
		// Place houses based on specs on a grid
		var grid = [];
		var gridx = Math.floor((specs.width - 6) / 10);
		var gridy = Math.floor((specs.height - 6) / 10);
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
			case 'mart':
				this.fillMart(x,y,w,h);
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
	},
	fillMart: function(x, y, w, h){
		for (var xx = x; xx < x + w; xx++){
			for (var yy = y; yy < y + h; yy++){
				if (xx === x || xx === x + w - 1 || yy === y || yy === y + h - 1){
					this.level.map[xx][yy] = Tiles.WALL;
				} else {
					this.level.map[xx][yy] = Tiles.FLOOR;
				}
			}
		}
		// Place door, counter and clerk
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
		var cx = xd;
		var cy = yd;
		var itemAreaBounds = {
			x1: x+1,
			y1: y+1,
			x2: x+w-2,
			y2: y+h-2,
		};
		if (xd === x){
			cx = x + w - 2;
			for (var yy = y+1; yy < y + h -1; yy++){
				this.level.map[x + w - 3][yy] = Tiles.V_COUNTER;
			}
			itemAreaBounds.x2 = x + w - 4;
		} else if (xd === x + w - 1){
			cx = x + 1;
			for (var yy = y+1; yy < y + h -1; yy++){
				this.level.map[x + 2][yy] = Tiles.V_COUNTER;
			}
			itemAreaBounds.x1 = x + 3;
		} else if (yd === y){
			cy = y + h - 2;
			for (var xx = x + 1; xx < x + w - 1; xx++){
				this.level.map[xx][y+h-3] = Tiles.H_COUNTER;
			}
			itemAreaBounds.y2 = y + h - 4;
		} else {
			cy = y + 1;
			for (var xx = x + 1; xx < x + w - 1; xx++){
				this.level.map[xx][y+2] = Tiles.H_COUNTER;
			}
			itemAreaBounds.y1 = y + 3;
		}
		this.level.addBeing(new Being(this.level.game, this.level, Races.STORE_CLERK), cx, cy);
		// Let's make this Nethack style lol!
		for (var xx = itemAreaBounds.x1; xx <= itemAreaBounds.x2; xx++){
			for (var yy = itemAreaBounds.y1; yy <= itemAreaBounds.y2; yy++){
				this.level.addItem(new Item(Items.POKEBALL), xx, yy);
				this.level.storePlaces.push({x: xx, y: yy});
			}
		}

	}
}