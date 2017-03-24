var Skills = require('./Skills.enum');
var Types = require('./Types.enum');

var Races = {
BULBASAUR: {name: 'Bulbasaur', tile: new ut.Tile('b', 85, 255, 85), aggressive: true, type: Types.GRASS, typeb: Types.POISON, hp: 45, attack:49, defense: 49, spAttack:65, spDefense:65, speed: 45, xp: 64, skills: []},
IVYSAUR: {name: 'Ivysaur', tile: new ut.Tile('i', 85, 255, 85), aggressive: true, type: Types.GRASS, typeb: Types.POISON, hp: 60, attack:62, defense: 63, spAttack:80, spDefense:80, speed: 60, xp: 141, skills: []},
VENUSAUR: {name: 'Venusaur', tile: new ut.Tile('V', 85, 255, 85), aggressive: true, type: Types.GRASS, typeb: Types.POISON, hp: 80, attack:82, defense: 83, spAttack:100, spDefense:100, speed: 80, xp: 208, skills: []},
CHARMANDER: {name: 'Charmander', tile: new ut.Tile('c', 255, 85, 85), aggressive: true, type: Types.FIRE, hp: 39, attack:52, defense: 43, spAttack:60, spDefense:50, speed: 65, xp: 65, skills: []},
CHARMELEON: {name: 'Charmeleon', tile: new ut.Tile('c', 255, 85, 85), aggressive: true, type: Types.FIRE, hp: 58, attack:64, defense: 58, spAttack:80, spDefense:65, speed: 80, xp: 142, skills: []},
CHARIZARD: {name: 'Charizard', tile: new ut.Tile('C', 255, 85, 85), aggressive: true, type: Types.FIRE, typeb: Types.FLYING, hp: 78, attack:84, defense: 78, spAttack:109, spDefense:85, speed: 100, xp: 209, skills: []},
SQUIRTLE: {name: 'Squirtle', tile: new ut.Tile('s', 85, 85, 255), aggressive: true, type: Types.WATER, hp: 44, attack:48, defense: 65, spAttack:50, spDefense:64, speed: 43, xp: 66, skills: []},
WARTORTLE: {name: 'Wartortle', tile: new ut.Tile('w', 85, 85, 255), aggressive: true, type: Types.WATER, hp: 59, attack:63, defense: 80, spAttack:65, spDefense:80, speed: 58, xp: 143, skills: []},
BLASTOISE: {name: 'Blastoise', tile: new ut.Tile('B', 85, 85, 255), aggressive: true, type: Types.WATER, hp: 79, attack:83, defense: 100, spAttack:85, spDefense:105, speed: 78, xp: 210, skills: []},
CATERPIE: {name: 'Caterpie', tile: new ut.Tile('c', 85, 255, 85), aggressive: false, type: Types.BUG, hp: 45, attack:30, defense: 35, spAttack:20, spDefense:20, speed: 45, xp: 53, skills: []},
METAPOD: {name: 'Metapod', tile: new ut.Tile('m', 85, 255, 85), aggressive: false, type: Types.BUG, hp: 50, attack:20, defense: 55, spAttack:25, spDefense:25, speed: 30, xp: 72, skills: []},
BUTERFREE: {name: 'Butterfree', tile: new ut.Tile('b', 255, 255, 255), aggressive: false, type: Types.BUG, typeb: Types.FLYING, hp: 60, attack:45, defense: 50, spAttack:80, spDefense:80, speed: 70, xp: 160, skills: []},
WEEDLE: {name: 'Weedle', tile: new ut.Tile('w', 170, 85, 0), aggressive: false, type: Types.BUG, typeb: Types.POISON, hp: 40, attack:35, defense: 30, spAttack:20, spDefense:20, speed: 50, xp: 52, skills: []},
KAKUNA: {name: 'Kakuna', tile: new ut.Tile('k', 255, 255, 85), aggressive: false, type: Types.BUG, typeb: Types.POISON, hp: 45, attack:25, defense: 50, spAttack:25, spDefense:25, speed: 35, xp: 71, skills: []},
BEEDRILL: {name: 'Beedrill', tile: new ut.Tile('b', 255, 255, 85), aggressive: true, type: Types.BUG, typeb: Types.POISON, hp: 65, attack:80, defense: 40, spAttack:45, spDefense:80, speed: 75, xp: 159, skills: []},
PIDGEY: {name: 'Pidgey', tile: new ut.Tile('p', 170, 85, 0), aggressive: false, type: Types.NORMAL, typeb: Types.FLYING, hp: 40, attack:45, defense: 40, spAttack:35, spDefense:35, speed: 56, xp: 55, skills: []},
PIDGEOTTO: {name: 'Pidgeotto', tile: new ut.Tile('p', 170, 85, 0), aggressive: true, type: Types.NORMAL, typeb: Types.FLYING, hp: 63, attack:60, defense: 55, spAttack:50, spDefense:50, speed: 71, xp: 113, skills: []},
PIDGEOT: {name: 'Pidgeot', tile: new ut.Tile('P', 170, 85, 0), aggressive: true, type: Types.NORMAL, typeb: Types.FLYING, hp: 83, attack:80, defense: 75, spAttack:70, spDefense:70, speed: 91, xp: 172, skills: []},
RATTATA: {name: 'Rattata', tile: new ut.Tile('r', 170, 0, 170), aggressive: true, type: Types.NORMAL, hp: 30, attack:56, defense: 35, spAttack:25, spDefense:35, speed: 72, xp: 57, skills: []},
RATICATE: {name: 'Raticate', tile: new ut.Tile('R', 170, 85, 0), aggressive: true, type: Types.NORMAL, hp: 55, attack:81, defense: 60, spAttack:50, spDefense:70, speed: 97, xp: 116, skills: []},
SPEAROW: {name: 'Spearow', tile: new ut.Tile('s', 170, 85, 0), aggressive: true, type: Types.NORMAL, typeb: Types.FLYING, hp: 40, attack:60, defense: 30, spAttack:31, spDefense:31, speed: 70, xp: 58, skills: []},
FEAROW: {name: 'Fearow', tile: new ut.Tile('F', 170, 85, 0), aggressive: true, type: Types.NORMAL, typeb: Types.FLYING, hp: 65, attack:90, defense: 65, spAttack:61, spDefense:61, speed: 100, xp: 162, skills: []},
EKANS: {name: 'Ekans', tile: new ut.Tile('e', 170, 0, 170), aggressive: true, type: Types.POISON, hp: 30, attack:60, defense: 44, spAttack:40, spDefense:54, speed: 55, xp: 62, skills: []},
ARBOK: {name: 'Arbok', tile: new ut.Tile('a', 170, 0, 170), aggressive: true, type: Types.POISON, hp: 60, attack:85, defense: 69, spAttack:65, spDefense:79, speed: 80, xp: 147, skills: []},
PIKACHU: {name: 'Pikachu', tile: new ut.Tile('p', 255, 255, 85), aggressive: true, type: Types.ELECTRIC, hp: 35, attack:55, defense: 30, spAttack:50, spDefense:40, speed: 90, xp: 82, skills: []},
RAICHU: {name: 'Raichu', tile: new ut.Tile('R', 255, 255, 85), aggressive: true, type: Types.ELECTRIC, hp: 60, attack:90, defense: 55, spAttack:90, spDefense:80, speed: 100, xp: 122, skills: []},
SANDSHREW: {name: 'Sandshrew', tile: new ut.Tile('s', 255, 255, 85), aggressive: true, type: Types.GROUND, hp: 50, attack:75, defense: 85, spAttack:20, spDefense:30, speed: 40, xp: 93, skills: []},
SANDSLASH: {name: 'Sandslash', tile: new ut.Tile('S', 255, 255, 85), aggressive: true, type: Types.GROUND, hp: 75, attack:100, defense: 110, spAttack:45, spDefense:55, speed: 65, xp: 163, skills: []},
NIDORAN_F: {name: 'Nidoran♀', tile: new ut.Tile('n', 85, 85, 255), aggressive: false, type: Types.POISON, hp: 55, attack:47, defense: 52, spAttack:40, spDefense:40, speed: 41, xp: 59, skills: []},
NIDORINA: {name: 'Nidorina', tile: new ut.Tile('n', 85, 85, 255), aggressive: true, type: Types.POISON, hp: 70, attack:62, defense: 67, spAttack:55, spDefense:55, speed: 56, xp: 117, skills: []},
NIDOQUEEN: {name: 'Nidoqueen', tile: new ut.Tile('N', 85, 85, 255), aggressive: true, type: Types.POISON, typeb: Types.GROUND, hp: 90, attack:82, defense: 87, spAttack:75, spDefense:85, speed: 76, xp: 194, skills: []},
NIDORAN_M: {name: 'Nidoran♂', tile: new ut.Tile('n', 170, 0, 170), aggressive: false, type: Types.POISON, hp: 46, attack:57, defense: 40, spAttack:40, spDefense:40, speed: 50, xp: 60, skills: []},
NIDORINO: {name: 'Nidorino', tile: new ut.Tile('n', 170, 0, 170), aggressive: true, type: Types.POISON, hp: 61, attack:72, defense: 57, spAttack:55, spDefense:55, speed: 65, xp: 118, skills: []},
NIDOKING: {name: 'Nidoking', tile: new ut.Tile('N', 170, 0, 170), aggressive: true, type: Types.POISON, typeb: Types.GROUND, hp: 81, attack:92, defense: 77, spAttack:85, spDefense:75, speed: 85, xp: 195, skills: []},
CLEFAIRY: {name: 'Clefairy', tile: new ut.Tile('c', 255, 85, 255), aggressive: false, type: Types.NORMAL, hp: 70, attack:45, defense: 48, spAttack:60, spDefense:65, speed: 35, xp: 68, skills: []},
CLEFABLE: {name: 'Clefable', tile: new ut.Tile('C', 255, 85, 255), aggressive: false, type: Types.NORMAL, hp: 95, attack:70, defense: 73, spAttack:85, spDefense:90, speed: 60, xp: 129, skills: []},
VULPIX: {name: 'Vulpix', tile: new ut.Tile('v', 170, 85, 0), aggressive: false, type: Types.FIRE, hp: 38, attack:41, defense: 40, spAttack:50, spDefense:65, speed: 65, xp: 63, skills: []},
NINETALES: {name: 'Ninetales', tile: new ut.Tile('N', 255, 255, 85), aggressive: true, type: Types.FIRE, hp: 73, attack:76, defense: 75, spAttack:81, spDefense:100, speed: 100, xp: 178, skills: []},
JIGGLYPUFF: {name: 'Jigglypuff', tile: new ut.Tile('j', 255, 85, 255), aggressive: false, type: Types.NORMAL, hp: 115, attack:45, defense: 20, spAttack:45, spDefense:25, speed: 20, xp: 76, skills: []},
WIGGLYTUFF: {name: 'Wigglytuff', tile: new ut.Tile('w', 255, 85, 255), aggressive: true, type: Types.NORMAL, hp: 140, attack:70, defense: 45, spAttack:75, spDefense:50, speed: 45, xp: 109, skills: []},
ZUBAT: {name: 'Zubat', tile: new ut.Tile('z', 170, 0, 170), aggressive: false, type: Types.POISON, typeb: Types.FLYING, hp: 40, attack:45, defense: 35, spAttack:30, spDefense:40, speed: 55, xp: 54, skills: []},
GOLBAT: {name: 'Golbat', tile: new ut.Tile('G', 170, 0, 170), aggressive: true, type: Types.POISON, typeb: Types.FLYING, hp: 75, attack:80, defense: 70, spAttack:65, spDefense:75, speed: 90, xp: 171, skills: []},
ODDISH: {name: 'Oddish', tile: new ut.Tile('o', 85, 85, 255), aggressive: false, type: Types.GRASS, typeb: Types.POISON, hp: 45, attack:50, defense: 55, spAttack:75, spDefense:65, speed: 30, xp: 78, skills: []},
GLOOM: {name: 'Gloom', tile: new ut.Tile('g', 85, 85, 255), aggressive: false, type: Types.GRASS, typeb: Types.POISON, hp: 60, attack:65, defense: 70, spAttack:85, spDefense:75, speed: 40, xp: 132, skills: []},
VILEPLUME: {name: 'Vileplume', tile: new ut.Tile('V', 255, 85, 85), aggressive: false, type: Types.GRASS, typeb: Types.POISON, hp: 75, attack:80, defense: 85, spAttack:100, spDefense:90, speed: 50, xp: 184, skills: []},
PARAS: {name: 'Paras', tile: new ut.Tile('p', 255, 85, 85), aggressive: false, type: Types.BUG, typeb: Types.GRASS, hp: 35, attack:70, defense: 55, spAttack:45, spDefense:55, speed: 25, xp: 70, skills: []},
PARASECT: {name: 'Parasect', tile: new ut.Tile('P', 255, 85, 85), aggressive: true, type: Types.BUG, typeb: Types.GRASS, hp: 60, attack:95, defense: 80, spAttack:60, spDefense:80, speed: 30, xp: 128, skills: []},
VENONAT: {name: 'Venonat', tile: new ut.Tile('v', 170, 0, 170), aggressive: true, type: Types.BUG, typeb: Types.POISON, hp: 60, attack:55, defense: 50, spAttack:40, spDefense:55, speed: 45, xp: 75, skills: []},
VENOMOTH: {name: 'Venomoth', tile: new ut.Tile('v', 170, 0, 170), aggressive: true, type: Types.BUG, typeb: Types.POISON, hp: 70, attack:65, defense: 60, spAttack:90, spDefense:75, speed: 90, xp: 138, skills: []},
DIGLETT: {name: 'Diglett', tile: new ut.Tile('d', 170, 85, 0), aggressive: true, type: Types.GROUND, hp: 10, attack:55, defense: 25, spAttack:35, spDefense:45, speed: 95, xp: 81, skills: []},
DUGTRIO: {name: 'Dugtrio', tile: new ut.Tile('d', 170, 85, 0), aggressive: true, type: Types.GROUND, hp: 35, attack:80, defense: 50, spAttack:50, spDefense:70, speed: 120, xp: 153, skills: []},
MEOWTH: {name: 'Meowth', tile: new ut.Tile('m', 255, 255, 85), aggressive: true, type: Types.NORMAL, hp: 40, attack:45, defense: 35, spAttack:40, spDefense:40, speed: 90, xp: 69, skills: []},
PERSIAN: {name: 'Persian', tile: new ut.Tile('p', 255, 255, 85), aggressive: true, type: Types.NORMAL, hp: 65, attack:70, defense: 60, spAttack:65, spDefense:65, speed: 115, xp: 148, skills: []},
PSYDUCK: {name: 'Psyduck', tile: new ut.Tile('p', 255, 255, 85), aggressive: false, type: Types.WATER, hp: 50, attack:52, defense: 48, spAttack:65, spDefense:50, speed: 55, xp: 80, skills: []},
GOLDUCK: {name: 'Golduck', tile: new ut.Tile('g', 85, 85, 255), aggressive: true, type: Types.WATER, hp: 80, attack:82, defense: 78, spAttack:95, spDefense:80, speed: 85, xp: 174, skills: []},
MANKEY: {name: 'Mankey', tile: new ut.Tile('m', 170, 85, 0), aggressive: true, type: Types.FIGHTING, hp: 40, attack:80, defense: 35, spAttack:35, spDefense:45, speed: 70, xp: 74, skills: []},
PRIMEAPE: {name: 'Primeape', tile: new ut.Tile('p', 170, 85, 0), aggressive: true, type: Types.FIGHTING, hp: 65, attack:105, defense: 60, spAttack:60, spDefense:70, speed: 95, xp: 149, skills: []},
GROWLITHE: {name: 'Growlithe', tile: new ut.Tile('g', 170, 85, 0), aggressive: true, type: Types.FIRE, hp: 55, attack:70, defense: 45, spAttack:70, spDefense:50, speed: 60, xp: 91, skills: []},
ARCANINE: {name: 'Arcanine', tile: new ut.Tile('A', 170, 85, 0), aggressive: true, type: Types.FIRE, hp: 90, attack:110, defense: 80, spAttack:100, spDefense:80, speed: 95, xp: 213, skills: []},
POLIWAG: {name: 'Poliwag', tile: new ut.Tile('p', 85, 85, 255), aggressive: false, type: Types.WATER, hp: 40, attack:50, defense: 40, spAttack:40, spDefense:40, speed: 90, xp: 77, skills: []},
POLIWHIRL: {name: 'Poliwhirl', tile: new ut.Tile('p', 85, 85, 255), aggressive: true, type: Types.WATER, hp: 65, attack:65, defense: 65, spAttack:50, spDefense:50, speed: 90, xp: 131, skills: []},
POLIWRATH: {name: 'Poliwrath', tile: new ut.Tile('P', 85, 85, 255), aggressive: true, type: Types.WATER, typeb: Types.FIGHTING, hp: 90, attack:85, defense: 95, spAttack:70, spDefense:90, speed: 70, xp: 185, skills: []},
ABRA: {name: 'Abra', tile: new ut.Tile('a', 170, 85, 0), aggressive: false, type: Types.PSYCHIC, hp: 25, attack:20, defense: 15, spAttack:105, spDefense:55, speed: 90, xp: 73, skills: []},
KADABRA: {name: 'Kadabra', tile: new ut.Tile('k', 170, 85, 0), aggressive: true, type: Types.PSYCHIC, hp: 40, attack:35, defense: 30, spAttack:120, spDefense:70, speed: 105, xp: 145, skills: []},
ALAKAZAM: {name: 'Alakazam', tile: new ut.Tile('A', 170, 85, 0), aggressive: true, type: Types.PSYCHIC, hp: 55, attack:50, defense: 45, spAttack:135, spDefense:85, speed: 120, xp: 186, skills: []},
MACHOP: {name: 'Machop', tile: new ut.Tile('m', 170, 170, 170), aggressive: true, type: Types.FIGHTING, hp: 70, attack:80, defense: 50, spAttack:35, spDefense:35, speed: 35, xp: 88, skills: []},
MACHOKE: {name: 'Machoke', tile: new ut.Tile('m', 170, 170, 170), aggressive: true, type: Types.FIGHTING, hp: 80, attack:100, defense: 70, spAttack:50, spDefense:60, speed: 45, xp: 146, skills: []},
MACHAMP: {name: 'Machamp', tile: new ut.Tile('M', 170, 170, 170), aggressive: true, type: Types.FIGHTING, hp: 90, attack:130, defense: 80, spAttack:65, spDefense:85, speed: 55, xp: 193, skills: []},
BELLSPROUT: {name: 'Bellsprout', tile: new ut.Tile('b', 85, 255, 85), aggressive: false, type: Types.GRASS, typeb: Types.POISON, hp: 50, attack:75, defense: 35, spAttack:70, spDefense:30, speed: 40, xp: 84, skills: []},
WEEPINBELL: {name: 'Weepinbell', tile: new ut.Tile('w', 85, 255, 85), aggressive: false, type: Types.GRASS, typeb: Types.POISON, hp: 65, attack:90, defense: 50, spAttack:85, spDefense:45, speed: 55, xp: 151, skills: []},
VICTREEBEL: {name: 'Victreebel', tile: new ut.Tile('V', 85, 255, 85), aggressive: true, type: Types.GRASS, typeb: Types.POISON, hp: 80, attack:105, defense: 65, spAttack:100, spDefense:60, speed: 70, xp: 191, skills: []},
TENTACOOL: {name: 'Tentacool', tile: new ut.Tile('t', 85, 85, 255), aggressive: true, type: Types.WATER, typeb: Types.POISON, hp: 40, attack:40, defense: 35, spAttack:50, spDefense:100, speed: 70, xp: 105, skills: []},
TENTACRUEL: {name: 'Tentacruel', tile: new ut.Tile('t', 85, 85, 255), aggressive: true, type: Types.WATER, typeb: Types.POISON, hp: 80, attack:70, defense: 65, spAttack:80, spDefense:120, speed: 100, xp: 205, skills: []},
GEODUDE: {name: 'Geodude', tile: new ut.Tile('g', 170, 85, 0), aggressive: true, type: Types.ROCK, typeb: Types.GROUND, hp: 40, attack:80, defense: 100, spAttack:30, spDefense:30, speed: 20, xp: 86, skills: []},
GRAVELER: {name: 'Graveler', tile: new ut.Tile('G', 170, 85, 0), aggressive: true, type: Types.ROCK, typeb: Types.GROUND, hp: 55, attack:95, defense: 115, spAttack:45, spDefense:45, speed: 35, xp: 134, skills: []},
GOLEM: {name: 'Golem', tile: new ut.Tile('G', 170, 85, 0), aggressive: true, type: Types.ROCK, typeb: Types.GROUND, hp: 80, attack:110, defense: 130, spAttack:55, spDefense:65, speed: 45, xp: 177, skills: []},
PONYTA: {name: 'Ponyta', tile: new ut.Tile('p', 255, 255, 85), aggressive: false, type: Types.FIRE, hp: 50, attack:85, defense: 55, spAttack:65, spDefense:65, speed: 90, xp: 152, skills: []},
RAPIDASH: {name: 'Rapidash', tile: new ut.Tile('R', 255, 255, 85), aggressive: false, type: Types.FIRE, hp: 65, attack:100, defense: 70, spAttack:80, spDefense:80, speed: 105, xp: 192, skills: []},
SLOWPOKE: {name: 'Slowpoke', tile: new ut.Tile('s', 255, 85, 255), aggressive: false, type: Types.WATER, typeb: Types.PSYCHIC, hp: 90, attack:65, defense: 65, spAttack:40, spDefense:40, speed: 15, xp: 99, skills: []},
SLOWBRO: {name: 'Slowbro', tile: new ut.Tile('s', 255, 85, 255), aggressive: false, type: Types.WATER, typeb: Types.PSYCHIC, hp: 95, attack:75, defense: 110, spAttack:100, spDefense:80, speed: 30, xp: 164, skills: []},
MAGNEMITE: {name: 'Magnemite', tile: new ut.Tile('m', 170, 170, 170), aggressive: true, type: Types.ELECTRIC, typeb: Types.STEEL, hp: 25, attack:35, defense: 70, spAttack:95, spDefense:55, speed: 45, xp: 89, skills: []},
MAGNETON: {name: 'Magneton', tile: new ut.Tile('m', 170, 170, 170), aggressive: true, type: Types.ELECTRIC, typeb: Types.STEEL, hp: 50, attack:60, defense: 95, spAttack:120, spDefense:70, speed: 70, xp: 161, skills: []},
FARFETCHD: {name: 'Farfetch\'d', tile: new ut.Tile('f', 170, 85, 0), aggressive: true, type: Types.NORMAL, typeb: Types.FLYING, hp: 52, attack:65, defense: 55, spAttack:58, spDefense:62, speed: 60, xp: 94, skills: []},
DODUO: {name: 'Doduo', tile: new ut.Tile('d', 170, 85, 0), aggressive: true, type: Types.NORMAL, typeb: Types.FLYING, hp: 35, attack:85, defense: 45, spAttack:35, spDefense:35, speed: 75, xp: 96, skills: []},
DODRIO: {name: 'Dodrio', tile: new ut.Tile('d', 170, 85, 0), aggressive: true, type: Types.NORMAL, typeb: Types.FLYING, hp: 60, attack:110, defense: 70, spAttack:60, spDefense:60, speed: 100, xp: 158, skills: []},
SEEL: {name: 'Seel', tile: new ut.Tile('s', 255, 255, 255), aggressive: false, type: Types.WATER, hp: 65, attack:45, defense: 55, spAttack:45, spDefense:70, speed: 45, xp: 100, skills: []},
DEWGONG: {name: 'Dewgong', tile: new ut.Tile('d', 255, 255, 255), aggressive: true, type: Types.WATER, typeb: Types.ICE, hp: 90, attack:70, defense: 80, spAttack:70, spDefense:95, speed: 70, xp: 176, skills: []},
GRIMER: {name: 'Grimer', tile: new ut.Tile('g', 170, 0, 170), aggressive: true, type: Types.POISON, hp: 80, attack:80, defense: 50, spAttack:40, spDefense:50, speed: 25, xp: 90, skills: []},
MUK: {name: 'Muk', tile: new ut.Tile('m', 170, 0, 170), aggressive: true, type: Types.POISON, hp: 105, attack:105, defense: 75, spAttack:65, spDefense:100, speed: 50, xp: 157, skills: []},
SHELLDER: {name: 'Shellder', tile: new ut.Tile('s', 170, 0, 170), aggressive: false, type: Types.WATER, hp: 30, attack:65, defense: 100, spAttack:45, spDefense:25, speed: 40, xp: 97, skills: []},
CLOYSTER: {name: 'Cloyster', tile: new ut.Tile('c', 170, 0, 170), aggressive: true, type: Types.WATER, typeb: Types.ICE, hp: 50, attack:90, defense: 180, spAttack:85, spDefense:45, speed: 70, xp: 203, skills: []},
GASTLY: {name: 'Gastly', tile: new ut.Tile('g', 170, 0, 170), aggressive: true, type: Types.GHOST, typeb: Types.POISON, hp: 30, attack:35, defense: 30, spAttack:100, spDefense:35, speed: 80, xp: 95, skills: []},
HAUNTER: {name: 'Haunter', tile: new ut.Tile('h', 170, 0, 170), aggressive: true, type: Types.GHOST, typeb: Types.POISON, hp: 45, attack:50, defense: 45, spAttack:115, spDefense:55, speed: 95, xp: 126, skills: []},
GENGAR: {name: 'Gengar', tile: new ut.Tile('G', 170, 0, 170), aggressive: true, type: Types.GHOST, typeb: Types.POISON, hp: 60, attack:65, defense: 60, spAttack:130, spDefense:75, speed: 110, xp: 190, skills: []},
ONIX: {name: 'Onix', tile: new ut.Tile('O', 170, 170, 170), aggressive: true, type: Types.ROCK, typeb: Types.GROUND, hp: 35, attack:45, defense: 160, spAttack:30, spDefense:45, speed: 70, xp: 108, skills: []},
DROWZEE: {name: 'Drowzee', tile: new ut.Tile('d', 255, 255, 85), aggressive: false, type: Types.PSYCHIC, hp: 60, attack:48, defense: 45, spAttack:43, spDefense:90, speed: 42, xp: 102, skills: []},
HYPNO: {name: 'Hypno', tile: new ut.Tile('h', 255, 255, 85), aggressive: false, type: Types.PSYCHIC, hp: 85, attack:73, defense: 70, spAttack:73, spDefense:115, speed: 67, xp: 165, skills: []},
KRABBY: {name: 'Krabby', tile: new ut.Tile('k', 255, 85, 85), aggressive: false, type: Types.WATER, hp: 30, attack:105, defense: 90, spAttack:25, spDefense:25, speed: 50, xp: 115, skills: []},
KINGLER: {name: 'Kingler', tile: new ut.Tile('K', 255, 85, 85), aggressive: true, type: Types.WATER, hp: 55, attack:130, defense: 115, spAttack:50, spDefense:50, speed: 75, xp: 206, skills: []},
VOLTORB: {name: 'Voltorb', tile: new ut.Tile('v', 255, 85, 85), aggressive: true, type: Types.ELECTRIC, hp: 40, attack:30, defense: 50, spAttack:55, spDefense:55, speed: 100, xp: 103, skills: []},
ELECTRODE: {name: 'Electrode', tile: new ut.Tile('E', 255, 85, 85), aggressive: true, type: Types.ELECTRIC, hp: 60, attack:50, defense: 70, spAttack:80, spDefense:80, speed: 140, xp: 150, skills: []},
EXEGGCUTE: {name: 'Exeggcute', tile: new ut.Tile('e', 255, 85, 255), aggressive: true, type: Types.GRASS, typeb: Types.PSYCHIC, hp: 60, attack:40, defense: 80, spAttack:60, spDefense:45, speed: 40, xp: 98, skills: []},
EXEGGUTOR: {name: 'Exeggutor', tile: new ut.Tile('E', 255, 255, 85), aggressive: true, type: Types.GRASS, typeb: Types.PSYCHIC, hp: 95, attack:95, defense: 85, spAttack:125, spDefense:65, speed: 55, xp: 212, skills: []},
CUBONE: {name: 'Cubone', tile: new ut.Tile('c', 170, 85, 0), aggressive: true, type: Types.GROUND, hp: 50, attack:50, defense: 95, spAttack:40, spDefense:50, speed: 35, xp: 87, skills: []},
MAROWAK: {name: 'Marowak', tile: new ut.Tile('m', 170, 85, 0), aggressive: true, type: Types.GROUND, hp: 60, attack:80, defense: 110, spAttack:50, spDefense:80, speed: 45, xp: 124, skills: []},
HITMONLEE: {name: 'Hitmonlee', tile: new ut.Tile('h', 170, 85, 0), aggressive: true, type: Types.FIGHTING, hp: 50, attack:120, defense: 53, spAttack:35, spDefense:110, speed: 87, xp: 139, skills: []},
HITMONCHAN: {name: 'Hitmonchan', tile: new ut.Tile('h', 170, 85, 0), aggressive: true, type: Types.FIGHTING, hp: 50, attack:105, defense: 79, spAttack:35, spDefense:110, speed: 76, xp: 140, skills: []},
LICKITUNG: {name: 'Lickitung', tile: new ut.Tile('l', 255, 85, 255), aggressive: true, type: Types.NORMAL, hp: 90, attack:55, defense: 75, spAttack:60, spDefense:75, speed: 30, xp: 127, skills: []},
KOFFING: {name: 'Koffing', tile: new ut.Tile('k', 170, 0, 170), aggressive: true, type: Types.POISON, hp: 40, attack:65, defense: 95, spAttack:60, spDefense:45, speed: 35, xp: 114, skills: []},
WEEZING: {name: 'Weezing', tile: new ut.Tile('w', 170, 0, 170), aggressive: true, type: Types.POISON, hp: 65, attack:90, defense: 120, spAttack:85, spDefense:70, speed: 60, xp: 173, skills: []},
RHYHORN: {name: 'Rhyhorn', tile: new ut.Tile('R', 170, 170, 170), aggressive: true, type: Types.GROUND, typeb: Types.ROCK, hp: 80, attack:85, defense: 95, spAttack:30, spDefense:30, speed: 25, xp: 135, skills: []},
RHYDON: {name: 'Rhydon', tile: new ut.Tile('R', 170, 170, 170), aggressive: true, type: Types.GROUND, typeb: Types.ROCK, hp: 105, attack:130, defense: 120, spAttack:45, spDefense:45, speed: 40, xp: 204, skills: []},
CHANSEY: {name: 'Chansey', tile: new ut.Tile('c', 255, 85, 255), aggressive: false, type: Types.NORMAL, hp: 250, attack:5, defense: 5, spAttack:35, spDefense:105, speed: 50, xp: 255, skills: []},
TANGELA: {name: 'Tangela', tile: new ut.Tile('t', 85, 85, 255), aggressive: false, type: Types.GRASS, hp: 65, attack:55, defense: 115, spAttack:100, spDefense:40, speed: 60, xp: 166, skills: []},
KANGASKHAN: {name: 'Kangaskhan', tile: new ut.Tile('K', 170, 85, 0), aggressive: true, type: Types.NORMAL, hp: 105, attack:95, defense: 80, spAttack:40, spDefense:80, speed: 90, xp: 175, skills: []},
HORSEA: {name: 'Horsea', tile: new ut.Tile('h', 85, 85, 255), aggressive: false, type: Types.WATER, hp: 30, attack:40, defense: 70, spAttack:70, spDefense:25, speed: 60, xp: 83, skills: []},
SEADRA: {name: 'Seadra', tile: new ut.Tile('s', 85, 85, 255), aggressive: true, type: Types.WATER, hp: 55, attack:65, defense: 95, spAttack:95, spDefense:45, speed: 85, xp: 155, skills: []},
GOLDEEN: {name: 'Goldeen', tile: new ut.Tile('g', 255, 85, 85), aggressive: false, type: Types.WATER, hp: 45, attack:67, defense: 60, spAttack:35, spDefense:50, speed: 63, xp: 111, skills: []},
SEAKING: {name: 'Seaking', tile: new ut.Tile('S', 255, 85, 85), aggressive: true, type: Types.WATER, hp: 80, attack:92, defense: 65, spAttack:65, spDefense:80, speed: 68, xp: 170, skills: []},
STARYU: {name: 'Staryu', tile: new ut.Tile('s', 170, 85, 0), aggressive: true, type: Types.WATER, hp: 30, attack:45, defense: 55, spAttack:70, spDefense:55, speed: 85, xp: 106, skills: []},
STARMIE: {name: 'Starmie', tile: new ut.Tile('s', 170, 0, 170), aggressive: true, type: Types.WATER, typeb: Types.PSYCHIC, hp: 60, attack:75, defense: 85, spAttack:100, spDefense:85, speed: 115, xp: 207, skills: []},
MR_MIME: {name: 'Mr. Mime', tile: new ut.Tile('m', 255, 85, 255), aggressive: false, type: Types.PSYCHIC, hp: 40, attack:45, defense: 65, spAttack:100, spDefense:120, speed: 90, xp: 136, skills: []},
SCYTHER: {name: 'Scyther', tile: new ut.Tile('s', 85, 255, 85), aggressive: true, type: Types.BUG, typeb: Types.FLYING, hp: 70, attack:110, defense: 80, spAttack:55, spDefense:80, speed: 105, xp: 187, skills: []},
JYNX: {name: 'Jynx', tile: new ut.Tile('j', 255, 85, 85), aggressive: false, type: Types.ICE, typeb: Types.PSYCHIC, hp: 65, attack:50, defense: 35, spAttack:115, spDefense:95, speed: 95, xp: 137, skills: []},
ELECTABUZZ: {name: 'Electabuzz', tile: new ut.Tile('e', 255, 255, 85), aggressive: true, type: Types.ELECTRIC, hp: 65, attack:83, defense: 57, spAttack:95, spDefense:85, speed: 105, xp: 156, skills: []},
MAGMAR: {name: 'Magmar', tile: new ut.Tile('m', 255, 85, 85), aggressive: true, type: Types.FIRE, hp: 65, attack:95, defense: 57, spAttack:100, spDefense:85, speed: 93, xp: 167, skills: []},
PINSIR: {name: 'Pinsir', tile: new ut.Tile('p', 170, 85, 0), aggressive: true, type: Types.BUG, hp: 65, attack:125, defense: 100, spAttack:55, spDefense:70, speed: 85, xp: 200, skills: []},
TAUROS: {name: 'Tauros', tile: new ut.Tile('T', 170, 85, 0), aggressive: true, type: Types.NORMAL, hp: 75, attack:100, defense: 95, spAttack:40, spDefense:70, speed: 110, xp: 211, skills: []},
MAGIKARP: {name: 'Magikarp', tile: new ut.Tile('m', 255, 85, 85), aggressive: false, type: Types.WATER, hp: 20, attack:10, defense: 55, spAttack:15, spDefense:20, speed: 80, xp: 20, skills: []},
GYARADOS: {name: 'Gyarados', tile: new ut.Tile('G', 85, 85, 255), aggressive: true, type: Types.WATER, typeb: Types.FLYING, hp: 95, attack:125, defense: 79, spAttack:60, spDefense:100, speed: 81, xp: 214, skills: []},
LAPRAS: {name: 'Lapras', tile: new ut.Tile('L', 85, 85, 255), aggressive: true, type: Types.WATER, typeb: Types.ICE, hp: 130, attack:85, defense: 80, spAttack:85, spDefense:95, speed: 60, xp: 219, skills: []},
DITTO: {name: 'Ditto', tile: new ut.Tile('d', 170, 0, 170), aggressive: true, type: Types.NORMAL, hp: 48, attack:48, defense: 48, spAttack:48, spDefense:48, speed: 48, xp: 61, skills: []},
EEVEE: {name: 'Eevee', tile: new ut.Tile('e', 170, 85, 0), aggressive: true, type: Types.NORMAL, hp: 55, attack:55, defense: 50, spAttack:45, spDefense:65, speed: 55, xp: 92, skills: []},
VAPOREON: {name: 'Vaporeon', tile: new ut.Tile('v', 85, 85, 255), aggressive: true, type: Types.WATER, hp: 130, attack:65, defense: 60, spAttack:110, spDefense:95, speed: 65, xp: 196, skills: []},
JOLTEON: {name: 'Jolteon', tile: new ut.Tile('j', 255, 255, 85), aggressive: true, type: Types.ELECTRIC, hp: 65, attack:65, defense: 60, spAttack:110, spDefense:95, speed: 130, xp: 197, skills: []},
FLAREON: {name: 'Flareon', tile: new ut.Tile('f', 255, 85, 85), aggressive: true, type: Types.FIRE, hp: 65, attack:130, defense: 60, spAttack:95, spDefense:110, speed: 65, xp: 198, skills: []},
PORYGON: {name: 'Porygon', tile: new ut.Tile('p', 255, 85, 255), aggressive: true, type: Types.NORMAL, hp: 65, attack:60, defense: 70, spAttack:85, spDefense:75, speed: 40, xp: 130, skills: []},
OMANYTE: {name: 'Omanyte', tile: new ut.Tile('o', 85, 85, 255), aggressive: true, type: Types.ROCK, typeb: Types.WATER, hp: 35, attack:40, defense: 100, spAttack:90, spDefense:55, speed: 35, xp: 120, skills: []},
OMASTAR: {name: 'Omastar', tile: new ut.Tile('o', 85, 85, 255), aggressive: true, type: Types.ROCK, typeb: Types.WATER, hp: 70, attack:60, defense: 125, spAttack:115, spDefense:70, speed: 55, xp: 199, skills: []},
KABUTO: {name: 'Kabuto', tile: new ut.Tile('k', 170, 85, 0), aggressive: true, type: Types.ROCK, typeb: Types.WATER, hp: 30, attack:80, defense: 90, spAttack:55, spDefense:45, speed: 55, xp: 119, skills: []},
KABUTOPS: {name: 'Kabutops', tile: new ut.Tile('K', 170, 85, 0), aggressive: true, type: Types.ROCK, typeb: Types.WATER, hp: 60, attack:115, defense: 105, spAttack:65, spDefense:70, speed: 80, xp: 201, skills: []},
AERODACTYL: {name: 'Aerodactyl', tile: new ut.Tile('A', 170, 0, 170), aggressive: true, type: Types.ROCK, typeb: Types.FLYING, hp: 80, attack:105, defense: 65, spAttack:60, spDefense:75, speed: 130, xp: 202, skills: []},
SNORLAX: {name: 'Snorlax', tile: new ut.Tile('S', 85, 85, 85), aggressive: false, type: Types.NORMAL, hp: 160, attack:110, defense: 65, spAttack:65, spDefense:110, speed: 30, xp: 154, skills: []},
ARTICUNO: {name: 'Articuno', tile: new ut.Tile('A', 85, 85, 255), aggressive: true, type: Types.ICE, typeb: Types.FLYING, hp: 90, attack:85, defense: 100, spAttack:95, spDefense:125, speed: 85, xp: 215, skills: []},
ZAPDOS: {name: 'Zapdos', tile: new ut.Tile('Z', 255, 255, 85), aggressive: true, type: Types.ELECTRIC, typeb: Types.FLYING, hp: 90, attack:90, defense: 85, spAttack:125, spDefense:90, speed: 100, xp: 216, skills: []},
MOLTRES: {name: 'Moltres', tile: new ut.Tile('M', 255, 255, 85), aggressive: true, type: Types.FIRE, typeb: Types.FLYING, hp: 90, attack:100, defense: 90, spAttack:125, spDefense:85, speed: 90, xp: 217, skills: []},
DRATINI: {name: 'Dratini', tile: new ut.Tile('d', 85, 85, 255), aggressive: true, type: Types.DRAGON, hp: 41, attack:64, defense: 45, spAttack:50, spDefense:50, speed: 50, xp: 67, skills: []},
DRAGONAIR: {name: 'Dragonair', tile: new ut.Tile('d', 85, 85, 255), aggressive: true, type: Types.DRAGON, hp: 61, attack:84, defense: 65, spAttack:70, spDefense:70, speed: 70, xp: 144, skills: []},
DRAGONITE: {name: 'Dragonite', tile: new ut.Tile('D', 170, 85, 0), aggressive: true, type: Types.DRAGON, typeb: Types.FLYING, hp: 91, attack:134, defense: 95, spAttack:100, spDefense:100, speed: 80, xp: 218, skills: []},
MEWTWO: {name: 'Mewtwo', tile: new ut.Tile('M', 170, 0, 170), aggressive: true, type: Types.PSYCHIC, hp: 106, attack:110, defense: 90, spAttack:154, spDefense:90, speed: 130, xp: 220, skills: []},
MEW: {name: 'Mew', tile: new ut.Tile('m', 255, 85, 255), aggressive: true, type: Types.PSYCHIC, hp: 100, attack:100, defense: 100, spAttack:100, spDefense:100, speed: 100, xp: 64, skills: []}
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

Races.SPEAROW.evolution = {minLevel: 20, race: Races.FEAROW}

Races.EKANS.evolution = {minLevel: 22, race: Races.ARBOK}



Races.SANDSHREW.evolution = {minLevel: 22, race: Races.SANDSLASH}

Races.NIDORAN_F.evolution = {minLevel: 16, race: Races.NIDORINA}


Races.NIDORAN_M.evolution = {minLevel: 16, race: Races.NIDORINO}








Races.ZUBAT.evolution = {minLevel: 22, race: Races.GOLBAT}

Races.ODDISH.evolution = {minLevel: 21, race: Races.GLOOM}


Races.PARAS.evolution = {minLevel: 24, race: Races.PARASECT}

Races.VENONAT.evolution = {minLevel: 31, race: Races.VENOMOTH}

Races.DIGLETT.evolution = {minLevel: 26, race: Races.DUGTRIO}

Races.MEOWTH.evolution = {minLevel: 28, race: Races.PERSIAN}

Races.PSYDUCK.evolution = {minLevel: 33, race: Races.GOLDUCK}

Races.MANKEY.evolution = {minLevel: 28, race: Races.PRIMEAPE}



Races.POLIWAG.evolution = {minLevel: 25, race: Races.POLIWHIRL}


Races.ABRA.evolution = {minLevel: 16, race: Races.KADABRA}


Races.MACHOP.evolution = {minLevel: 28, race: Races.MACHOKE}


Races.BELLSPROUT.evolution = {minLevel: 21, race: Races.WEEPINBELL}


Races.TENTACOOL.evolution = {minLevel: 30, race: Races.TENTACRUEL}

Races.GEODUDE.evolution = {minLevel: 25, race: Races.GRAVELER}


Races.PONYTA.evolution = {minLevel: 40, race: Races.RAPIDASH}

Races.SLOWPOKE.evolution = {minLevel: 37, race: Races.SLOWBRO}

Races.MAGNEMITE.evolution = {minLevel: 30, race: Races.MAGNETON}


Races.DODUO.evolution = {minLevel: 31, race: Races.DODRIO}

Races.SEEL.evolution = {minLevel: 34, race: Races.DEWGONG}

Races.GRIMER.evolution = {minLevel: 38, race: Races.MUK}



Races.GASTLY.evolution = {minLevel: 25, race: Races.HAUNTER}



Races.DROWZEE.evolution = {minLevel: 26, race: Races.HYPNO}

Races.KRABBY.evolution = {minLevel: 28, race: Races.KINGLER}

Races.VOLTORB.evolution = {minLevel: 30, race: Races.ELECTRODE}



Races.CUBONE.evolution = {minLevel: 28, race: Races.MAROWAK}




Races.KOFFING.evolution = {minLevel: 35, race: Races.WEEZING}

Races.RHYHORN.evolution = {minLevel: 42, race: Races.RHYDON}




Races.HORSEA.evolution = {minLevel: 32, race: Races.SEADRA}

Races.GOLDEEN.evolution = {minLevel: 33, race: Races.SEAKING}










Races.MAGIKARP.evolution = {minLevel: 20, race: Races.GYARADOS}








Races.OMANYTE.evolution = {minLevel: 40, race: Races.OMASTAR}

Races.KABUTO.evolution = {minLevel: 40, race: Races.KABUTOPS}






Races.DRATINI.evolution = {minLevel: 30, race: Races.DRAGONAIR}
Races.DRAGONAIR.evolution = {minLevel: 55, race: Races.DRAGONITE}

Races.BULBASAUR.skills.push({skill: Skills.TACKLE, level: 1});
Races.BULBASAUR.skills.push({skill: Skills.GROWL, level: 1});
Races.BULBASAUR.skills.push({skill: Skills.LEECH_SEED, level: 7});
Races.BULBASAUR.skills.push({skill: Skills.VINE_WHIP, level: 13});
Races.BULBASAUR.skills.push({skill: Skills.POISON_POWDER, level: 20});
Races.BULBASAUR.skills.push({skill: Skills.RAZOR_LEAF, level: 27});
Races.BULBASAUR.skills.push({skill: Skills.GROWTH, level: 34});
Races.BULBASAUR.skills.push({skill: Skills.SLEEP_POWDER, level: 41});
Races.BULBASAUR.skills.push({skill: Skills.SOLAR_BEAM, level: 48});
Races.IVYSAUR.skills.push({skill: Skills.VINE_WHIP, level: 13});
Races.IVYSAUR.skills.push({skill: Skills.POISON_POWDER, level: 22});
Races.IVYSAUR.skills.push({skill: Skills.RAZOR_LEAF, level: 30});
Races.IVYSAUR.skills.push({skill: Skills.GROWTH, level: 38});
Races.IVYSAUR.skills.push({skill: Skills.SLEEP_POWDER, level: 46});
Races.IVYSAUR.skills.push({skill: Skills.SOLAR_BEAM, level: 54});
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
Races.CHARMELEON.skills.push({skill: Skills.LEER, level: 15});
Races.CHARMELEON.skills.push({skill: Skills.RAGE, level: 24});
Races.CHARMELEON.skills.push({skill: Skills.SLASH, level: 33});
Races.CHARMELEON.skills.push({skill: Skills.FLAMETHROWER, level: 42});
Races.CHARMELEON.skills.push({skill: Skills.FIRE_SPIN, level: 56});
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
Races.WARTORTLE.skills.push({skill: Skills.WATER_GUN, level: 15});
Races.WARTORTLE.skills.push({skill: Skills.BITE, level: 24});
Races.WARTORTLE.skills.push({skill: Skills.WITHDRAW, level: 31});
Races.WARTORTLE.skills.push({skill: Skills.SKULL_BASH, level: 39});
Races.WARTORTLE.skills.push({skill: Skills.HYDRO_PUMP, level: 47});
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
Races.PIDGEOTTO.skills.push({skill: Skills.WHIRLWIND, level: 21});
Races.PIDGEOTTO.skills.push({skill: Skills.WING_ATTACK, level: 31});
Races.PIDGEOTTO.skills.push({skill: Skills.AGILITY, level: 40});
Races.PIDGEOTTO.skills.push({skill: Skills.MIRROR_MOVE, level: 49});
Races.PIDGEOT.skills.push({skill: Skills.AGILITY, level: 44});
Races.PIDGEOT.skills.push({skill: Skills.MIRROR_MOVE, level: 54});
Races.RATTATA.skills.push({skill: Skills.TACKLE, level: 1});
Races.RATTATA.skills.push({skill: Skills.TAIL_WHIP, level: 1});
Races.RATTATA.skills.push({skill: Skills.QUICK_ATTACK, level: 7});
Races.RATTATA.skills.push({skill: Skills.HYPER_FANG, level: 14});
Races.RATTATA.skills.push({skill: Skills.FOCUS_ENERGY, level: 23});
Races.RATTATA.skills.push({skill: Skills.SUPER_FANG, level: 34});
Races.RATICATE.skills.push({skill: Skills.HYPER_FANG, level: 14});
Races.RATICATE.skills.push({skill: Skills.FOCUS_ENERGY, level: 27});
Races.RATICATE.skills.push({skill: Skills.SUPER_FANG, level: 41});
Races.SPEAROW.skills.push({skill: Skills.PECK, level: 1});
Races.SPEAROW.skills.push({skill: Skills.GROWL, level: 1});
Races.SPEAROW.skills.push({skill: Skills.LEER, level: 9});
Races.SPEAROW.skills.push({skill: Skills.FURY_ATTACK, level: 15});
Races.SPEAROW.skills.push({skill: Skills.MIRROR_MOVE, level: 22});
Races.SPEAROW.skills.push({skill: Skills.DRILL_PECK, level: 29});
Races.SPEAROW.skills.push({skill: Skills.AGILITY, level: 36});
Races.FEAROW.skills.push({skill: Skills.MIRROR_MOVE, level: 25});
Races.FEAROW.skills.push({skill: Skills.DRILL_PECK, level: 34});
Races.FEAROW.skills.push({skill: Skills.AGILITY, level: 43});
Races.EKANS.skills.push({skill: Skills.WRAP, level: 1});
Races.EKANS.skills.push({skill: Skills.LEER, level: 1});
Races.EKANS.skills.push({skill: Skills.POISON_STING, level: 10});
Races.EKANS.skills.push({skill: Skills.BITE, level: 17});
Races.EKANS.skills.push({skill: Skills.GLARE, level: 24});
Races.EKANS.skills.push({skill: Skills.SCREECH, level: 31});
Races.EKANS.skills.push({skill: Skills.ACID, level: 38});
Races.ARBOK.skills.push({skill: Skills.BITE, level: 17});
Races.ARBOK.skills.push({skill: Skills.GLARE, level: 27});
Races.ARBOK.skills.push({skill: Skills.SCREECH, level: 36});
Races.ARBOK.skills.push({skill: Skills.ACID, level: 47});
Races.PIKACHU.skills.push({skill: Skills.THUNDER_SHOCK, level: 1});
Races.PIKACHU.skills.push({skill: Skills.GROWL, level: 1});
Races.PIKACHU.skills.push({skill: Skills.THUNDER_WAVE, level: 9});
Races.PIKACHU.skills.push({skill: Skills.QUICK_ATTACK, level: 16});
Races.PIKACHU.skills.push({skill: Skills.SWIFT, level: 26});
Races.PIKACHU.skills.push({skill: Skills.AGILITY, level: 33});
Races.PIKACHU.skills.push({skill: Skills.THUNDER, level: 43});
Races.SANDSHREW.skills.push({skill: Skills.SCRATCH, level: 1});
Races.SANDSHREW.skills.push({skill: Skills.SAND_ATTACK, level: 10});
Races.SANDSHREW.skills.push({skill: Skills.SLASH, level: 17});
Races.SANDSHREW.skills.push({skill: Skills.POISON_STING, level: 24});
Races.SANDSHREW.skills.push({skill: Skills.SWIFT, level: 31});
Races.SANDSHREW.skills.push({skill: Skills.FURY_SWIPES, level: 38});
Races.SANDSLASH.skills.push({skill: Skills.POISON_STING, level: 27});
Races.SANDSLASH.skills.push({skill: Skills.SWIFT, level: 36});
Races.SANDSLASH.skills.push({skill: Skills.FURY_SWIPES, level: 47});
Races.NIDORAN_F.skills.push({skill: Skills.GROWL, level: 1});
Races.NIDORAN_F.skills.push({skill: Skills.TACKLE, level: 1});
Races.NIDORAN_F.skills.push({skill: Skills.SCRATCH, level: 8});
Races.NIDORAN_F.skills.push({skill: Skills.POISON_STING, level: 14});
Races.NIDORAN_F.skills.push({skill: Skills.TAIL_WHIP, level: 21});
Races.NIDORAN_F.skills.push({skill: Skills.BITE, level: 29});
Races.NIDORAN_F.skills.push({skill: Skills.FURY_SWIPES, level: 36});
Races.NIDORAN_F.skills.push({skill: Skills.DOUBLE_KICK, level: 43});
Races.NIDORINA.skills.push({skill: Skills.POISON_STING, level: 14});
Races.NIDORINA.skills.push({skill: Skills.TAIL_WHIP, level: 23});
Races.NIDORINA.skills.push({skill: Skills.BITE, level: 32});
Races.NIDORINA.skills.push({skill: Skills.FURY_SWIPES, level: 41});
Races.NIDORINA.skills.push({skill: Skills.DOUBLE_KICK, level: 50});
Races.NIDOQUEEN.skills.push({skill: Skills.POISON_STING, level: 14});
Races.NIDOQUEEN.skills.push({skill: Skills.BODY_SLAM, level: 23});
Races.NIDORAN_M.skills.push({skill: Skills.LEER, level: 1});
Races.NIDORAN_M.skills.push({skill: Skills.TACKLE, level: 1});
Races.NIDORAN_M.skills.push({skill: Skills.HORN_ATTACK, level: 8});
Races.NIDORAN_M.skills.push({skill: Skills.POISON_STING, level: 14});
Races.NIDORAN_M.skills.push({skill: Skills.FOCUS_ENERGY, level: 21});
Races.NIDORAN_M.skills.push({skill: Skills.FURY_ATTACK, level: 29});
Races.NIDORAN_M.skills.push({skill: Skills.HORN_DRILL, level: 36});
Races.NIDORAN_M.skills.push({skill: Skills.DOUBLE_KICK, level: 43});
Races.NIDORINO.skills.push({skill: Skills.POUND, level: 1});
Races.NIDORINO.skills.push({skill: Skills.GROWL, level: 1});
Races.NIDORINO.skills.push({skill: Skills.SING, level: 13});
Races.NIDORINO.skills.push({skill: Skills.DOUBLE_SLAP, level: 18});
Races.NIDORINO.skills.push({skill: Skills.FOCUS_ENERGY, level: 23});
Races.NIDORINO.skills.push({skill: Skills.MINIMIZE, level: 24});
Races.NIDORINO.skills.push({skill: Skills.METRONOME, level: 31});
Races.NIDORINO.skills.push({skill: Skills.FURY_ATTACK, level: 32});
Races.NIDORINO.skills.push({skill: Skills.DEFENSE_CURL, level: 39});
Races.NIDORINO.skills.push({skill: Skills.HORN_DRILL, level: 41});
Races.NIDORINO.skills.push({skill: Skills.LIGHT_SCREEN, level: 48});
Races.NIDORINO.skills.push({skill: Skills.DOUBLE_KICK, level: 50});
Races.NIDOKING.skills.push({skill: Skills.THRASH, level: 23});
Races.VULPIX.skills.push({skill: Skills.EMBER, level: 1});
Races.VULPIX.skills.push({skill: Skills.TAIL_WHIP, level: 1});
Races.VULPIX.skills.push({skill: Skills.QUICK_ATTACK, level: 16});
Races.VULPIX.skills.push({skill: Skills.ROAR, level: 21});
Races.VULPIX.skills.push({skill: Skills.CONFUSE_RAY, level: 28});
Races.VULPIX.skills.push({skill: Skills.FLAMETHROWER, level: 35});
Races.VULPIX.skills.push({skill: Skills.FIRE_SPIN, level: 42});
Races.JIGGLYPUFF.skills.push({skill: Skills.SING, level: 1});
Races.JIGGLYPUFF.skills.push({skill: Skills.POUND, level: 9});
Races.JIGGLYPUFF.skills.push({skill: Skills.DISABLE, level: 14});
Races.JIGGLYPUFF.skills.push({skill: Skills.DEFENSE_CURL, level: 19});
Races.JIGGLYPUFF.skills.push({skill: Skills.DOUBLE_SLAP, level: 24});
Races.JIGGLYPUFF.skills.push({skill: Skills.REST, level: 29});
Races.JIGGLYPUFF.skills.push({skill: Skills.BODY_SLAM, level: 34});
Races.JIGGLYPUFF.skills.push({skill: Skills.DOUBLE_EDGE, level: 39});
Races.ZUBAT.skills.push({skill: Skills.LEECH_LIFE, level: 1});
Races.ZUBAT.skills.push({skill: Skills.SUPERSONIC, level: 10});
Races.ZUBAT.skills.push({skill: Skills.BITE, level: 15});
Races.ZUBAT.skills.push({skill: Skills.CONFUSE_RAY, level: 21});
Races.ZUBAT.skills.push({skill: Skills.WING_ATTACK, level: 28});
Races.ZUBAT.skills.push({skill: Skills.HAZE, level: 36});
Races.GOLBAT.skills.push({skill: Skills.WING_ATTACK, level: 32});
Races.GOLBAT.skills.push({skill: Skills.HAZE, level: 43});
Races.ODDISH.skills.push({skill: Skills.ABSORB, level: 1});
Races.ODDISH.skills.push({skill: Skills.POISON_POWDER, level: 15});
Races.ODDISH.skills.push({skill: Skills.STUN_SPORE, level: 17});
Races.ODDISH.skills.push({skill: Skills.SLEEP_POWDER, level: 19});
Races.ODDISH.skills.push({skill: Skills.ACID, level: 24});
Races.ODDISH.skills.push({skill: Skills.PETAL_DANCE, level: 33});
Races.ODDISH.skills.push({skill: Skills.SOLAR_BEAM, level: 46});
Races.GLOOM.skills.push({skill: Skills.ACID, level: 28});
Races.GLOOM.skills.push({skill: Skills.PETAL_DANCE, level: 38});
Races.GLOOM.skills.push({skill: Skills.SOLAR_BEAM, level: 52});
Races.PARAS.skills.push({skill: Skills.SCRATCH, level: 1});
Races.PARAS.skills.push({skill: Skills.STUN_SPORE, level: 13});
Races.PARAS.skills.push({skill: Skills.LEECH_LIFE, level: 20});
Races.PARAS.skills.push({skill: Skills.SPORE, level: 27});
Races.PARAS.skills.push({skill: Skills.SLASH, level: 34});
Races.PARAS.skills.push({skill: Skills.GROWTH, level: 41});
Races.PARASECT.skills.push({skill: Skills.SPORE, level: 30});
Races.PARASECT.skills.push({skill: Skills.SLASH, level: 39});
Races.PARASECT.skills.push({skill: Skills.GROWTH, level: 48});
Races.VENONAT.skills.push({skill: Skills.TACKLE, level: 1});
Races.VENONAT.skills.push({skill: Skills.DISABLE, level: 1});
Races.VENONAT.skills.push({skill: Skills.POISON_POWDER, level: 24});
Races.VENONAT.skills.push({skill: Skills.LEECH_LIFE, level: 27});
Races.VENONAT.skills.push({skill: Skills.STUN_SPORE, level: 30});
Races.VENONAT.skills.push({skill: Skills.PSYBEAM, level: 35});
Races.VENONAT.skills.push({skill: Skills.SLEEP_POWDER, level: 38});
Races.VENONAT.skills.push({skill: Skills.PSYCHIC, level: 43});
Races.VENOMOTH.skills.push({skill: Skills.PSYBEAM, level: 38});
Races.VENOMOTH.skills.push({skill: Skills.SLEEP_POWDER, level: 43});
Races.VENOMOTH.skills.push({skill: Skills.PSYCHIC, level: 50});
Races.DIGLETT.skills.push({skill: Skills.SCRATCH, level: 1});
Races.DIGLETT.skills.push({skill: Skills.GROWL, level: 15});
Races.DIGLETT.skills.push({skill: Skills.DIG, level: 19});
Races.DIGLETT.skills.push({skill: Skills.SAND_ATTACK, level: 24});
Races.DIGLETT.skills.push({skill: Skills.SLASH, level: 31});
Races.DIGLETT.skills.push({skill: Skills.EARTHQUAKE, level: 40});
Races.DUGTRIO.skills.push({skill: Skills.SLASH, level: 35});
Races.DUGTRIO.skills.push({skill: Skills.EARTHQUAKE, level: 47});
Races.MEOWTH.skills.push({skill: Skills.SCRATCH, level: 1});
Races.MEOWTH.skills.push({skill: Skills.GROWL, level: 1});
Races.MEOWTH.skills.push({skill: Skills.BITE, level: 12});
Races.MEOWTH.skills.push({skill: Skills.PAY_DAY, level: 17});
Races.MEOWTH.skills.push({skill: Skills.SCREECH, level: 24});
Races.MEOWTH.skills.push({skill: Skills.FURY_SWIPES, level: 33});
Races.MEOWTH.skills.push({skill: Skills.SLASH, level: 44});
Races.PERSIAN.skills.push({skill: Skills.FURY_SWIPES, level: 37});
Races.PERSIAN.skills.push({skill: Skills.SLASH, level: 51});
Races.PSYDUCK.skills.push({skill: Skills.SCRATCH, level: 1});
Races.PSYDUCK.skills.push({skill: Skills.TAIL_WHIP, level: 28});
Races.PSYDUCK.skills.push({skill: Skills.DISABLE, level: 31});
Races.PSYDUCK.skills.push({skill: Skills.CONFUSION, level: 36});
Races.PSYDUCK.skills.push({skill: Skills.FURY_SWIPES, level: 43});
Races.PSYDUCK.skills.push({skill: Skills.HYDRO_PUMP, level: 52});
Races.GOLDUCK.skills.push({skill: Skills.CONFUSION, level: 39});
Races.GOLDUCK.skills.push({skill: Skills.FURY_SWIPES, level: 48});
Races.GOLDUCK.skills.push({skill: Skills.HYDRO_PUMP, level: 59});
Races.MANKEY.skills.push({skill: Skills.SCRATCH, level: 1});
Races.MANKEY.skills.push({skill: Skills.LEER, level: 1});
Races.MANKEY.skills.push({skill: Skills.KARATE_CHOP, level: 15});
Races.MANKEY.skills.push({skill: Skills.FURY_ATTACK, level: 21});
Races.MANKEY.skills.push({skill: Skills.FOCUS_ENERGY, level: 27});
Races.MANKEY.skills.push({skill: Skills.SEISMIC_TOSS, level: 33});
Races.MANKEY.skills.push({skill: Skills.THRASH, level: 39});
Races.PRIMEAPE.skills.push({skill: Skills.SEISMIC_TOSS, level: 37});
Races.PRIMEAPE.skills.push({skill: Skills.THRASH, level: 46});
Races.GROWLITHE.skills.push({skill: Skills.BITE, level: 1});
Races.GROWLITHE.skills.push({skill: Skills.ROAR, level: 1});
Races.GROWLITHE.skills.push({skill: Skills.EMBER, level: 18});
Races.GROWLITHE.skills.push({skill: Skills.LEER, level: 23});
Races.GROWLITHE.skills.push({skill: Skills.TAKE_DOWN, level: 30});
Races.GROWLITHE.skills.push({skill: Skills.AGILITY, level: 39});
Races.GROWLITHE.skills.push({skill: Skills.FLAMETHROWER, level: 50});
Races.POLIWAG.skills.push({skill: Skills.BUBBLE, level: 1});
Races.POLIWAG.skills.push({skill: Skills.HYPNOSIS, level: 16});
Races.POLIWAG.skills.push({skill: Skills.WATER_GUN, level: 19});
Races.POLIWAG.skills.push({skill: Skills.DOUBLE_SLAP, level: 25});
Races.POLIWAG.skills.push({skill: Skills.BODY_SLAM, level: 31});
Races.POLIWAG.skills.push({skill: Skills.AMNESIA, level: 38});
Races.POLIWAG.skills.push({skill: Skills.HYDRO_PUMP, level: 45});
Races.POLIWHIRL.skills.push({skill: Skills.DOUBLE_SLAP, level: 26});
Races.POLIWHIRL.skills.push({skill: Skills.BODY_SLAM, level: 33});
Races.POLIWHIRL.skills.push({skill: Skills.AMNESIA, level: 41});
Races.POLIWHIRL.skills.push({skill: Skills.HYDRO_PUMP, level: 49});
Races.ABRA.skills.push({skill: Skills.TELEPORT, level: 1});
Races.KADABRA.skills.push({skill: Skills.TELEPORT, level: 1});
Races.KADABRA.skills.push({skill: Skills.CONFUSION, level: 1});
Races.KADABRA.skills.push({skill: Skills.DISABLE, level: 20});
Races.KADABRA.skills.push({skill: Skills.PSYBEAM, level: 27});
Races.KADABRA.skills.push({skill: Skills.RECOVER, level: 31});
Races.KADABRA.skills.push({skill: Skills.PSYCHIC, level: 38});
Races.KADABRA.skills.push({skill: Skills.REFLECT, level: 42});
Races.ALAKAZAM.skills.push({skill: Skills.DISABLE, level: 20});
Races.ALAKAZAM.skills.push({skill: Skills.PSYBEAM, level: 27});
Races.ALAKAZAM.skills.push({skill: Skills.RECOVER, level: 31});
Races.ALAKAZAM.skills.push({skill: Skills.PSYCHIC, level: 38});
Races.ALAKAZAM.skills.push({skill: Skills.REFLECT, level: 42});
Races.MACHOP.skills.push({skill: Skills.KARATE_CHOP, level: 1});
Races.MACHOP.skills.push({skill: Skills.LOW_KICK, level: 20});
Races.MACHOP.skills.push({skill: Skills.LEER, level: 25});
Races.MACHOP.skills.push({skill: Skills.FOCUS_ENERGY, level: 32});
Races.MACHOP.skills.push({skill: Skills.SEISMIC_TOSS, level: 39});
Races.MACHOP.skills.push({skill: Skills.SUBMISSION, level: 46});
Races.MACHOKE.skills.push({skill: Skills.FOCUS_ENERGY, level: 36});
Races.MACHOKE.skills.push({skill: Skills.SEISMIC_TOSS, level: 44});
Races.MACHOKE.skills.push({skill: Skills.SUBMISSION, level: 52});
Races.MACHAMP.skills.push({skill: Skills.FOCUS_ENERGY, level: 36});
Races.MACHAMP.skills.push({skill: Skills.SEISMIC_TOSS, level: 44});
Races.MACHAMP.skills.push({skill: Skills.SUBMISSION, level: 52});
Races.BELLSPROUT.skills.push({skill: Skills.VINE_WHIP, level: 1});
Races.BELLSPROUT.skills.push({skill: Skills.GROWTH, level: 1});
Races.BELLSPROUT.skills.push({skill: Skills.WRAP, level: 13});
Races.BELLSPROUT.skills.push({skill: Skills.POISON_POWDER, level: 15});
Races.BELLSPROUT.skills.push({skill: Skills.SLEEP_POWDER, level: 18});
Races.BELLSPROUT.skills.push({skill: Skills.STUN_SPORE, level: 21});
Races.BELLSPROUT.skills.push({skill: Skills.ACID, level: 26});
Races.BELLSPROUT.skills.push({skill: Skills.RAZOR_LEAF, level: 33});
Races.BELLSPROUT.skills.push({skill: Skills.SLAM, level: 42});
Races.WEEPINBELL.skills.push({skill: Skills.STUN_SPORE, level: 23});
Races.WEEPINBELL.skills.push({skill: Skills.ACID, level: 29});
Races.WEEPINBELL.skills.push({skill: Skills.RAZOR_LEAF, level: 38});
Races.WEEPINBELL.skills.push({skill: Skills.SLAM, level: 49});
Races.TENTACOOL.skills.push({skill: Skills.ACID, level: 1});
Races.TENTACOOL.skills.push({skill: Skills.SUPERSONIC, level: 7});
Races.TENTACOOL.skills.push({skill: Skills.WRAP, level: 13});
Races.TENTACOOL.skills.push({skill: Skills.POISON_STING, level: 18});
Races.TENTACOOL.skills.push({skill: Skills.WATER_GUN, level: 22});
Races.TENTACOOL.skills.push({skill: Skills.CONSTRICT, level: 27});
Races.TENTACOOL.skills.push({skill: Skills.BARRIER, level: 33});
Races.TENTACOOL.skills.push({skill: Skills.SCREECH, level: 40});
Races.TENTACOOL.skills.push({skill: Skills.HYDRO_PUMP, level: 48});
Races.TENTACRUEL.skills.push({skill: Skills.BARRIER, level: 35});
Races.TENTACRUEL.skills.push({skill: Skills.SCREECH, level: 43});
Races.TENTACRUEL.skills.push({skill: Skills.HYDRO_PUMP, level: 50});
Races.GEODUDE.skills.push({skill: Skills.TACKLE, level: 1});
Races.GEODUDE.skills.push({skill: Skills.DEFENSE_CURL, level: 11});
Races.GEODUDE.skills.push({skill: Skills.ROCK_THROW, level: 16});
Races.GEODUDE.skills.push({skill: Skills.SELF_DESTRUCT, level: 21});
Races.GEODUDE.skills.push({skill: Skills.HARDEN, level: 26});
Races.GEODUDE.skills.push({skill: Skills.EARTHQUAKE, level: 31});
Races.GEODUDE.skills.push({skill: Skills.EXPLOSION, level: 36});
Races.GRAVELER.skills.push({skill: Skills.HARDEN, level: 29});
Races.GRAVELER.skills.push({skill: Skills.EARTHQUAKE, level: 36});
Races.GRAVELER.skills.push({skill: Skills.EXPLOSION, level: 43});
Races.GOLEM.skills.push({skill: Skills.HARDEN, level: 29});
Races.GOLEM.skills.push({skill: Skills.EARTHQUAKE, level: 36});
Races.GOLEM.skills.push({skill: Skills.EXPLOSION, level: 43});
Races.PONYTA.skills.push({skill: Skills.EMBER, level: 1});
Races.PONYTA.skills.push({skill: Skills.TAIL_WHIP, level: 30});
Races.PONYTA.skills.push({skill: Skills.STOMP, level: 32});
Races.PONYTA.skills.push({skill: Skills.GROWL, level: 35});
Races.PONYTA.skills.push({skill: Skills.FIRE_SPIN, level: 39});
Races.PONYTA.skills.push({skill: Skills.TAKE_DOWN, level: 43});
Races.PONYTA.skills.push({skill: Skills.AGILITY, level: 48});
Races.RAPIDASH.skills.push({skill: Skills.TAKE_DOWN, level: 47});
Races.RAPIDASH.skills.push({skill: Skills.AGILITY, level: 55});
Races.SLOWPOKE.skills.push({skill: Skills.CONFUSION, level: 1});
Races.SLOWPOKE.skills.push({skill: Skills.DISABLE, level: 18});
Races.SLOWPOKE.skills.push({skill: Skills.HEADBUTT, level: 22});
Races.SLOWPOKE.skills.push({skill: Skills.GROWL, level: 27});
Races.SLOWPOKE.skills.push({skill: Skills.WATER_GUN, level: 33});
Races.SLOWPOKE.skills.push({skill: Skills.AMNESIA, level: 40});
Races.SLOWPOKE.skills.push({skill: Skills.PSYCHIC, level: 48});
Races.SLOWBRO.skills.push({skill: Skills.AMNESIA, level: 44});
Races.SLOWBRO.skills.push({skill: Skills.PSYCHIC, level: 55});
Races.MAGNEMITE.skills.push({skill: Skills.TACKLE, level: 1});
Races.MAGNEMITE.skills.push({skill: Skills.SONIC_BOOM, level: 21});
Races.MAGNEMITE.skills.push({skill: Skills.THUNDER_SHOCK, level: 25});
Races.MAGNEMITE.skills.push({skill: Skills.SUPERSONIC, level: 29});
Races.MAGNEMITE.skills.push({skill: Skills.THUNDER_WAVE, level: 35});
Races.MAGNEMITE.skills.push({skill: Skills.SWIFT, level: 41});
Races.MAGNEMITE.skills.push({skill: Skills.SCREECH, level: 47});
Races.MAGNETON.skills.push({skill: Skills.THUNDER_WAVE, level: 38});
Races.MAGNETON.skills.push({skill: Skills.SWIFT, level: 46});
Races.MAGNETON.skills.push({skill: Skills.SCREECH, level: 54});
Races.FARFETCHD.skills.push({skill: Skills.PECK, level: 1});
Races.FARFETCHD.skills.push({skill: Skills.SAND_ATTACK, level: 1});
Races.FARFETCHD.skills.push({skill: Skills.LEER, level: 7});
Races.FARFETCHD.skills.push({skill: Skills.FURY_ATTACK, level: 15});
Races.FARFETCHD.skills.push({skill: Skills.SWORDS_DANCE, level: 23});
Races.FARFETCHD.skills.push({skill: Skills.AGILITY, level: 31});
Races.FARFETCHD.skills.push({skill: Skills.SLASH, level: 39});
Races.DODUO.skills.push({skill: Skills.PECK, level: 1});
Races.DODUO.skills.push({skill: Skills.GROWL, level: 20});
Races.DODUO.skills.push({skill: Skills.FURY_ATTACK, level: 24});
Races.DODUO.skills.push({skill: Skills.DRILL_PECK, level: 30});
Races.DODUO.skills.push({skill: Skills.RAGE, level: 36});
Races.DODUO.skills.push({skill: Skills.TRI_ATTACK, level: 40});
Races.DODUO.skills.push({skill: Skills.AGILITY, level: 44});
Races.DODRIO.skills.push({skill: Skills.RAGE, level: 39});
Races.DODRIO.skills.push({skill: Skills.TRI_ATTACK, level: 45});
Races.DODRIO.skills.push({skill: Skills.AGILITY, level: 51});
Races.SEEL.skills.push({skill: Skills.HEADBUTT, level: 1});
Races.SEEL.skills.push({skill: Skills.GROWL, level: 30});
Races.SEEL.skills.push({skill: Skills.AURORA_BEAM, level: 35});
Races.SEEL.skills.push({skill: Skills.REST, level: 40});
Races.SEEL.skills.push({skill: Skills.TAKE_DOWN, level: 45});
Races.SEEL.skills.push({skill: Skills.ICE_BEAM, level: 50});
Races.DEWGONG.skills.push({skill: Skills.AURORA_BEAM, level: 35});
Races.DEWGONG.skills.push({skill: Skills.REST, level: 44});
Races.DEWGONG.skills.push({skill: Skills.TAKE_DOWN, level: 50});
Races.DEWGONG.skills.push({skill: Skills.ICE_BEAM, level: 56});
Races.GRIMER.skills.push({skill: Skills.POUND, level: 1});
Races.GRIMER.skills.push({skill: Skills.DISABLE, level: 1});
Races.GRIMER.skills.push({skill: Skills.POISON_GAS, level: 30});
Races.GRIMER.skills.push({skill: Skills.MINIMIZE, level: 33});
Races.GRIMER.skills.push({skill: Skills.SLUDGE, level: 37});
Races.GRIMER.skills.push({skill: Skills.HARDEN, level: 42});
Races.GRIMER.skills.push({skill: Skills.SCREECH, level: 48});
Races.GRIMER.skills.push({skill: Skills.ACID_ARMOR, level: 55});
Races.MUK.skills.push({skill: Skills.HARDEN, level: 45});
Races.MUK.skills.push({skill: Skills.SCREECH, level: 53});
Races.MUK.skills.push({skill: Skills.ACID_ARMOR, level: 60});
Races.SHELLDER.skills.push({skill: Skills.TACKLE, level: 1});
Races.SHELLDER.skills.push({skill: Skills.WITHDRAW, level: 1});
Races.SHELLDER.skills.push({skill: Skills.SUPERSONIC, level: 18});
Races.SHELLDER.skills.push({skill: Skills.CLAMP, level: 23});
Races.SHELLDER.skills.push({skill: Skills.AURORA_BEAM, level: 30});
Races.SHELLDER.skills.push({skill: Skills.LEER, level: 39});
Races.SHELLDER.skills.push({skill: Skills.ICE_BEAM, level: 50});
Races.CLOYSTER.skills.push({skill: Skills.SPIKE_CANNON, level: 50});
Races.GASTLY.skills.push({skill: Skills.LICK, level: 1});
Races.GASTLY.skills.push({skill: Skills.CONFUSE_RAY, level: 1});
Races.GASTLY.skills.push({skill: Skills.NIGHT_SHADE, level: 1});
Races.GASTLY.skills.push({skill: Skills.HYPNOSIS, level: 27});
Races.GASTLY.skills.push({skill: Skills.DREAM_EATER, level: 35});
Races.HAUNTER.skills.push({skill: Skills.HYPNOSIS, level: 29});
Races.HAUNTER.skills.push({skill: Skills.DREAM_EATER, level: 38});
Races.GENGAR.skills.push({skill: Skills.HYPNOSIS, level: 29});
Races.GENGAR.skills.push({skill: Skills.DREAM_EATER, level: 38});
Races.ONIX.skills.push({skill: Skills.TACKLE, level: 1});
Races.ONIX.skills.push({skill: Skills.SCREECH, level: 1});
Races.ONIX.skills.push({skill: Skills.BIND, level: 15});
Races.ONIX.skills.push({skill: Skills.ROCK_THROW, level: 19});
Races.ONIX.skills.push({skill: Skills.RAGE, level: 25});
Races.ONIX.skills.push({skill: Skills.SLAM, level: 33});
Races.ONIX.skills.push({skill: Skills.HARDEN, level: 43});
Races.DROWZEE.skills.push({skill: Skills.POUND, level: 1});
Races.DROWZEE.skills.push({skill: Skills.HYPNOSIS, level: 1});
Races.DROWZEE.skills.push({skill: Skills.DISABLE, level: 12});
Races.DROWZEE.skills.push({skill: Skills.CONFUSION, level: 17});
Races.DROWZEE.skills.push({skill: Skills.HEADBUTT, level: 24});
Races.DROWZEE.skills.push({skill: Skills.POISON_GAS, level: 29});
Races.DROWZEE.skills.push({skill: Skills.PSYCHIC, level: 32});
Races.DROWZEE.skills.push({skill: Skills.MEDITATE, level: 37});
Races.HYPNO.skills.push({skill: Skills.POISON_GAS, level: 33});
Races.HYPNO.skills.push({skill: Skills.PSYCHIC, level: 37});
Races.HYPNO.skills.push({skill: Skills.MEDITATE, level: 43});
Races.KRABBY.skills.push({skill: Skills.BUBBLE, level: 1});
Races.KRABBY.skills.push({skill: Skills.LEER, level: 1});
Races.KRABBY.skills.push({skill: Skills.VICE_GRIP, level: 20});
Races.KRABBY.skills.push({skill: Skills.GUILLOTINE, level: 25});
Races.KRABBY.skills.push({skill: Skills.STOMP, level: 30});
Races.KRABBY.skills.push({skill: Skills.CRABHAMMER, level: 35});
Races.KRABBY.skills.push({skill: Skills.HARDEN, level: 40});
Races.KINGLER.skills.push({skill: Skills.STOMP, level: 34});
Races.KINGLER.skills.push({skill: Skills.CRABHAMMER, level: 42});
Races.KINGLER.skills.push({skill: Skills.HARDEN, level: 49});
Races.VOLTORB.skills.push({skill: Skills.TACKLE, level: 1});
Races.VOLTORB.skills.push({skill: Skills.SCREECH, level: 1});
Races.VOLTORB.skills.push({skill: Skills.SONIC_BOOM, level: 17});
Races.VOLTORB.skills.push({skill: Skills.SELF_DESTRUCT, level: 22});
Races.VOLTORB.skills.push({skill: Skills.LIGHT_SCREEN, level: 29});
Races.VOLTORB.skills.push({skill: Skills.SWIFT, level: 36});
Races.VOLTORB.skills.push({skill: Skills.EXPLOSION, level: 43});
Races.ELECTRODE.skills.push({skill: Skills.SWIFT, level: 40});
Races.ELECTRODE.skills.push({skill: Skills.EXPLOSION, level: 50});
Races.EXEGGCUTE.skills.push({skill: Skills.BARRAGE, level: 1});
Races.EXEGGCUTE.skills.push({skill: Skills.HYPNOSIS, level: 1});
Races.EXEGGCUTE.skills.push({skill: Skills.REFLECT, level: 25});
Races.EXEGGCUTE.skills.push({skill: Skills.LEECH_SEED, level: 28});
Races.EXEGGCUTE.skills.push({skill: Skills.STUN_SPORE, level: 32});
Races.EXEGGCUTE.skills.push({skill: Skills.POISON_POWDER, level: 37});
Races.EXEGGCUTE.skills.push({skill: Skills.SOLAR_BEAM, level: 42});
Races.EXEGGCUTE.skills.push({skill: Skills.SLEEP_POWDER, level: 48});
Races.EXEGGUTOR.skills.push({skill: Skills.STOMP, level: 28});
Races.CUBONE.skills.push({skill: Skills.BONE_CLUB, level: 1});
Races.CUBONE.skills.push({skill: Skills.GROWL, level: 1});
Races.CUBONE.skills.push({skill: Skills.LEER, level: 25});
Races.CUBONE.skills.push({skill: Skills.FOCUS_ENERGY, level: 31});
Races.CUBONE.skills.push({skill: Skills.THRASH, level: 38});
Races.CUBONE.skills.push({skill: Skills.BONEMERANG, level: 43});
Races.CUBONE.skills.push({skill: Skills.RAGE, level: 46});
Races.MAROWAK.skills.push({skill: Skills.FOCUS_ENERGY, level: 33});
Races.MAROWAK.skills.push({skill: Skills.THRASH, level: 41});
Races.MAROWAK.skills.push({skill: Skills.BONEMERANG, level: 48});
Races.MAROWAK.skills.push({skill: Skills.RAGE, level: 55});
Races.HITMONLEE.skills.push({skill: Skills.DOUBLE_KICK, level: 1});
Races.HITMONLEE.skills.push({skill: Skills.MEDITATE, level: 1});
Races.HITMONLEE.skills.push({skill: Skills.ROLLING_KICK, level: 33});
Races.HITMONLEE.skills.push({skill: Skills.JUMP_KICK, level: 38});
Races.HITMONLEE.skills.push({skill: Skills.FOCUS_ENERGY, level: 43});
Races.HITMONLEE.skills.push({skill: Skills.HIGH_JUMP_KICK, level: 48});
Races.HITMONLEE.skills.push({skill: Skills.MEGA_KICK, level: 53});
Races.HITMONCHAN.skills.push({skill: Skills.COMET_PUNCH, level: 1});
Races.HITMONCHAN.skills.push({skill: Skills.AGILITY, level: 1});
Races.HITMONCHAN.skills.push({skill: Skills.FIRE_PUNCH, level: 33});
Races.HITMONCHAN.skills.push({skill: Skills.ICE_PUNCH, level: 38});
Races.HITMONCHAN.skills.push({skill: Skills.THUNDER_PUNCH, level: 43});
Races.HITMONCHAN.skills.push({skill: Skills.MEGA_PUNCH, level: 48});
Races.HITMONCHAN.skills.push({skill: Skills.COUNTER, level: 53});
Races.LICKITUNG.skills.push({skill: Skills.WRAP, level: 1});
Races.LICKITUNG.skills.push({skill: Skills.SUPERSONIC, level: 1});
Races.LICKITUNG.skills.push({skill: Skills.STOMP, level: 7});
Races.LICKITUNG.skills.push({skill: Skills.DISABLE, level: 15});
Races.LICKITUNG.skills.push({skill: Skills.DEFENSE_CURL, level: 23});
Races.LICKITUNG.skills.push({skill: Skills.SLAM, level: 31});
Races.LICKITUNG.skills.push({skill: Skills.SCREECH, level: 39});
Races.KOFFING.skills.push({skill: Skills.TACKLE, level: 1});
Races.KOFFING.skills.push({skill: Skills.SMOG, level: 1});
Races.KOFFING.skills.push({skill: Skills.SLUDGE, level: 32});
Races.KOFFING.skills.push({skill: Skills.SMOKESCREEN, level: 37});
Races.KOFFING.skills.push({skill: Skills.SELF_DESTRUCT, level: 40});
Races.KOFFING.skills.push({skill: Skills.HAZE, level: 45});
Races.KOFFING.skills.push({skill: Skills.EXPLOSION, level: 48});
Races.WEEZING.skills.push({skill: Skills.SMOKESCREEN, level: 39});
Races.WEEZING.skills.push({skill: Skills.SELF_DESTRUCT, level: 43});
Races.WEEZING.skills.push({skill: Skills.HAZE, level: 49});
Races.WEEZING.skills.push({skill: Skills.EXPLOSION, level: 53});
Races.RHYHORN.skills.push({skill: Skills.HORN_ATTACK, level: 1});
Races.RHYHORN.skills.push({skill: Skills.STOMP, level: 30});
Races.RHYHORN.skills.push({skill: Skills.TAIL_WHIP, level: 35});
Races.RHYHORN.skills.push({skill: Skills.FURY_ATTACK, level: 40});
Races.RHYHORN.skills.push({skill: Skills.HORN_DRILL, level: 45});
Races.RHYHORN.skills.push({skill: Skills.LEER, level: 50});
Races.RHYHORN.skills.push({skill: Skills.TAKE_DOWN, level: 55});
Races.RHYDON.skills.push({skill: Skills.HORN_DRILL, level: 48});
Races.RHYDON.skills.push({skill: Skills.LEER, level: 55});
Races.RHYDON.skills.push({skill: Skills.TAKE_DOWN, level: 64});
Races.CHANSEY.skills.push({skill: Skills.POUND, level: 1});
Races.CHANSEY.skills.push({skill: Skills.DOUBLE_SLAP, level: 1});
Races.CHANSEY.skills.push({skill: Skills.SING, level: 24});
Races.CHANSEY.skills.push({skill: Skills.GROWL, level: 30});
Races.CHANSEY.skills.push({skill: Skills.MINIMIZE, level: 38});
Races.CHANSEY.skills.push({skill: Skills.DEFENSE_CURL, level: 44});
Races.CHANSEY.skills.push({skill: Skills.LIGHT_SCREEN, level: 48});
Races.CHANSEY.skills.push({skill: Skills.DOUBLE_EDGE, level: 54});
Races.TANGELA.skills.push({skill: Skills.CONSTRICT, level: 1});
Races.TANGELA.skills.push({skill: Skills.BIND, level: 1});
Races.TANGELA.skills.push({skill: Skills.ABSORB, level: 29});
Races.TANGELA.skills.push({skill: Skills.POISON_POWDER, level: 32});
Races.TANGELA.skills.push({skill: Skills.STUN_SPORE, level: 36});
Races.TANGELA.skills.push({skill: Skills.SLEEP_POWDER, level: 39});
Races.TANGELA.skills.push({skill: Skills.SLAM, level: 45});
Races.TANGELA.skills.push({skill: Skills.GROWTH, level: 49});
Races.KANGASKHAN.skills.push({skill: Skills.COMET_PUNCH, level: 1});
Races.KANGASKHAN.skills.push({skill: Skills.RAGE, level: 1});
Races.KANGASKHAN.skills.push({skill: Skills.BITE, level: 26});
Races.KANGASKHAN.skills.push({skill: Skills.TAIL_WHIP, level: 31});
Races.KANGASKHAN.skills.push({skill: Skills.MEGA_PUNCH, level: 36});
Races.KANGASKHAN.skills.push({skill: Skills.LEER, level: 41});
Races.KANGASKHAN.skills.push({skill: Skills.DIZZY_PUNCH, level: 46});
Races.HORSEA.skills.push({skill: Skills.BUBBLE, level: 1});
Races.HORSEA.skills.push({skill: Skills.SMOKESCREEN, level: 19});
Races.HORSEA.skills.push({skill: Skills.LEER, level: 24});
Races.HORSEA.skills.push({skill: Skills.WATER_GUN, level: 30});
Races.HORSEA.skills.push({skill: Skills.AGILITY, level: 37});
Races.HORSEA.skills.push({skill: Skills.HYDRO_PUMP, level: 45});
Races.SEADRA.skills.push({skill: Skills.AGILITY, level: 41});
Races.SEADRA.skills.push({skill: Skills.HYDRO_PUMP, level: 52});
Races.GOLDEEN.skills.push({skill: Skills.PECK, level: 1});
Races.GOLDEEN.skills.push({skill: Skills.TAIL_WHIP, level: 1});
Races.GOLDEEN.skills.push({skill: Skills.SUPERSONIC, level: 19});
Races.GOLDEEN.skills.push({skill: Skills.HORN_ATTACK, level: 24});
Races.GOLDEEN.skills.push({skill: Skills.FURY_ATTACK, level: 30});
Races.GOLDEEN.skills.push({skill: Skills.WATERFALL, level: 37});
Races.GOLDEEN.skills.push({skill: Skills.HORN_DRILL, level: 45});
Races.GOLDEEN.skills.push({skill: Skills.AGILITY, level: 54});
Races.SEAKING.skills.push({skill: Skills.WATERFALL, level: 39});
Races.SEAKING.skills.push({skill: Skills.HORN_DRILL, level: 48});
Races.SEAKING.skills.push({skill: Skills.AGILITY, level: 54});
Races.STARYU.skills.push({skill: Skills.TACKLE, level: 1});
Races.STARYU.skills.push({skill: Skills.WATER_GUN, level: 17});
Races.STARYU.skills.push({skill: Skills.HARDEN, level: 22});
Races.STARYU.skills.push({skill: Skills.RECOVER, level: 27});
Races.STARYU.skills.push({skill: Skills.SWIFT, level: 32});
Races.STARYU.skills.push({skill: Skills.MINIMIZE, level: 37});
Races.STARYU.skills.push({skill: Skills.LIGHT_SCREEN, level: 42});
Races.STARYU.skills.push({skill: Skills.HYDRO_PUMP, level: 47});
Races.MR_MIME.skills.push({skill: Skills.CONFUSION, level: 1});
Races.MR_MIME.skills.push({skill: Skills.BARRIER, level: 1});
Races.MR_MIME.skills.push({skill: Skills.LIGHT_SCREEN, level: 23});
Races.MR_MIME.skills.push({skill: Skills.DOUBLE_SLAP, level: 31});
Races.MR_MIME.skills.push({skill: Skills.MEDITATE, level: 39});
Races.MR_MIME.skills.push({skill: Skills.SUBSTITUTE, level: 47});
Races.SCYTHER.skills.push({skill: Skills.QUICK_ATTACK, level: 1});
Races.SCYTHER.skills.push({skill: Skills.LEER, level: 17});
Races.SCYTHER.skills.push({skill: Skills.FOCUS_ENERGY, level: 20});
Races.SCYTHER.skills.push({skill: Skills.DOUBLE_TEAM, level: 24});
Races.SCYTHER.skills.push({skill: Skills.SLASH, level: 29});
Races.SCYTHER.skills.push({skill: Skills.SWORDS_DANCE, level: 35});
Races.SCYTHER.skills.push({skill: Skills.AGILITY, level: 42});
Races.JYNX.skills.push({skill: Skills.POUND, level: 1});
Races.JYNX.skills.push({skill: Skills.LOVELY_KISS, level: 1});
Races.JYNX.skills.push({skill: Skills.SING, level: 15});
Races.JYNX.skills.push({skill: Skills.DOUBLE_SLAP, level: 23});
Races.JYNX.skills.push({skill: Skills.ICE_PUNCH, level: 31});
Races.JYNX.skills.push({skill: Skills.MEDITATE, level: 39});
Races.JYNX.skills.push({skill: Skills.BLIZZARD, level: 47});
Races.ELECTABUZZ.skills.push({skill: Skills.QUICK_ATTACK, level: 1});
Races.ELECTABUZZ.skills.push({skill: Skills.LEER, level: 1});
Races.ELECTABUZZ.skills.push({skill: Skills.THUNDER_SHOCK, level: 34});
Races.ELECTABUZZ.skills.push({skill: Skills.SCREECH, level: 37});
Races.ELECTABUZZ.skills.push({skill: Skills.THUNDER_PUNCH, level: 42});
Races.ELECTABUZZ.skills.push({skill: Skills.LIGHT_SCREEN, level: 49});
Races.ELECTABUZZ.skills.push({skill: Skills.THUNDER, level: 54});
Races.MAGMAR.skills.push({skill: Skills.EMBER, level: 1});
Races.MAGMAR.skills.push({skill: Skills.LEER, level: 36});
Races.MAGMAR.skills.push({skill: Skills.CONFUSE_RAY, level: 39});
Races.MAGMAR.skills.push({skill: Skills.FIRE_PUNCH, level: 43});
Races.MAGMAR.skills.push({skill: Skills.SMOKESCREEN, level: 48});
Races.MAGMAR.skills.push({skill: Skills.SMOG, level: 52});
Races.MAGMAR.skills.push({skill: Skills.FLAMETHROWER, level: 55});
Races.PINSIR.skills.push({skill: Skills.VICE_GRIP, level: 1});
Races.PINSIR.skills.push({skill: Skills.SEISMIC_TOSS, level: 25});
Races.PINSIR.skills.push({skill: Skills.GUILLOTINE, level: 30});
Races.PINSIR.skills.push({skill: Skills.FOCUS_ENERGY, level: 36});
Races.PINSIR.skills.push({skill: Skills.HARDEN, level: 43});
Races.PINSIR.skills.push({skill: Skills.SLASH, level: 49});
Races.PINSIR.skills.push({skill: Skills.SWORDS_DANCE, level: 54});
Races.TAUROS.skills.push({skill: Skills.TACKLE, level: 1});
Races.TAUROS.skills.push({skill: Skills.STOMP, level: 21});
Races.TAUROS.skills.push({skill: Skills.TAIL_WHIP, level: 28});
Races.TAUROS.skills.push({skill: Skills.LEER, level: 35});
Races.TAUROS.skills.push({skill: Skills.RAGE, level: 44});
Races.TAUROS.skills.push({skill: Skills.TAKE_DOWN, level: 51});
Races.MAGIKARP.skills.push({skill: Skills.SPLASH, level: 1});
Races.MAGIKARP.skills.push({skill: Skills.TACKLE, level: 15});
Races.GYARADOS.skills.push({skill: Skills.BITE, level: 20});
Races.GYARADOS.skills.push({skill: Skills.DRAGON_RAGE, level: 25});
Races.GYARADOS.skills.push({skill: Skills.LEER, level: 32});
Races.GYARADOS.skills.push({skill: Skills.HYDRO_PUMP, level: 41});
Races.GYARADOS.skills.push({skill: Skills.HYPER_BEAM, level: 52});
Races.LAPRAS.skills.push({skill: Skills.WATER_GUN, level: 1});
Races.LAPRAS.skills.push({skill: Skills.GROWL, level: 1});
Races.LAPRAS.skills.push({skill: Skills.SING, level: 16});
Races.LAPRAS.skills.push({skill: Skills.MIST, level: 20});
Races.LAPRAS.skills.push({skill: Skills.BODY_SLAM, level: 25});
Races.LAPRAS.skills.push({skill: Skills.CONFUSE_RAY, level: 31});
Races.LAPRAS.skills.push({skill: Skills.ICE_BEAM, level: 38});
Races.LAPRAS.skills.push({skill: Skills.HYDRO_PUMP, level: 46});
Races.DITTO.skills.push({skill: Skills.TRANSFORM, level: 1});
Races.EEVEE.skills.push({skill: Skills.TACKLE, level: 1});
Races.EEVEE.skills.push({skill: Skills.SAND_ATTACK, level: 1});
Races.EEVEE.skills.push({skill: Skills.QUICK_ATTACK, level: 27});
Races.EEVEE.skills.push({skill: Skills.TAIL_WHIP, level: 31});
Races.EEVEE.skills.push({skill: Skills.BITE, level: 37});
Races.EEVEE.skills.push({skill: Skills.TAKE_DOWN, level: 45});
Races.VAPOREON.skills.push({skill: Skills.QUICK_ATTACK, level: 27});
Races.VAPOREON.skills.push({skill: Skills.WATER_GUN, level: 31});
Races.VAPOREON.skills.push({skill: Skills.TAIL_WHIP, level: 37});
Races.VAPOREON.skills.push({skill: Skills.BITE, level: 40});
Races.VAPOREON.skills.push({skill: Skills.ACID_ARMOR, level: 42});
Races.VAPOREON.skills.push({skill: Skills.HAZE, level: 44});
Races.VAPOREON.skills.push({skill: Skills.MIST, level: 48});
Races.VAPOREON.skills.push({skill: Skills.HYDRO_PUMP, level: 54});
Races.JOLTEON.skills.push({skill: Skills.QUICK_ATTACK, level: 27});
Races.JOLTEON.skills.push({skill: Skills.THUNDER_SHOCK, level: 31});
Races.JOLTEON.skills.push({skill: Skills.TAIL_WHIP, level: 37});
Races.JOLTEON.skills.push({skill: Skills.THUNDER_WAVE, level: 40});
Races.JOLTEON.skills.push({skill: Skills.DOUBLE_KICK, level: 42});
Races.JOLTEON.skills.push({skill: Skills.AGILITY, level: 44});
Races.JOLTEON.skills.push({skill: Skills.PIN_MISSILE, level: 48});
Races.JOLTEON.skills.push({skill: Skills.THUNDER, level: 54});
Races.FLAREON.skills.push({skill: Skills.QUICK_ATTACK, level: 27});
Races.FLAREON.skills.push({skill: Skills.EMBER, level: 31});
Races.FLAREON.skills.push({skill: Skills.TAIL_WHIP, level: 37});
Races.FLAREON.skills.push({skill: Skills.BITE, level: 40});
Races.FLAREON.skills.push({skill: Skills.LEER, level: 42});
Races.FLAREON.skills.push({skill: Skills.FIRE_SPIN, level: 44});
Races.FLAREON.skills.push({skill: Skills.RAGE, level: 48});
Races.FLAREON.skills.push({skill: Skills.FLAMETHROWER, level: 54});
Races.PORYGON.skills.push({skill: Skills.TACKLE, level: 1});
Races.PORYGON.skills.push({skill: Skills.SHARPEN, level: 1});
Races.PORYGON.skills.push({skill: Skills.CONVERSION, level: 1});
Races.PORYGON.skills.push({skill: Skills.PSYBEAM, level: 23});
Races.PORYGON.skills.push({skill: Skills.RECOVER, level: 28});
Races.PORYGON.skills.push({skill: Skills.AGILITY, level: 35});
Races.PORYGON.skills.push({skill: Skills.TRI_ATTACK, level: 42});
Races.OMANYTE.skills.push({skill: Skills.WATER_GUN, level: 1});
Races.OMANYTE.skills.push({skill: Skills.WITHDRAW, level: 1});
Races.OMANYTE.skills.push({skill: Skills.HORN_ATTACK, level: 34});
Races.OMANYTE.skills.push({skill: Skills.LEER, level: 39});
Races.OMANYTE.skills.push({skill: Skills.SPIKE_CANNON, level: 46});
Races.OMANYTE.skills.push({skill: Skills.HYDRO_PUMP, level: 53});
Races.OMASTAR.skills.push({skill: Skills.SPIKE_CANNON, level: 44});
Races.OMASTAR.skills.push({skill: Skills.HYDRO_PUMP, level: 49});
Races.KABUTO.skills.push({skill: Skills.SCRATCH, level: 1});
Races.KABUTO.skills.push({skill: Skills.HARDEN, level: 1});
Races.KABUTO.skills.push({skill: Skills.ABSORB, level: 34});
Races.KABUTO.skills.push({skill: Skills.SLASH, level: 39});
Races.KABUTO.skills.push({skill: Skills.LEER, level: 44});
Races.KABUTO.skills.push({skill: Skills.HYDRO_PUMP, level: 49});
Races.KABUTOPS.skills.push({skill: Skills.LEER, level: 46});
Races.KABUTOPS.skills.push({skill: Skills.HYDRO_PUMP, level: 53});
Races.AERODACTYL.skills.push({skill: Skills.WING_ATTACK, level: 1});
Races.AERODACTYL.skills.push({skill: Skills.AGILITY, level: 1});
Races.AERODACTYL.skills.push({skill: Skills.SUPERSONIC, level: 33});
Races.AERODACTYL.skills.push({skill: Skills.BITE, level: 38});
Races.AERODACTYL.skills.push({skill: Skills.TAKE_DOWN, level: 45});
Races.AERODACTYL.skills.push({skill: Skills.HYPER_BEAM, level: 54});
Races.SNORLAX.skills.push({skill: Skills.HEADBUTT, level: 1});
Races.SNORLAX.skills.push({skill: Skills.AMNESIA, level: 1});
Races.SNORLAX.skills.push({skill: Skills.REST, level: 1});
Races.SNORLAX.skills.push({skill: Skills.BODY_SLAM, level: 35});
Races.SNORLAX.skills.push({skill: Skills.HARDEN, level: 41});
Races.SNORLAX.skills.push({skill: Skills.DOUBLE_EDGE, level: 48});
Races.SNORLAX.skills.push({skill: Skills.HYPER_BEAM, level: 56});
Races.ARTICUNO.skills.push({skill: Skills.PECK, level: 1});
Races.ARTICUNO.skills.push({skill: Skills.ICE_BEAM, level: 1});
Races.ARTICUNO.skills.push({skill: Skills.BLIZZARD, level: 51});
Races.ARTICUNO.skills.push({skill: Skills.AGILITY, level: 55});
Races.ARTICUNO.skills.push({skill: Skills.MIST, level: 60});
Races.ZAPDOS.skills.push({skill: Skills.THUNDER_SHOCK, level: 1});
Races.ZAPDOS.skills.push({skill: Skills.DRILL_PECK, level: 1});
Races.ZAPDOS.skills.push({skill: Skills.THUNDER, level: 51});
Races.ZAPDOS.skills.push({skill: Skills.AGILITY, level: 55});
Races.ZAPDOS.skills.push({skill: Skills.LIGHT_SCREEN, level: 60});
Races.MOLTRES.skills.push({skill: Skills.PECK, level: 1});
Races.MOLTRES.skills.push({skill: Skills.FIRE_SPIN, level: 1});
Races.MOLTRES.skills.push({skill: Skills.LEER, level: 51});
Races.MOLTRES.skills.push({skill: Skills.AGILITY, level: 55});
Races.MOLTRES.skills.push({skill: Skills.SKY_ATTACK, level: 60});
Races.DRATINI.skills.push({skill: Skills.WRAP, level: 1});
Races.DRATINI.skills.push({skill: Skills.LEER, level: 1});
Races.DRATINI.skills.push({skill: Skills.THUNDER_WAVE, level: 10});
Races.DRATINI.skills.push({skill: Skills.AGILITY, level: 20});
Races.DRATINI.skills.push({skill: Skills.SLAM, level: 30});
Races.DRATINI.skills.push({skill: Skills.DRAGON_RAGE, level: 40});
Races.DRATINI.skills.push({skill: Skills.HYPER_BEAM, level: 50});
Races.DRAGONAIR.skills.push({skill: Skills.SLAM, level: 35});
Races.DRAGONAIR.skills.push({skill: Skills.DRAGON_RAGE, level: 45});
Races.DRAGONAIR.skills.push({skill: Skills.HYPER_BEAM, level: 55});
Races.DRAGONITE.skills.push({skill: Skills.HYPER_BEAM, level: 60});
Races.MEWTWO.skills.push({skill: Skills.CONFUSION, level: 1});
Races.MEWTWO.skills.push({skill: Skills.DISABLE, level: 1});
Races.MEWTWO.skills.push({skill: Skills.SWIFT, level: 1});
Races.MEWTWO.skills.push({skill: Skills.BARRIER, level: 63});
Races.MEWTWO.skills.push({skill: Skills.PSYCHIC, level: 66});
Races.MEWTWO.skills.push({skill: Skills.RECOVER, level: 70});
Races.MEWTWO.skills.push({skill: Skills.MIST, level: 75});
Races.MEWTWO.skills.push({skill: Skills.AMNESIA, level: 81});
Races.MEW.skills.push({skill: Skills.POUND, level: 1});
Races.MEW.skills.push({skill: Skills.TRANSFORM, level: 10});
Races.MEW.skills.push({skill: Skills.MEGA_PUNCH, level: 20});
Races.MEW.skills.push({skill: Skills.METRONOME, level: 30});
Races.MEW.skills.push({skill: Skills.PSYCHIC, level: 40});

module.exports = Races;
