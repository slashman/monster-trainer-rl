var Display = require('./Display');
var World = require('./World');
var Player = require('./Player');
var Input = require('./Input');
var Scenario = require('./Scenario');

var Game = {
	start: function(){
		this.display = Display;
		this.world = World;
		this.player = Player;
		this.input = Input;
		Display.init(this);
		Player.init(this);
		World.init(this);
		Input.init(this);
		Scenario.start(this);
		this.player.updateFOV();
		Display.refresh();
	}
}

window.Game = Game;

module.exports = Game;