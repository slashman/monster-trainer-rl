module.exports = {
	inputEnabled: true,
	init: function(game){
		this.game = game;
		ut.initInput(this.onKeyDown.bind(this));
	},
	movedir: { x: 0, y: 0 },
	onKeyDown: function(k){
		if (!this.inputEnabled)
			return;
		this.movedir.x = 0;
		this.movedir.y = 0;
		if (k === ut.KEY_LEFT || k === ut.KEY_H) this.movedir.x = -1;
		else if (k === ut.KEY_RIGHT || k === ut.KEY_L) this.movedir.x = 1;
		else if (k === ut.KEY_UP || k === ut.KEY_K) this.movedir.y = -1;
		else if (k === ut.KEY_DOWN || k === ut.KEY_J) this.movedir.y = 1;
		else return;
		this.inputEnabled = false;
		this.game.player.tryMove(this.movedir);
	}
}