var Display = require('./Display');
var Races = require('./monster/Races.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var Items = require('./Items.enum');
var Stat = require('./Stat.class');

module.exports = {
	start: function(game){
		game.player.hp = new Stat(40);
		game.player.money = 1000;
		var charmander = new Being(game, false, Races.CHARMANDER, 16);
		game.player.addMonster(charmander);
		charmander = new Being(game, false, Races.RATTATA, 2);
		game.player.addMonster(charmander);
		charmander = new Being(game, false, Races.RATTATA, 3);
		game.player.addMonster(charmander);
		charmander = new Being(game, false, Races.PIDGEY, 4);
		game.player.addMonster(charmander);
		charmander = new Being(game, false, Races.CHARMANDER, 2);
		game.player.addMonster(charmander);

		game.player.addItem(new Item(Items.POKEBALL));
		game.player.addItem(new Item(Items.POKEBALL));
		game.player.addItem(new Item(Items.GREATBALL));
		game.player.addItem(new Item(Items.GREATBALL));
		game.player.addItem(new Item(Items.POTION));
		game.player.addItem(new Item(Items.SUPER_POTION));
		game.player.addItem(new Item(Items.POTION));
		game.player.addItem(new Item(Items.SUPER_POTION));
	}
}