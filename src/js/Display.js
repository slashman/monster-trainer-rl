var TextBox = require('./ui/TextBox.class');
var Box = require('./ui/Box.class');

module.exports = {
	BLANK_TILE: new ut.Tile(' ', 255, 255, 255),
	CURSOR_TILE: new ut.Tile('*', 255, 255, 255),
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
		this.updateStatus();
		this.term.render();
	},
	updateStatus: function(){
		this.term.putString(this.game.world.level.name, 2, 5, 255, 255, 255);
		// Pokemon list
		this.term.putString("Pokemon", 2, 7, 255, 255, 255);
		var baseX = 3;
		var baseY = 8;
		for (var i = 0; i < this.game.player.monsterSlots.length; i++){
			var slot = this.game.player.monsterSlots[i];
			if (i == this.game.input.selectedMonsterSlot){
				this.term.putString(">"+(i+1)+"   "+slot.being.race.name, baseX-1, baseY + i*3, 255, 0, 0);
			} else {
				this.term.putString((i+1)+"   "+slot.being.race.name, baseX, baseY + i*3, 255, 255, 255);
			}
			this.term.put(slot.being.race.tile, baseX + 2, baseY + i*3);
			this.term.putString(slot.onPocket ? "  In Pokeball" : "  Released", baseX, baseY + i*3 + 1, 255, 255, 255);
		}
		// Pokemon actions
		baseX = 50;
		baseY = 8;
		if (this.game.input.selectedMonsterSlot !== undefined){
			var slot = this.game.player.monsterSlots[this.game.input.selectedMonsterSlot];
			var actions = [];
			if (slot.onPocket){
				actions.push({
					key: 'R',
					name: 'Release'
				});
			} else {
				// Get the pokemon actions
				actions.push({
					key: 'P',
					name: 'Pull back'
				});
			}
			this.term.putString(slot.being.race.name, baseX + 2, baseY, 255, 255, 255);
			this.term.put(slot.being.race.tile, baseX, baseY);
			for (var i = 0; i < actions.length; i++){
				this.term.putString("("+actions[i].key + ") " +actions[i].name, baseX, baseY + i + 1, 255, 255, 255);
			}
		} else {

		}
	},
	showInventory: function(){
		this.inventoryBox.draw();
		var xBase = 20;
		var yBase = 5;
		this.term.putString("Inventory", xBase, yBase, 255, 0, 0);
		for (var i = 0; i < this.game.player.items.length; i++){
			var item = this.game.player.items[i];
			if (item == this.game.input.selectedItem){
				this.term.put(this.CURSOR_TILE, xBase, yBase+1+i);
			} else {
				this.term.put(this.BLANK_TILE, xBase, yBase+1+i);
			}
			this.term.put(item.def.tile, xBase+2, yBase+1+i);
			this.term.put(item.def.tile, xBase+2, yBase+1+i);
			this.term.putString(item.def.name, xBase + 4, yBase+1+i, 255, 255, 255);
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
