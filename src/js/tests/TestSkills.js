// Test all skills can be executed against random targets
global.ut = {
	Tile: function(){}
}

var Races = require('../monster/Races.enum')
var Skills = require('../monster/Skills.enum')
var Being = require('../Being.class')
var Random = require('../Random')

// Mock data
var mockGame = {
	display: {
		message: function(m){
			console.log(m)
		}
	},
	world: mockWorld
};
var mockLevel = {
	game: mockGame,
	removeBeing: function(){}
}
var mockWorld = {
	level: mockLevel
}
mockGame.world = mockWorld;

// Tests 
for (var s in Skills){
	s = Skills[s];
	var enemy = new Being(mockGame, mockLevel, Random.fromObject(Races), Random.n(1,100));
	var monster = new Being(mockGame, mockLevel, Random.fromObject(Races), Random.n(1,100));
	monster.getNearestEnemy = function(){
		return enemy;
	}
	console.log("Testing skill "+s.name);
	var effect = s.effect;
	if (effect === null || effect === undefined){
		console.log("Skill has no effect.");
		//TODO: Assert false when all skill effects implemented
		continue;
	}
	effect(monster, s);
}