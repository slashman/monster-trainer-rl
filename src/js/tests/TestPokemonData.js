global.ut = {
	Tile: function(){}
}
var Races = require('../monster/Races.enum')
var Being = require('../Being.class')

/*
 * Make sure all pokemon can evolve
 */
var mockLevel = {
	game: {
		display: {
			message: function(m){
				console.log(m)
			}
		}
	}
}


for (var r in Races){
	r = Races[r];
	console.log("Testing race "+r.name);
	var being = new Being(mockLevel.game, mockLevel, r, 1);
	for (var i = 0; i < 100; i++){
		//console.log("Level "+i);
		being.levelUp();
	}
	console.log("Skills "+being.skills.map((skill) => skill.skill.name));
	//if (being.skills[0]) console.log("Skills "+JSON.stringify(being.skills[0]));
}