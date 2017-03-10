var Level = require('./Level.class');
var MetadataGenerator = require('./MetadataGenerator');
var LevelGenerator = require('./LevelGenerator');

var Random = require('./Random');

module.exports = {
	levels: {},
	metadata: {},
	init: function(game){
		this.game = game;
		this.player = game.player;
		this.metadata = MetadataGenerator.generateMetadata();
		this.loadLevel("PALLET_TOWN");
	},
	loadLevel: function(levelId){
		var oldLevel = this.game.world.level;
		if (this.levels[levelId]){
			this.level = this.levels[levelId];
		} else {
			this.level = new Level(this.game, levelId);
			LevelGenerator.generateTestLevel(this.level, this.metadata[levelId]);
			this.levels[levelId] = this.level;
		}
		if (!this.metadata[levelId].startPosition){
			// Look for the exit from whence we came
			var exit = this.level.getExit(oldLevel.id);
			this.player.x = exit.x;
			this.player.y = exit.y;
		}
	}
}