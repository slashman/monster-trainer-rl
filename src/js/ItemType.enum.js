var Random = require('./Random');

module.exports = {
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
					if (monster.slotNumber){
						game.display.message(monster.race.name+" is already in your team.");
					} else {
						var catchChance = 100 - monster.hp.getProportion() * 100 + 5 + (item.catchBoost ? item.catchBoost : 0);
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
			game.display.message("You read the "+item.def.name);
		}
	}
}