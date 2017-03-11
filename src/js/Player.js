module.exports = {
	MAX_SIGHT_RANGE: 10,
	x: 20,
	y: 20,
	tile: new ut.Tile('@', 255, 255, 255),
	visible: [],
	memory: {},
	items: [],
	monsterSlots: [],
	addMonster: function(being, slotNumber){
		if (slotNumber && this.monsterSlots[slotNumber]){
			this.game.display.message("Cannot put monster in that slot");
			return;
		}
		if (slotNumber === undefined){
			slotNumber = this.getAvailableSlotNumber();
		}
		if (slotNumber === undefined){
			this.game.display.message("No slots available.");
			return;
		}
		being.isFriendly = true;
		this.monsterSlots[slotNumber] = {
			being: being,
			onPocket: true
		}
		being.slotNumber = slotNumber;
	},
	getAvailableSlotNumber: function(){
		for (var i = 0; i < 6; i++){
			if (!this.game.player.monsterSlots[i]){
				return i;
			}
		}
		return false;
	},
	init: function(game){
		this.game = game;
		for (var j = -this.MAX_SIGHT_RANGE; j <= this.MAX_SIGHT_RANGE; j++){
			this.visible[j] = [];
		}
	},
	tryMove: function(dir){
		if (!this.game.world.level.canWalkTo(this.x+dir.x, this.y+dir.y)){
			this.game.input.inputEnabled = true;
			return;
		}
		this.x += dir.x;
		this.y += dir.y;
		this.land();
	},
	die: function(){
		this.game.display.message("You die!");
		this.game.input.mode = 'NONE';
	},
	land: function(){
		if (this.game.world.level.exits[this.x] && this.game.world.level.exits[this.x][this.y]){
			this.game.world.loadLevel(this.game.world.level.exits[this.x][this.y]);
		}
		this.endTurn();
	},
	endTurn: function(){
		this.updateFOV();
		this.game.display.refresh();
		this.game.world.level.beingsTurn();
	},
	remember: function(x, y){
		var memory = this.memory[this.game.world.level.id];
		if (!memory){
			memory = [];
			this.memory[this.game.world.level.id] = memory;
		}
		if (!memory[x]){
			memory[x] = [];
		}
		memory[x][y] = true;
	},
	remembers: function(x, y){
		var memory = this.memory[this.game.world.level.id];
		if (!memory){
			return false;
		}
		if (!memory[x]){
			return false;
		}
		return memory[x][y] === true;
	},
	canSee: function(dx, dy){
		try {
			return this.visible[dx][dy] === true;
		} catch(err) {
			// Catch OOB
			return false; 
		}
	},
	getSightRange: function(){
		return 15;
	},
	updateFOV: function(){
		/*
		 * This function uses simple raycasting, 
		 * use something better for longer ranges
		 * or increased performance
		 */
		for (var j = -this.MAX_SIGHT_RANGE; j <= this.MAX_SIGHT_RANGE; j++)
			for (var i = -this.MAX_SIGHT_RANGE; i <= this.MAX_SIGHT_RANGE; i++)
				this.visible[i][j] = false;
		var step = Math.PI * 2.0 / 1080;
		for (var a = 0; a < Math.PI * 2; a += step)
			this.shootRay(a);
	},
	shootRay: function (a) {
		var rayStrength = 2;
		var step = 0.3333;
		var maxdist = this.getSightRange() < this.MAX_SIGHT_RANGE ? this.getSightRange() : this.MAX_SIGHT_RANGE;
		maxdist /= step;
		rayStrength /= step;
		var dx = Math.cos(a) * step;
		var dy = -Math.sin(a) * step;
		var xx = this.x, yy = this.y;
		for (var i = 0; i < maxdist; ++i) {
			var testx = Math.round(xx);
			var testy = Math.round(yy);
			this.visible[testx-this.x][testy-this.y] = true;
			this.remember(testx, testy);
			try { 
				if (this.game.world.level.map[testx][testy].opaque){
					return;
				} else if (this.game.world.level.map[testx][testy].semiopaque){
					rayStrength --;
					if (rayStrength < 0){
						return;
					}
				}
			} catch(err) {
				// Catch OOB
				return; 
			}
			xx += dx; yy += dy;
		}
	},
	addItem: function(item){
		this.items.push(item);
		this.items.sort(this.itemSorter);
	},
	removeItem: function(item){
		this.items.splice(this.items.indexOf(item), 1);
		this.items.sort(this.itemSorter);	
	},
	itemSorter: function(a, b){
		if (a.def.type.name === b.def.type.name){
			return a.def.name > b.def.name ? 1 : -1;
		} else {
			return a.def.type.name > b.def.type.name ? 1 : -1;
		}
	},
	tryPickup: function(){
		var item = this.game.world.level.getItem(this.x, this.y);
		if (item){
			this.game.display.message("You pickup the "+item.def.name);
			this.game.world.level.removeItem(this.x, this.y);
			this.addItem(item);
		}
	},
	tryDrop: function(item){
		var underItem = this.game.world.level.items[this.x] && this.game.world.level.items[this.x][this.y];
		if (underItem){
			this.game.display.message("Cannot drop the "+item.def.name+" here.");
		} else {
			this.game.world.level.addItem(item, this.x, this.y);
			this.removeItem(item);
			this.game.display.message("You drop the "+item.def.name+".");
		}
	},
	tryUse: function(item, dx, dy){
		item.def.type.useFunction(this.game, item, dx, dy);
	},
	releaseMonster: function(dir){
		var slot = this.monsterSlots[this.game.input.selectedMonsterSlot];
		if (this.game.world.level.canWalkTo(this.x + dir.x, this.y + dir.y) &&
			this.game.world.level.canWalkTo(this.x + dir.x * 2, this.y + dir.y * 2)){
			slot.onPocket = false;
			slot.being.level = this.game.world.level;
			this.game.world.level.addBeing(slot.being, this.x + dir.x * 2, this.y + dir.y * 2);
			this.game.display.message("Go "+slot.being.race.name+"!");
			this.endTurn();
		} else {
			this.game.display.message("No space!");
		}
	},
	pullBack: function(){
		var slot = this.monsterSlots[this.game.input.selectedMonsterSlot];
		slot.onPocket = true;
		this.game.world.level.removeBeing(slot.being);
		this.game.display.message(slot.being.race.name+"... come back.");
		this.endTurn();
	}
}