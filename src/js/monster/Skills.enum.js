var Types = require('./Types.enum');
var Effects = require('./Effects.enum');
var Stats = require('./Stats.enum');

module.exports = {
TACKLE: {name: 'Tackle', type: Types.NORMAL, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'PHYS'},
SCRATCH: {name: 'Scratch', type: Types.NORMAL, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 35, damagetype: 'PHYS'},
TAIL_WHIP: {name: 'Tail Whip', type: Types.NORMAL, power: 0, accuracy: 100, effect: Effects.LOWER_STAT, pp: 30, stat: Stats.DEFENSE},
GROWL: {name: 'Growl', type: Types.NORMAL, power: 0, accuracy: 100, effect: Effects.LOWER_STAT, pp: 40, stat: Stats.ATTACK},
EMBER: {name: 'Ember', type: Types.FIRE, power: 40, accuracy: 100, effect: Effects.DAMAGE, pp: 25, damagetype: 'SPEC', range: 3}
}