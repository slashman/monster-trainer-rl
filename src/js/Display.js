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
		this.term.putString("HP "+this.game.player.hp.getText(), 2, 3, 255, 255, 255);
		this.term.putString("$"+this.game.player.money, 2, 4, 255, 255, 255);
		this.term.putString(this.game.world.level.name, 2, 5, 255, 255, 255);
		// Pokemon list
		var baseX = 3;
		var baseY = 7;
		for (var i = 0; i < this.game.player.monsterSlots.length; i++){
			var slot = this.game.player.monsterSlots[i];
			if (!slot){
				continue;
			}
			if (i == this.game.input.selectedMonsterSlot){
				this.term.putString(">"+(i+1)+"   "+slot.being.race.name, baseX-1, baseY + i*3, 255, 0, 0);
			} else {
				this.term.putString((i+1)+"   "+slot.being.race.name, baseX, baseY + i*3, 255, 255, 255);
			}
			this.term.put(slot.being.race.tile, baseX + 2, baseY + i*3);
			this.term.putString("  Lv"+slot.being.xpLevel+" HP "+slot.being.hp.getText(), baseX, baseY + i*3 + 1, 255, 255, 255);
			this.term.putString(slot.onPocket ? "  In Pokeball" : "  Released", baseX, baseY + i*3 + 2, 255, 255, 255);
		}
		// Pokemon actions
		baseX = 60;
		baseY = 8;
		var actions = []; //TODO: Cache this
		if (this.game.player.gymTown){
			actions.push({
				key: 'G',
				name: 'Give up'
			});
		}
		if (this.game.input.selectedMonsterSlot !== undefined && this.game.input.selectedMonsterSlot !== false){
			var slot = this.game.player.monsterSlots[this.game.input.selectedMonsterSlot];
			if (slot.onPocket){
				actions.push({
					key: 'R',
					name: 'Release'
				});

			} else {
				actions.push({
					key: 'P',
					name: 'Pull back'
				});
			}
			for (var i = 0; i < slot.being.skills.length; i++){
				actions.push({
					key: slot.onPocket ? '*' : this.SKILL_KEYS[i].key,
					name: slot.being.skills[i].skill.name + "["+slot.being.skills[i].pp.getText()+"]"
				})
			}
			this.term.putString(slot.being.race.name, baseX + 2, baseY, 255, 255, 255);
			this.term.put(slot.being.race.tile, baseX, baseY);
			this.term.putString("HP "+slot.being.hp.getText()+" Lv"+slot.being.xpLevel, baseX, baseY + 1, 255, 255, 255);
			this.term.putString("("+slot.being.xp+"/"+slot.being.nextLevelXP+")", baseX, baseY + 2, 255, 255, 255);


			this.term.putString(slot.being.race.name, baseX + 2, baseY, 255, 255, 255);
			this.term.putString(slot.being.race.name, baseX + 2, baseY, 255, 255, 255);

		} 
		for (var i = 0; i < actions.length && i < 4; i++){
			this.term.putString("("+actions[i].key + ") " +actions[i].name, baseX, baseY + i + 4, 255, 255, 255);
		}
	},
	SKILL_KEYS: [
		{
			key: "Z"
		},
		{
			key: "X"
		},
		{
			key: "C"
		},
		{
			key: "V"
		}
	],
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
