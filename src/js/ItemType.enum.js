var Random = require('./Random');

module.exports = {
	LOADED_POKEBALL: {
		name: 'Loaded Pokeball',
		pickupFunction: function(game, item){
			game.player.getMonster(item.def.race);
		}
	},
	POKEBALL: {
		name: 'Pokeball',
		useFunction: function(game, item, dx, dy){
			if (game.player.getAvailableSlotNumber() === false){
				game.display.message("You don't have any pokeslots available");
				return;
			}
			game.display.message("You throw the "+item.def.name+"!");
			game.player.removeItem(item);
			for (var i = 1; i < 5; i++){
				var monster = game.world.level.getBeing(game.player.x+i*dx, game.player.y+i*dy);
				if (monster){
					if (monster.slotNumber !== undefined){
						game.display.message(monster.race.name+" is already in your team.");
					} else {
						var catchChance = 100 - monster.hp.getProportion() * 100 + 5 + (item.def.catchBoost ? item.def.catchBoost : 0);
						if (Random.chance(catchChance)){
							game.display.message("You capture the "+monster.race.name+"!");
							game.player.addMonster(monster);
							game.world.level.removeBeing(monster);
						} else {
							game.display.message("The "+monster.race.name+" breaks free!");
						}
					}
					game.player.endTurn();
					return;
				}
				if (!game.world.level.canWalkTo(game.player.x+i*dx, game.player.y+i*dy)){
					break;
				}
			}
			i--;
			game.world.level.addItem(item, game.player.x+i*dx, game.player.y+i*dy);
			game.player.endTurn();
		},
		targetted: true
	},
	POTION: {
		name: 'Potion',
		useFunction: function(game, item, dx, dy){
			var monster = game.world.level.getBeing(game.player.x+dx, game.player.y+dy);
			if (monster){
				game.display.message("The "+monster.race.name+" recovers "+item.def.points+" HP.");
				game.player.removeItem(item);
				monster.recoverHP(item.def.points);
				game.player.endTurn();
			} else {
				game.display.message("There's no pokemon there");
			}
		},
		targetted: true
	},
	BADGE: {
		name: "Badge",
		useFunction: function(game, item){
			game.display.message("You proudly show off the "+item.def.name+".");
		}
	}
}