var TextBox = require('./ui/TextBox.class');
var Box = require('./ui/Box.class');

module.exports = {
	init: function(game){
		this.game = game;
		this.term = new ut.Viewport(document.getElementById("game"), 80, 25);
		this.eng = new ut.Engine(this.term, this.getDisplayedTile.bind(this), 80, 25);
		this.textBox = new TextBox(this.term, 2, 80, {x:0, y:0});
		this.inventoryBox = new Box(this.term, 15, 40, {x:19, y:4});
	},
	getDisplayedTile: function(x,y){
		var level = this.game.world.level;
		if (x === level.player.x && y === level.player.y){
			return level.player.tile;
		}
		var xr = x - level.player.x;
		var yr = y - level.player.y;
		if (level.player.canSee(xr, yr)){
			if (level.beings[x] && level.beings[x][y]){
				return level.beings[x][y].tile;
			} else if (level.items[x] && level.items[x][y]){
				return level.items[x][y].def.tile;
			} else if (level.map[x] && level.map[x][y]){
				return level.map[x][y].tile;
			} else {
				return ut.NULLTILE;
			}
		} else if (level.player.remembers(x, y)){
			if (level.map[x] && level.map[x][y]){
				return level.map[x][y].darkTile;
			} else {
				return ut.NULLTILE;
			}
		} else {
			return ut.NULLTILE;
		}
	},
	refresh: function(){
		this.eng.update(this.game.player.x, this.game.player.y);
		this.textBox.draw();
		this.term.render();
	},
	showInventory: function(){
		this.inventoryBox.draw();
		var xBase = 20;
		var yBase = 5;
		this.term.putString("Inventory", xBase, yBase, 255, 0, 0);
		for (var i = 0; i < this.game.player.items.length; i++){
			var item = this.game.player.items[i];
			this.term.put(item.def.tile, xBase, yBase+1+i);
			this.term.putString(item.def.name, xBase + 2, yBase+1+i, 255, 255, 255);
		}
		this.term.render();
	},
	hideInventory: function(){
		this.term.clear();
		this.refresh();		
	},
	message: function(str){
		this.textBox.addText(str);
		this.textBox.draw();
		this.term.render();
	}
}
