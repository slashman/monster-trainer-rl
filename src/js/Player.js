var Tiles = require('./Tiles.enum');
var Being = require('./Being.class');

module.exports = {
	badgesCount: 0,
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
		being.isTame = true;
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
			// Check for NPCs
			var npc = this.game.world.level.getBeing(this.x+dir.x, this.y+dir.y);
			if (npc && npc.race.interact){
				this.game.input.inputEnabled = true;
				npc.race.interact(this);
				return;
			}
			// Check for counters
			var tile = this.game.world.level.getCell(this.x+dir.x, this.y+dir.y);
			if (tile && tile.isCounter){
				// Check for NPC further
				var npc = this.game.world.level.getBeing(this.x+dir.x*2, this.y+dir.y*2);
				if (npc && npc.race.interact){
					this.game.input.inputEnabled = true;
					npc.race.interact(this);
					return;
				}
			}
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
		if (this.game.world.level.map[this.x][this.y] === Tiles.GYM_ENTRANCE && !this.game.world.level.gymComplete){
			this.game.display.message("Are you ready to challenge "+this.game.world.level.gymInfo.name+"? [Y/N]");
			this.game.input.mode = "PROMPT";
			this.game.input.promptFunction = this.confirmChallengeGym.bind(this);
			this.endTurn();
		} else if (!this.gymTown && this.game.world.level.exits[this.x] && this.game.world.level.exits[this.x][this.y]){
			this.game.world.loadLevel(this.game.world.level.exits[this.x][this.y]);
			this.endTurn();
		} else {
			this.endTurn();
		}
	},
	confirmChallengeGym: function(confirm){
		if (confirm){
			this.gymTown = this.game.world.level; 
			this.game.world.loadLevel(this.game.world.level.gymInfo.toId);
			this.endTurn();
		} else {
			this.game.display.message("Some other time.");
		}
		this.game.input.mode = "MOVEMENT";
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
	canPick: function(){
		return this.items.length < 24;
	},
	addItem: function(item){
		if (this.items.length === 24){
			return;
		}
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
			if (item.forSale){
				this.game.display.message("This "+item.def.name+" costs "+item.def.cost+". Do you want to buy it? [Y/N]");
				this.game.input.mode = "PROMPT";
				this.buyingItem = item;
				this.game.input.promptFunction = this.confirmBuy.bind(this);
			} else if (item.def.type.pickupFunction){
				item.def.type.pickupFunction(this.game, item);
			} else if (!this.canPick()){
				this.game.display.message("You can't pickup the "+item.def.name);
			} else {
				this.game.display.message("You pickup the "+item.def.name);
				this.game.world.level.removeItem(this.x, this.y);
				this.addItem(item);
			}
		}
	},
	confirmBuy: function(confirm){
		if (confirm){
			if (!this.canPick())
				this.game.display.message("You can't pickup the "+this.buyingItem.def.name);
			else if (this.money >= this.buyingItem.def.cost){
				this.money -= this.buyingItem.def.cost;
				this.game.display.message("Thank you!");
				this.game.world.level.removeItem(this.x, this.y);
				this.addItem(this.buyingItem);
			} else {
				this.game.display.message("Sorry, you can't afford it.");
			}
		} else {
			this.game.display.message("Alright");
		}
		this.game.input.mode = "MOVEMENT";
		this.game.player.endTurn();
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
		if (this.gymTown){
			if (this.releasedMonster){
				this.game.display.message("You are on a one on one duel.");
				return;
			} else {
				this.releasedMonster = true;
			}
		}
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
		if (this.gymTown){
			this.releasedMonster = false;
		}
		var slot = this.monsterSlots[this.game.input.selectedMonsterSlot];
		slot.onPocket = true;
		this.game.world.level.removeBeing(slot.being);
		this.game.display.message(slot.being.race.name+"... come back.");
		this.endTurn();
	},
	pullBackAll: function(){
		for (var i = 0; i < this.monsterSlots.length; i++){
			var slot = this.monsterSlots[i];
			if (slot && !slot.onPocket){
				slot.onPocket = true;
				this.game.world.level.removeBeing(slot.being);
			}
		}
	},
	healAll: function(){
		for (var i = 0; i < this.monsterSlots.length; i++){
			var slot = this.monsterSlots[i];
			if (slot && slot.being){
				slot.being.heal();
			}
		}
	},
	getMonster: function(race){
		if (this.getAvailableSlotNumber() === false){
			this.game.display.message("You don't have any pokeslots available");
			return;
		}
		if (this.pickedStarter){
			this.game.display.message("You already picked your starter pokemon.");
			return;	
		}

		this.game.display.message("Do you want to pick "+race.name+", "+race.pickupDescription+"? [Y/N]");
		this.game.input.mode = "PROMPT";
		this.game.input.promptFunction = function(confirm){
			if (confirm){
				var monster = new Being(this.game, false, race, 1);
				this.addMonster(monster);
				this.game.display.message(race.name+" joins!");
				this.game.world.level.removeItem(this.x, this.y);
				this.game.input.selectAvailableMonsterSlot();
				this.pickedStarter = true;
			} else {
				this.game.display.message(" N.");
			}
			this.endTurn();
			this.game.input.mode = "MOVEMENT";
		}.bind(this);
	},
	giveUpGymBattle: function(){
		if (!this.gymTown){
			return;
		}
		this.game.display.message("Do you want to give up this gym battle? [Y/N] ");
		this.game.input.mode = "PROMPT";
		this.game.input.promptFunction = function(confirm){
			if (confirm){
				this.game.display.message("Better luck next time!");
				this.gymTown = false;
			} else {
				this.game.display.message("Keep fighting!");
			}
			this.endTurn();
			this.game.input.mode = "MOVEMENT";
		}.bind(this);
	}
}