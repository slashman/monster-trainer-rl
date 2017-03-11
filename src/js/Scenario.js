var Display = require('./Display');
var Races = require('./Races.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var Items = require('./Items.enum');
var Stat = require('./Stat.class');

module.exports = {
	start: function(game){
		game.player.hp = new Stat(40);
		game.player.money = 1000;
		var charmander = new Being(game, false, Races.CHARMANDER);
		game.player.addMonster(charmander);
		charmander = new Being(game, false, Races.RATTATA);
		game.player.addMonster(charmander);
		charmander = new Being(game, false, Races.RATTATA);
		game.player.addMonster(charmander);
		charmander = new Being(game, false, Races.PIDGEY);
		game.player.addMonster(charmander);
		charmander = new Being(game, false, Races.CHARMANDER);
		game.player.addMonster(charmander);

		Display.textBox.setText("You picked charmander, the fire pokemon.");
		game.player.addItem(new Item(Items.POKEBALL));
		game.player.addItem(new Item(Items.POKEBALL));
		game.player.addItem(new Item(Items.SUPERBALL));
		game.player.addItem(new Item(Items.SUPERBALL));
		game.player.addItem(new Item(Items.POTION));
		game.player.addItem(new Item(Items.SUPER_POTION));
		game.player.addItem(new Item(Items.POTION));
		game.player.addItem(new Item(Items.SUPER_POTION));
	}
}