var Random = require('../Random');
var DamageEffect = require('./DamageEffect');

module.exports = {
	DAMAGE: function(monster, skill){
		return DamageEffect.effect(monster, skill);
	},
	LOWER_STAT: function(monster, skill){
		monster.game.display.message(monster.race.name+" uses "+skill.name);
	}
}