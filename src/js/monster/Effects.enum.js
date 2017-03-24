var Random = require('../Random');
var DamageEffect = require('./DamageEffect');
var ModifyStatEffect = require('./ModifyStatEffect');

module.exports = {
	DAMAGE: function(monster, skill){
		return DamageEffect.effect(monster, skill);
	},
	LOWER_STAT: function(monster, skill){
		ModifyStatEffect.effect(monster, skill, -1);
	},
	RAISE_STAT: function(monster, skill){
		ModifyStatEffect.effect(monster, skill, 1);
	}
}