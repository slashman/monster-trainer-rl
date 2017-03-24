var Stats = require('./Stats.enum');

var MODIFIER_MESSAGES = {
	"-2": "greatly fell!",
	"-1": "fell!",	
	"1": "rose!",
	"2": "greatly rose!",
};

module.exports = {
	effect: function(monster, skill, sign){
		var level = skill.params.level ? skill.params.level : 1;
		if (sign > 0){
			monster.game.display.message(monster.race.name+" uses "+skill.name);
			target = monster;
		} else {
			var enemy = monster.getNearestEnemy();
			monster.game.display.message(monster.race.name+" uses "+skill.name+" on the "+enemy.race.name+".");
			target = enemy;
		}
		monster.game.display.message("The "+target.race.name+" "+Stats[skill.params.stat].name+" "+MODIFIER_MESSAGES[(level*sign)]);
		target.changeStat(skill.params.stat, 5, level * sign);
	}
}