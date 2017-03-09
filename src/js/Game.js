var Display = require('./Display');
var World = require('./World');
var Player = require('./Player');
var Input = require('./Input');

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
		this.player.updateFOV();
		Display.refresh();
		Display.textBox.setText("Welcome to JSBoilerRL. This is a very long text just to confirm how the textbox works with long long texts.");
	}
}

window.Game = Game;

module.exports = Game;