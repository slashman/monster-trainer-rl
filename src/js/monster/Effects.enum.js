var Random = require('../Random');
var DamageEffect = require('./DamageEffect');
var ModifyStatEffect = require('./ModifyStatEffect');
var Status = require('./Status.enum');

module.exports = {
	DAMAGE: function(monster, skill){
		return DamageEffect.effect(monster, skill);
	},
	LOWER_STAT: function(monster, skill){
		ModifyStatEffect.effect(monster, skill, -1);
	},
	RAISE_STAT: function(monster, skill){
		ModifyStatEffect.effect(monster, skill, 1);
	},
	NOTHING: function(monster, skill){
		monster.game.display.message(monster.race.name+" uses "+skill.name);
		monster.game.display.message("Nothing happens");
	},
	SET_STATUS: function(monster, skill){
		monster.game.display.message(monster.race.name+" uses "+skill.name);
		var status = Status[skill.params.status];
		monster.inflictStatus(status, 5);
		monster.game.display.message(monster.race.name+" "+status.onSetMessage);

	},
	skipTarget: function(skill){
		return skill.effect === this.RAISE_STAT || skill.effect === this.NOTHING || skill.effect === this.SET_STATUS;
	}
}