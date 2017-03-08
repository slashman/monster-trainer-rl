var Level = require('./Level.class');

var Random = require('./Random');

module.exports = {
	levels: {},
	init: function(game){
		this.game = game;
		this.player = game.player;
		this.loadLevel('testLevel'+Random.n(0,1000));
	},
	loadLevel: function(levelId){
		if (this.levels[levelId]){
			this.level.exitX = this.player.x;
			this.level.exitY = this.player.y;
			this.level = this.levels[levelId];
			this.player.x = this.level.exitX;
			this.player.y = this.level.exitY;
		} else {
			if (this.level){
				this.level.exitX = this.player.x;
				this.level.exitY = this.player.y;
				this.level = new Level(this.game, levelId, this.level.id);
			} else {
				this.level = new Level(this.game, levelId);
			}
			this.levels[levelId] = this.level;
		}
	}
}