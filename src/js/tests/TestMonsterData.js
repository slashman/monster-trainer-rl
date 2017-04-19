global.ut = {
	Tile: function(){}
}
var Races = require('../monster/Races.enum')
var Being = require('../Being.class')

/*
 * Make sure all monsters can evolve
 */
var mockLevel = {
	game: {
		display: {
			message: function(m){
				
			}
		}
	}
}


for (var r in Races){
	r = Races[r];
	var being = new Being(mockLevel.game, mockLevel, r, 1);
	for (var i = 0; i < 100; i++){
		being.levelUp();
	}
	if (being.skills.length === 0){
		console.log("**** "+r.name+ " has no skills");
	} else {
		console.log(r.name+ " ("+being.race.name+")");
		console.log(""+being.skills.map((skill) => " "+skill.skill.name));
	}
}