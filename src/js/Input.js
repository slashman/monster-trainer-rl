module.exports = {
	inputEnabled: true,
	init: function(game){
		this.game = game;
		ut.initInput(this.onKeyDown.bind(this));
		this.mode = 'MOVEMENT';
		this.SKILL_KEYS = {};
		this.SKILL_KEYS[ut.KEY_Z] = 0;
		this.SKILL_KEYS[ut.KEY_X] = 1;
		this.SKILL_KEYS[ut.KEY_C] = 2;
		this.SKILL_KEYS[ut.KEY_V] = 3;
	},
	movedir: { x: 0, y: 0 },
	selectAvailableMonsterSlot: function(){
		this.selectedMonsterSlot = false;
		for (var i = 0; i < this.game.player.monsterSlots.length; i++){
			if (this.game.player.monsterSlots[i]){
				this.selectedMonsterSlot = i;
				return;
			}
		}
	},
	onKeyDown: function(k){
		if (!this.inputEnabled)
			return;
		if (this.mode === "SCENE"){
			if (k === ut.KEY_ENTER){
				this.game.display.hideScene();
				this.mode = "MOVEMENT";
			}
		} else if (this.mode === "PROMPT"){
			if (k === ut.KEY_Y){
				this.promptFunction(true);
			} else if (k === ut.KEY_N){
				this.promptFunction(false);
			}
		} else if (this.mode === 'MOVEMENT'){
			if (k === ut.KEY_COMMA){
				this.game.player.tryPickup();
				return;
			}
			if (k === ut.KEY_I){
				if (this.game.player.items.length === 0){
					this.game.display.message("You don't have any items");
					return;
				}
				this.mode = 'INVENTORY';
				this.selectedItemIndex = 0;
				this.selectedItem = this.game.player.items[0];
				this.game.display.showInventory();
				return;
			}
			// Monster slots
			if (k >= ut.KEY_1 && k <= ut.KEY_6){
				var slot = k-ut.KEY_1;
				if (this.game.player.monsterSlots[slot]){
					this.selectedMonsterSlot = slot;
					this.game.display.refresh();
				}
				return;
			}
			if (k === ut.KEY_R){
				//Release
				var slot = this.game.player.monsterSlots[this.selectedMonsterSlot];
				if (slot && slot.onPocket){
					this.game.display.message("Select a direction.");
					this.mode = 'SELECT_DIRECTION';
					this.directionAction = 'RELEASE_MONSTER';
				}
				return;
			}
			if (k === ut.KEY_G){
				// Give up
				this.game.player.giveUpGymBattle();
				return;
			}
			if (k === ut.KEY_P){
				// Pull back
				var slot = this.game.player.monsterSlots[this.selectedMonsterSlot];
				if (slot && !slot.onPocket){
					this.game.player.pullBack();
				}
				return;
			}
			if (k === ut.KEY_Z || k === ut.KEY_X || k === ut.KEY_C || k === ut.KEY_V){
				var slot = this.game.player.monsterSlots[this.selectedMonsterSlot];
				if (slot && !slot.onPocket){
					var index = this.SKILL_KEYS[k];
					slot.being.useSkill(index);
				}
				return;
			}

			// Movement
			this.movedir.x = 0;
			this.movedir.y = 0;
			if (k === ut.KEY_LEFT || k === ut.KEY_H) this.movedir.x = -1;
			else if (k === ut.KEY_RIGHT || k === ut.KEY_L) this.movedir.x = 1;
			else if (k === ut.KEY_UP || k === ut.KEY_K) this.movedir.y = -1;
			else if (k === ut.KEY_DOWN || k === ut.KEY_J) this.movedir.y = 1;
			else return;
			this.inputEnabled = false;
			this.game.player.tryMove(this.movedir);
		} else if (this.mode === 'INVENTORY'){
			if (k === ut.KEY_ESCAPE){
				this.game.display.hideInventory();
				this.mode = 'MOVEMENT';
			} else if (k === ut.KEY_UP || k === ut.KEY_K){
				if (this.selectedItemIndex > 0){
					this.selectedItemIndex --;
				}
				this.selectedItem = this.game.player.items[this.selectedItemIndex];
				this.game.display.showInventory();
			} else if (k === ut.KEY_DOWN || k === ut.KEY_J){
				if (this.selectedItemIndex < this.game.player.items.length - 1){
					this.selectedItemIndex ++;
				}
				this.selectedItem = this.game.player.items[this.selectedItemIndex];
				this.game.display.showInventory();
			} else if (k === ut.KEY_D){
				this.game.player.tryDrop(this.selectedItem);
				this.game.display.hideInventory();
				this.mode = 'MOVEMENT';
			} else if (k === ut.KEY_ENTER || k === ut.KEY_U){
				if (this.selectedItem.def.targetted || this.selectedItem.def.type.targetted){
					this.game.display.message("Select a direction.");
					this.game.display.hideInventory();
					this.mode = 'SELECT_DIRECTION';
					this.directionAction = 'USE_ITEM';
				} else {
					this.game.player.tryUse(this.selectedItem);
					this.game.display.hideInventory();
					this.mode = 'MOVEMENT';
				}
			}
		} else if (this.mode === 'SELECT_DIRECTION'){
			if (k === ut.KEY_ESCAPE){
				if (this.directionAction === 'USE_ITEM'){
					this.mode = 'INVENTORY';
					this.game.display.showInventory();
				} else if (this.directionAction === 'RELEASE_MONSTER'){
					this.mode = 'MOVEMENT';
				}
				this.game.display.message("Cancelled.");
				return;
			}
			this.movedir.x = 0;
			this.movedir.y = 0;
			if (k === ut.KEY_LEFT || k === ut.KEY_H) this.movedir.x = -1;
			else if (k === ut.KEY_RIGHT || k === ut.KEY_L) this.movedir.x = 1;
			else if (k === ut.KEY_UP || k === ut.KEY_K) this.movedir.y = -1;
			else if (k === ut.KEY_DOWN || k === ut.KEY_J) this.movedir.y = 1;
			else return;
			if (this.directionAction === 'USE_ITEM'){
				this.game.player.tryUse(this.selectedItem, this.movedir.x, this.movedir.y);
			} else if (this.directionAction === 'RELEASE_MONSTER'){
				this.game.player.releaseMonster(this.movedir);
			}
			this.mode = 'MOVEMENT';
		}
	}
}