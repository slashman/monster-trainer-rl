var Types = require('./Types.enum');
var Effects = require('./Effects.enum');
var Stats = require('./Stats.enum');

module.exports = {
	SCRATCH: {
		name: 'Scratch',
		type: Types.NORMAL,
		power: 40,
		accuracy: 100,
		effect: Effects.DAMAGE,
		damageType: 'PHYS',
		pp: 35
	},
	GROWL: {
		name: 'Growl',
		type: Types.NORMAL,
		accuracy: 100,
		effect: Effects.LOWER_STAT,
		stat: Stats.ATTACK,
		pp: 40
	},
	EMBER: {
		name: 'Ember',
		type: Types.FIRE,
		power: 40,
		accuracy: 100,
		effect: Effects.DAMAGE,
		damageType: 'SPEC',
		pp: 25,
		range: 3
	}
}