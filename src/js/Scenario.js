var Races = require('./Races.enum');
var Being = require('./Being.class');
var Stat = require('./Stat.class');

module.exports = {
	start: function(game){
		game.player.hp = new Stat(40);
		var charmander = new Being(game, false, Races.CHARMANDER);
		game.player.addMonster(charmander, 0);
		charmander = new Being(game, false, Races.RATTATA);
		game.player.addMonster(charmander, 1);
		charmander = new Being(game, false, Races.RATTATA);
		game.player.addMonster(charmander, 2);
	}
}