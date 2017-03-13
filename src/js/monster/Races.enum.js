var Skills = require('./Skills.enum');
var Types = require('./Types.enum');

var Races = {
BULBASAUR: {name: 'Bulbasaur', tile: new ut.Tile('b', 0, 128, 0), aggressive: true, type: Types.GRASS, hp: 45, attack:49, defense: 49, spAttack:65, spDefense:65, speed: 45, xp: 64, skills: []},
IVYSAUR: {name: 'Ivysaur', tile: new ut.Tile('I', 0, 128, 0), aggressive: true, type: Types.GRASS, hp: 60, attack:62, defense: 63, spAttack:80, spDefense:80, speed: 60, xp: 141, skills: []},
VENUSAUR: {name: 'Venusaur', tile: new ut.Tile('V', 0, 128, 0), aggressive: true, type: Types.GRASS, hp: 80, attack:82, defense: 83, spAttack:100, spDefense:100, speed: 80, xp: 208, skills: []},
CHARMANDER: {name: 'Charmander', tile: new ut.Tile('c', 255, 83, 83), aggressive: true, type: Types.FIRE, hp: 39, attack:52, defense: 43, spAttack:60, spDefense:50, speed: 65, xp: 65, skills: []},
CHARMELEON: {name: 'Charmeleon', tile: new ut.Tile('c', 128, 83, 0), aggressive: true, type: Types.FIRE, hp: 58, attack:64, defense: 58, spAttack:80, spDefense:65, speed: 80, xp: 142, skills: []},
CHARIZARD: {name: 'Charizard', tile: new ut.Tile('C', 255, 83, 83), aggressive: true, type: Types.FIRE, hp: 78, attack:84, defense: 78, spAttack:109, spDefense:85, speed: 100, xp: 209, skills: []},
SQUIRTLE: {name: 'Squirtle', tile: new ut.Tile('s', 83, 255, 255), aggressive: true, type: Types.WATER, hp: 44, attack:48, defense: 65, spAttack:50, spDefense:64, speed: 43, xp: 66, skills: []},
WARTORTLE: {name: 'Wartortle', tile: new ut.Tile('w', 83, 255, 255), aggressive: true, type: Types.WATER, hp: 59, attack:63, defense: 80, spAttack:65, spDefense:80, speed: 58, xp: 143, skills: []},
BLASTOISE: {name: 'Blastoise', tile: new ut.Tile('B', 83, 255, 255), aggressive: true, type: Types.WATER, hp: 79, attack:83, defense: 100, spAttack:85, spDefense:105, speed: 78, xp: 210, skills: []},
CATERPIE: {name: 'Caterpie', tile: new ut.Tile('c', 0, 128, 0), aggressive: false, type: Types.BUG, hp: 45, attack:30, defense: 35, spAttack:20, spDefense:20, speed: 45, xp: 53, skills: []},
METAPOD: {name: 'Metapod', tile: new ut.Tile('m', 0, 128, 0), aggressive: false, type: Types.BUG, hp: 50, attack:20, defense: 55, spAttack:25, spDefense:25, speed: 30, xp: 72, skills: []},
BUTERFREE: {name: 'Butterfree', tile: new ut.Tile('b', 128, 0, 128), aggressive: false, type: Types.BUG, hp: 60, attack:45, defense: 50, spAttack:80, spDefense:80, speed: 70, xp: 160, skills: []},
WEEDLE: {name: 'Weedle', tile: new ut.Tile('w', 255, 255, 83), aggressive: false, type: Types.BUG, hp: 40, attack:35, defense: 30, spAttack:20, spDefense:20, speed: 50, xp: 52, skills: []},
KAKUNA: {name: 'Kakuna', tile: new ut.Tile('k', 255, 255, 83), aggressive: false, type: Types.BUG, hp: 45, attack:25, defense: 50, spAttack:25, spDefense:25, speed: 35, xp: 71, skills: []},
BEEDRILL: {name: 'Beedrill', tile: new ut.Tile('b', 255, 255, 83), aggressive: true, type: Types.BUG, hp: 65, attack:80, defense: 40, spAttack:45, spDefense:80, speed: 75, xp: 159, skills: []},
PIDGEY: {name: 'Pidgey', tile: new ut.Tile('p', 128, 83, 0), aggressive: false, type: Types.NORMAL, hp: 40, attack:45, defense: 40, spAttack:35, spDefense:35, speed: 56, xp: 55, skills: []},
PIDGEOTTO: {name: 'Pidgeotto', tile: new ut.Tile('p', 128, 83, 0), aggressive: true, type: Types.NORMAL, hp: 63, attack:60, defense: 55, spAttack:50, spDefense:50, speed: 71, xp: 113, skills: []},
PIDGEOT: {name: 'Pidgeot', tile: new ut.Tile('P', 128, 83, 0), aggressive: true, type: Types.NORMAL, hp: 83, attack:80, defense: 75, spAttack:70, spDefense:70, speed: 91, xp: 172, skills: []},
RATTATA: {name: 'Rattata', tile: new ut.Tile('r', 128, 0, 128), aggressive: true, type: Types.NORMAL, hp: 30, attack:56, defense: 35, spAttack:25, spDefense:35, speed: 72, xp: 57, skills: []},
RATICATE: {name: 'Raticate', tile: new ut.Tile('R', 128, 83, 0), aggressive: true, type: Types.NORMAL, hp: 55, attack:81, defense: 60, spAttack:50, spDefense:70, speed: 97, xp: 116, skills: []},
};

Races.BULBASAUR.evolution = {minLevel: 16, race: Races.IVYSAUR}
Races.IVYSAUR.evolution = {minLevel: 32, race: Races.VENUSAUR}

Races.CHARMANDER.evolution = {minLevel: 16, race: Races.CHARMELEON}
Races.CHARMELEON.evolution = {minLevel: 36, race: Races.CHARIZARD}

Races.SQUIRTLE.evolution = {minLevel: 16, race: Races.WARTORTLE}
Races.WARTORTLE.evolution = {minLevel: 36, race: Races.BLASTOISE}

Races.CATERPIE.evolution = {minLevel: 7, race: Races.METAPOD}
Races.METAPOD.evolution = {minLevel: 10, race: Races.BUTERFREE}

Races.WEEDLE.evolution = {minLevel: 7, race: Races.KAKUNA}
Races.KAKUNA.evolution = {minLevel: 10, race: Races.BEEDRILL}

Races.PIDGEY.evolution = {minLevel: 18, race: Races.PIDGEOTTO}
Races.PIDGEOTTO.evolution = {minLevel: 36, race: Races.PIDGEOT}

Races.RATTATA.evolution = {minLevel: 20, race: Races.RATICATE}

Races.BULBASAUR.skills.push({skill: Skills.TACKLE, level: 1});
Races.BULBASAUR.skills.push({skill: Skills.GROWL, level: 1});
Races.BULBASAUR.skills.push({skill: Skills.LEECH_SEED, level: 7});
Races.BULBASAUR.skills.push({skill: Skills.VINE_WHIP, level: 13});
Races.BULBASAUR.skills.push({skill: Skills.POISON_POWDER, level: 20});
Races.BULBASAUR.skills.push({skill: Skills.RAZOR_LEAF, level: 27});
Races.BULBASAUR.skills.push({skill: Skills.GROWTH, level: 34});
Races.BULBASAUR.skills.push({skill: Skills.SLEEP_POWDER, level: 41});
Races.BULBASAUR.skills.push({skill: Skills.SOLAR_BEAM, level: 48});
Races.IVYSAUR.skills.push({skill: Skills.TACKLE, level: 1});
Races.IVYSAUR.skills.push({skill: Skills.GROWL, level: 1});
Races.IVYSAUR.skills.push({skill: Skills.LEECH_SEED, level: 7});
Races.IVYSAUR.skills.push({skill: Skills.VINE_WHIP, level: 13});
Races.IVYSAUR.skills.push({skill: Skills.POISON_POWDER, level: 22});
Races.IVYSAUR.skills.push({skill: Skills.RAZOR_LEAF, level: 30});
Races.IVYSAUR.skills.push({skill: Skills.GROWTH, level: 38});
Races.IVYSAUR.skills.push({skill: Skills.SLEEP_POWDER, level: 46});
Races.IVYSAUR.skills.push({skill: Skills.SOLAR_BEAM, level: 54});
Races.VENUSAUR.skills.push({skill: Skills.TACKLE, level: 1});
Races.VENUSAUR.skills.push({skill: Skills.GROWL, level: 1});
Races.VENUSAUR.skills.push({skill: Skills.LEECH_SEED, level: 7});
Races.VENUSAUR.skills.push({skill: Skills.VINE_WHIP, level: 13});
Races.VENUSAUR.skills.push({skill: Skills.POISON_POWDER, level: 22});
Races.VENUSAUR.skills.push({skill: Skills.RAZOR_LEAF, level: 30});
Races.VENUSAUR.skills.push({skill: Skills.GROWTH, level: 43});
Races.VENUSAUR.skills.push({skill: Skills.SLEEP_POWDER, level: 55});
Races.VENUSAUR.skills.push({skill: Skills.SOLAR_BEAM, level: 65});
Races.CHARMANDER.skills.push({skill: Skills.SCRATCH, level: 1});
Races.CHARMANDER.skills.push({skill: Skills.GROWL, level: 1});
Races.CHARMANDER.skills.push({skill: Skills.EMBER, level: 9});
Races.CHARMANDER.skills.push({skill: Skills.LEER, level: 15});
Races.CHARMANDER.skills.push({skill: Skills.RAGE, level: 22});
Races.CHARMANDER.skills.push({skill: Skills.SLASH, level: 30});
Races.CHARMANDER.skills.push({skill: Skills.FLAMETHROWER, level: 38});
Races.CHARMANDER.skills.push({skill: Skills.FIRE_SPIN, level: 46});
Races.CHARMELEON.skills.push({skill: Skills.SCRATCH, level: 1});
Races.CHARMELEON.skills.push({skill: Skills.GROWL, level: 1});
Races.CHARMELEON.skills.push({skill: Skills.EMBER, level: 9});
Races.CHARMELEON.skills.push({skill: Skills.LEER, level: 15});
Races.CHARMELEON.skills.push({skill: Skills.RAGE, level: 24});
Races.CHARMELEON.skills.push({skill: Skills.SLASH, level: 33});
Races.CHARMELEON.skills.push({skill: Skills.FLAMETHROWER, level: 42});
Races.CHARMELEON.skills.push({skill: Skills.FIRE_SPIN, level: 56});
Races.CHARIZARD.skills.push({skill: Skills.SCRATCH, level: 1});
Races.CHARIZARD.skills.push({skill: Skills.GROWL, level: 1});
Races.CHARIZARD.skills.push({skill: Skills.EMBER, level: 9});
Races.CHARIZARD.skills.push({skill: Skills.LEER, level: 15});
Races.CHARIZARD.skills.push({skill: Skills.RAGE, level: 24});
Races.CHARIZARD.skills.push({skill: Skills.SLASH, level: 36});
Races.CHARIZARD.skills.push({skill: Skills.FLAMETHROWER, level: 46});
Races.CHARIZARD.skills.push({skill: Skills.FIRE_SPIN, level: 55});
Races.SQUIRTLE.skills.push({skill: Skills.TACKLE, level: 1});
Races.SQUIRTLE.skills.push({skill: Skills.TAIL_WHIP, level: 1});
Races.SQUIRTLE.skills.push({skill: Skills.BUBBLE, level: 8});
Races.SQUIRTLE.skills.push({skill: Skills.WATER_GUN, level: 15});
Races.SQUIRTLE.skills.push({skill: Skills.BITE, level: 22});
Races.SQUIRTLE.skills.push({skill: Skills.WITHDRAW, level: 28});
Races.SQUIRTLE.skills.push({skill: Skills.SKULL_BASH, level: 35});
Races.SQUIRTLE.skills.push({skill: Skills.HYDRO_PUMP, level: 42});
Races.WARTORTLE.skills.push({skill: Skills.TACKLE, level: 1});
Races.WARTORTLE.skills.push({skill: Skills.TAIL_WHIP, level: 1});
Races.WARTORTLE.skills.push({skill: Skills.BUBBLE, level: 8});
Races.WARTORTLE.skills.push({skill: Skills.WATER_GUN, level: 15});
Races.WARTORTLE.skills.push({skill: Skills.BITE, level: 24});
Races.WARTORTLE.skills.push({skill: Skills.WITHDRAW, level: 31});
Races.WARTORTLE.skills.push({skill: Skills.SKULL_BASH, level: 39});
Races.WARTORTLE.skills.push({skill: Skills.HYDRO_PUMP, level: 47});
Races.BLASTOISE.skills.push({skill: Skills.TACKLE, level: 1});
Races.BLASTOISE.skills.push({skill: Skills.TAIL_WHIP, level: 1});
Races.BLASTOISE.skills.push({skill: Skills.BUBBLE, level: 8});
Races.BLASTOISE.skills.push({skill: Skills.WATER_GUN, level: 15});
Races.BLASTOISE.skills.push({skill: Skills.BITE, level: 24});
Races.BLASTOISE.skills.push({skill: Skills.WITHDRAW, level: 31});
Races.BLASTOISE.skills.push({skill: Skills.SKULL_BASH, level: 42});
Races.BLASTOISE.skills.push({skill: Skills.HYDRO_PUMP, level: 52});
Races.CATERPIE.skills.push({skill: Skills.TACKLE, level: 1});
Races.CATERPIE.skills.push({skill: Skills.STRING_SHOT, level: 1});
Races.METAPOD.skills.push({skill: Skills.HARDEN, level: 1});
Races.BUTERFREE.skills.push({skill: Skills.CONFUSION, level: 12});
Races.BUTERFREE.skills.push({skill: Skills.POISON_POWDER, level: 15});
Races.BUTERFREE.skills.push({skill: Skills.STUN_SPORE, level: 16});
Races.BUTERFREE.skills.push({skill: Skills.SLEEP_POWDER, level: 17});
Races.BUTERFREE.skills.push({skill: Skills.SUPERSONIC, level: 21});
Races.BUTERFREE.skills.push({skill: Skills.WHIRLWIND, level: 26});
Races.BUTERFREE.skills.push({skill: Skills.PSYBEAM, level: 32});
Races.WEEDLE.skills.push({skill: Skills.POISON_STING, level: 1});
Races.WEEDLE.skills.push({skill: Skills.STRING_SHOT, level: 1});
Races.KAKUNA.skills.push({skill: Skills.HARDEN, level: 1});
Races.BEEDRILL.skills.push({skill: Skills.FURY_ATTACK, level: 12});
Races.BEEDRILL.skills.push({skill: Skills.FOCUS_ENERGY, level: 16});
Races.BEEDRILL.skills.push({skill: Skills.TWINEEDLE, level: 20});
Races.BEEDRILL.skills.push({skill: Skills.RAGE, level: 25});
Races.BEEDRILL.skills.push({skill: Skills.PIN_MISSILE, level: 30});
Races.BEEDRILL.skills.push({skill: Skills.AGILITY, level: 35});
Races.PIDGEY.skills.push({skill: Skills.GUST, level: 1});
Races.PIDGEY.skills.push({skill: Skills.SAND_ATTACK, level: 5});
Races.PIDGEY.skills.push({skill: Skills.QUICK_ATTACK, level: 12});
Races.PIDGEY.skills.push({skill: Skills.WHIRLWIND, level: 19});
Races.PIDGEY.skills.push({skill: Skills.WING_ATTACK, level: 28});
Races.PIDGEY.skills.push({skill: Skills.AGILITY, level: 36});
Races.PIDGEY.skills.push({skill: Skills.MIRROR_MOVE, level: 44});
Races.PIDGEOTTO.skills.push({skill: Skills.GUST, level: 1});
Races.PIDGEOTTO.skills.push({skill: Skills.SAND_ATTACK, level: 5});
Races.PIDGEOTTO.skills.push({skill: Skills.QUICK_ATTACK, level: 12});
Races.PIDGEOTTO.skills.push({skill: Skills.WHIRLWIND, level: 21});
Races.PIDGEOTTO.skills.push({skill: Skills.WING_ATTACK, level: 31});
Races.PIDGEOTTO.skills.push({skill: Skills.AGILITY, level: 40});
Races.PIDGEOTTO.skills.push({skill: Skills.MIRROR_MOVE, level: 49});
Races.PIDGEOT.skills.push({skill: Skills.GUST, level: 1});
Races.PIDGEOT.skills.push({skill: Skills.SAND_ATTACK, level: 5});
Races.PIDGEOT.skills.push({skill: Skills.QUICK_ATTACK, level: 12});
Races.PIDGEOT.skills.push({skill: Skills.WHIRLWIND, level: 21});
Races.PIDGEOT.skills.push({skill: Skills.WING_ATTACK, level: 31});
Races.PIDGEOT.skills.push({skill: Skills.AGILITY, level: 44});
Races.PIDGEOT.skills.push({skill: Skills.MIRROR_MOVE, level: 54});
Races.RATTATA.skills.push({skill: Skills.TACKLE, level: 1});
Races.RATTATA.skills.push({skill: Skills.TAIL_WHIP, level: 1});
Races.RATTATA.skills.push({skill: Skills.QUICK_ATTACK, level: 7});
Races.RATTATA.skills.push({skill: Skills.HYPER_FANG, level: 14});
Races.RATTATA.skills.push({skill: Skills.FOCUS_ENERGY, level: 23});
Races.RATTATA.skills.push({skill: Skills.SUPER_FANG, level: 34});
Races.RATICATE.skills.push({skill: Skills.TACKLE, level: 1});
Races.RATICATE.skills.push({skill: Skills.TAIL_WHIP, level: 1});
Races.RATICATE.skills.push({skill: Skills.QUICK_ATTACK, level: 7});
Races.RATICATE.skills.push({skill: Skills.HYPER_FANG, level: 14});
Races.RATICATE.skills.push({skill: Skills.FOCUS_ENERGY, level: 27});
Races.RATICATE.skills.push({skill: Skills.SUPER_FANG, level: 41});


module.exports = Races;