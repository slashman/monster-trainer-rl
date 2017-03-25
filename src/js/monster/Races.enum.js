var Skills = require('./Skills.enum');
var Types = require('./Types.enum');
var Race = require('./Race.class');

var Races = {
BULBASAUR: new Race('Bulbasaur', 'b', 85, 255, 85, true, Types.GRASS, Types.POISON, 45, 49, 49, 65, 65, 45, 64),
IVYSAUR: new Race('Ivysaur', 'i', 85, 255, 85, true, Types.GRASS, Types.POISON, 60, 62, 63, 80, 80, 60, 141),
VENUSAUR: new Race('Venusaur', 'V', 85, 255, 85, true, Types.GRASS, Types.POISON, 80, 82, 83, 100, 100, 80, 208),
CHARMANDER: new Race('Charmander', 'c', 255, 85, 85, true, Types.FIRE, null, 39, 52, 43, 60, 50, 65, 65),
CHARMELEON: new Race('Charmeleon', 'c', 255, 85, 85, true, Types.FIRE, null, 58, 64, 58, 80, 65, 80, 142),
CHARIZARD: new Race('Charizard', 'C', 255, 85, 85, true, Types.FIRE, Types.FLYING, 78, 84, 78, 109, 85, 100, 209),
SQUIRTLE: new Race('Squirtle', 's', 85, 85, 255, true, Types.WATER, null, 44, 48, 65, 50, 64, 43, 66),
WARTORTLE: new Race('Wartortle', 'w', 85, 85, 255, true, Types.WATER, null, 59, 63, 80, 65, 80, 58, 143),
BLASTOISE: new Race('Blastoise', 'B', 85, 85, 255, true, Types.WATER, null, 79, 83, 100, 85, 105, 78, 210),
CATERPIE: new Race('Caterpie', 'c', 85, 255, 85, false, Types.BUG, null, 45, 30, 35, 20, 20, 45, 53),
METAPOD: new Race('Metapod', 'm', 85, 255, 85, false, Types.BUG, null, 50, 20, 55, 25, 25, 30, 72),
BUTERFREE: new Race('Butterfree', 'b', 255, 255, 255, false, Types.BUG, Types.FLYING, 60, 45, 50, 80, 80, 70, 160),
WEEDLE: new Race('Weedle', 'w', 170, 85, 0, false, Types.BUG, Types.POISON, 40, 35, 30, 20, 20, 50, 52),
KAKUNA: new Race('Kakuna', 'k', 255, 255, 85, false, Types.BUG, Types.POISON, 45, 25, 50, 25, 25, 35, 71),
BEEDRILL: new Race('Beedrill', 'b', 255, 255, 85, true, Types.BUG, Types.POISON, 65, 80, 40, 45, 80, 75, 159),
PIDGEY: new Race('Pidgey', 'p', 170, 85, 0, false, Types.NORMAL, Types.FLYING, 40, 45, 40, 35, 35, 56, 55),
PIDGEOTTO: new Race('Pidgeotto', 'p', 170, 85, 0, true, Types.NORMAL, Types.FLYING, 63, 60, 55, 50, 50, 71, 113),
PIDGEOT: new Race('Pidgeot', 'P', 170, 85, 0, true, Types.NORMAL, Types.FLYING, 83, 80, 75, 70, 70, 91, 172),
RATTATA: new Race('Rattata', 'r', 170, 0, 170, true, Types.NORMAL, null, 30, 56, 35, 25, 35, 72, 57),
RATICATE: new Race('Raticate', 'R', 170, 85, 0, true, Types.NORMAL, null, 55, 81, 60, 50, 70, 97, 116),
SPEAROW: new Race('Spearow', 's', 170, 85, 0, true, Types.NORMAL, Types.FLYING, 40, 60, 30, 31, 31, 70, 58),
FEAROW: new Race('Fearow', 'F', 170, 85, 0, true, Types.NORMAL, Types.FLYING, 65, 90, 65, 61, 61, 100, 162),
EKANS: new Race('Ekans', 'e', 170, 0, 170, true, Types.POISON, null, 30, 60, 44, 40, 54, 55, 62),
ARBOK: new Race('Arbok', 'a', 170, 0, 170, true, Types.POISON, null, 60, 85, 69, 65, 79, 80, 147),
PIKACHU: new Race('Pikachu', 'p', 255, 255, 85, true, Types.ELECTRIC, null, 35, 55, 30, 50, 40, 90, 82),
RAICHU: new Race('Raichu', 'R', 255, 255, 85, true, Types.ELECTRIC, null, 60, 90, 55, 90, 80, 100, 122),
SANDSHREW: new Race('Sandshrew', 's', 255, 255, 85, true, Types.GROUND, null, 50, 75, 85, 20, 30, 40, 93),
SANDSLASH: new Race('Sandslash', 'S', 255, 255, 85, true, Types.GROUND, null, 75, 100, 110, 45, 55, 65, 163),
NIDORAN_F: new Race('Nidoran♀', 'n', 85, 85, 255, false, Types.POISON, null, 55, 47, 52, 40, 40, 41, 59),
NIDORINA: new Race('Nidorina', 'n', 85, 85, 255, true, Types.POISON, null, 70, 62, 67, 55, 55, 56, 117),
NIDOQUEEN: new Race('Nidoqueen', 'N', 85, 85, 255, true, Types.POISON, Types.GROUND, 90, 82, 87, 75, 85, 76, 194),
NIDORAN_M: new Race('Nidoran♂', 'n', 170, 0, 170, false, Types.POISON, null, 46, 57, 40, 40, 40, 50, 60),
NIDORINO: new Race('Nidorino', 'n', 170, 0, 170, true, Types.POISON, null, 61, 72, 57, 55, 55, 65, 118),
NIDOKING: new Race('Nidoking', 'N', 170, 0, 170, true, Types.POISON, Types.GROUND, 81, 92, 77, 85, 75, 85, 195),
CLEFAIRY: new Race('Clefairy', 'c', 255, 85, 255, false, Types.NORMAL, null, 70, 45, 48, 60, 65, 35, 68),
CLEFABLE: new Race('Clefable', 'C', 255, 85, 255, false, Types.NORMAL, null, 95, 70, 73, 85, 90, 60, 129),
VULPIX: new Race('Vulpix', 'v', 170, 85, 0, false, Types.FIRE, null, 38, 41, 40, 50, 65, 65, 63),
NINETALES: new Race('Ninetales', 'N', 255, 255, 85, true, Types.FIRE, null, 73, 76, 75, 81, 100, 100, 178),
JIGGLYPUFF: new Race('Jigglypuff', 'j', 255, 85, 255, false, Types.NORMAL, null, 115, 45, 20, 45, 25, 20, 76),
WIGGLYTUFF: new Race('Wigglytuff', 'w', 255, 85, 255, true, Types.NORMAL, null, 140, 70, 45, 75, 50, 45, 109),
ZUBAT: new Race('Zubat', 'z', 170, 0, 170, false, Types.POISON, Types.FLYING, 40, 45, 35, 30, 40, 55, 54),
GOLBAT: new Race('Golbat', 'G', 170, 0, 170, true, Types.POISON, Types.FLYING, 75, 80, 70, 65, 75, 90, 171),
ODDISH: new Race('Oddish', 'o', 85, 85, 255, false, Types.GRASS, Types.POISON, 45, 50, 55, 75, 65, 30, 78),
GLOOM: new Race('Gloom', 'g', 85, 85, 255, false, Types.GRASS, Types.POISON, 60, 65, 70, 85, 75, 40, 132),
VILEPLUME: new Race('Vileplume', 'V', 255, 85, 85, false, Types.GRASS, Types.POISON, 75, 80, 85, 100, 90, 50, 184),
PARAS: new Race('Paras', 'p', 255, 85, 85, false, Types.BUG, Types.GRASS, 35, 70, 55, 45, 55, 25, 70),
PARASECT: new Race('Parasect', 'P', 255, 85, 85, true, Types.BUG, Types.GRASS, 60, 95, 80, 60, 80, 30, 128),
VENONAT: new Race('Venonat', 'v', 170, 0, 170, true, Types.BUG, Types.POISON, 60, 55, 50, 40, 55, 45, 75),
VENOMOTH: new Race('Venomoth', 'v', 170, 0, 170, true, Types.BUG, Types.POISON, 70, 65, 60, 90, 75, 90, 138),
DIGLETT: new Race('Diglett', 'd', 170, 85, 0, true, Types.GROUND, null, 10, 55, 25, 35, 45, 95, 81),
DUGTRIO: new Race('Dugtrio', 'd', 170, 85, 0, true, Types.GROUND, null, 35, 80, 50, 50, 70, 120, 153),
MEOWTH: new Race('Meowth', 'm', 255, 255, 85, true, Types.NORMAL, null, 40, 45, 35, 40, 40, 90, 69),
PERSIAN: new Race('Persian', 'p', 255, 255, 85, true, Types.NORMAL, null, 65, 70, 60, 65, 65, 115, 148),
PSYDUCK: new Race('Psyduck', 'p', 255, 255, 85, false, Types.WATER, null, 50, 52, 48, 65, 50, 55, 80),
GOLDUCK: new Race('Golduck', 'g', 85, 85, 255, true, Types.WATER, null, 80, 82, 78, 95, 80, 85, 174),
MANKEY: new Race('Mankey', 'm', 170, 85, 0, true, Types.FIGHTING, null, 40, 80, 35, 35, 45, 70, 74),
PRIMEAPE: new Race('Primeape', 'p', 170, 85, 0, true, Types.FIGHTING, null, 65, 105, 60, 60, 70, 95, 149),
GROWLITHE: new Race('Growlithe', 'g', 170, 85, 0, true, Types.FIRE, null, 55, 70, 45, 70, 50, 60, 91),
ARCANINE: new Race('Arcanine', 'A', 170, 85, 0, true, Types.FIRE, null, 90, 110, 80, 100, 80, 95, 213),
POLIWAG: new Race('Poliwag', 'p', 85, 85, 255, false, Types.WATER, null, 40, 50, 40, 40, 40, 90, 77),
POLIWHIRL: new Race('Poliwhirl', 'p', 85, 85, 255, true, Types.WATER, null, 65, 65, 65, 50, 50, 90, 131),
POLIWRATH: new Race('Poliwrath', 'P', 85, 85, 255, true, Types.WATER, Types.FIGHTING, 90, 85, 95, 70, 90, 70, 185),
ABRA: new Race('Abra', 'a', 170, 85, 0, false, Types.PSYCHIC, null, 25, 20, 15, 105, 55, 90, 73),
KADABRA: new Race('Kadabra', 'k', 170, 85, 0, true, Types.PSYCHIC, null, 40, 35, 30, 120, 70, 105, 145),
ALAKAZAM: new Race('Alakazam', 'A', 170, 85, 0, true, Types.PSYCHIC, null, 55, 50, 45, 135, 85, 120, 186),
MACHOP: new Race('Machop', 'm', 170, 170, 170, true, Types.FIGHTING, null, 70, 80, 50, 35, 35, 35, 88),
MACHOKE: new Race('Machoke', 'm', 170, 170, 170, true, Types.FIGHTING, null, 80, 100, 70, 50, 60, 45, 146),
MACHAMP: new Race('Machamp', 'M', 170, 170, 170, true, Types.FIGHTING, null, 90, 130, 80, 65, 85, 55, 193),
BELLSPROUT: new Race('Bellsprout', 'b', 85, 255, 85, false, Types.GRASS, Types.POISON, 50, 75, 35, 70, 30, 40, 84),
WEEPINBELL: new Race('Weepinbell', 'w', 85, 255, 85, false, Types.GRASS, Types.POISON, 65, 90, 50, 85, 45, 55, 151),
VICTREEBEL: new Race('Victreebel', 'V', 85, 255, 85, true, Types.GRASS, Types.POISON, 80, 105, 65, 100, 60, 70, 191),
TENTACOOL: new Race('Tentacool', 't', 85, 85, 255, true, Types.WATER, Types.POISON, 40, 40, 35, 50, 100, 70, 105),
TENTACRUEL: new Race('Tentacruel', 't', 85, 85, 255, true, Types.WATER, Types.POISON, 80, 70, 65, 80, 120, 100, 205),
GEODUDE: new Race('Geodude', 'g', 170, 85, 0, true, Types.ROCK, Types.GROUND, 40, 80, 100, 30, 30, 20, 86),
GRAVELER: new Race('Graveler', 'G', 170, 85, 0, true, Types.ROCK, Types.GROUND, 55, 95, 115, 45, 45, 35, 134),
GOLEM: new Race('Golem', 'G', 170, 85, 0, true, Types.ROCK, Types.GROUND, 80, 110, 130, 55, 65, 45, 177),
PONYTA: new Race('Ponyta', 'p', 255, 255, 85, false, Types.FIRE, null, 50, 85, 55, 65, 65, 90, 152),
RAPIDASH: new Race('Rapidash', 'R', 255, 255, 85, false, Types.FIRE, null, 65, 100, 70, 80, 80, 105, 192),
SLOWPOKE: new Race('Slowpoke', 's', 255, 85, 255, false, Types.WATER, Types.PSYCHIC, 90, 65, 65, 40, 40, 15, 99),
SLOWBRO: new Race('Slowbro', 's', 255, 85, 255, false, Types.WATER, Types.PSYCHIC, 95, 75, 110, 100, 80, 30, 164),
MAGNEMITE: new Race('Magnemite', 'm', 170, 170, 170, true, Types.ELECTRIC, Types.STEEL, 25, 35, 70, 95, 55, 45, 89),
MAGNETON: new Race('Magneton', 'm', 170, 170, 170, true, Types.ELECTRIC, Types.STEEL, 50, 60, 95, 120, 70, 70, 161),
FARFETCHD: new Race('Farfetch\'d', 'f', 170, 85, 0, true, Types.NORMAL, Types.FLYING, 52, 65, 55, 58, 62, 60, 94),
DODUO: new Race('Doduo', 'd', 170, 85, 0, true, Types.NORMAL, Types.FLYING, 35, 85, 45, 35, 35, 75, 96),
DODRIO: new Race('Dodrio', 'd', 170, 85, 0, true, Types.NORMAL, Types.FLYING, 60, 110, 70, 60, 60, 100, 158),
SEEL: new Race('Seel', 's', 255, 255, 255, false, Types.WATER, null, 65, 45, 55, 45, 70, 45, 100),
DEWGONG: new Race('Dewgong', 'd', 255, 255, 255, true, Types.WATER, Types.ICE, 90, 70, 80, 70, 95, 70, 176),
GRIMER: new Race('Grimer', 'g', 170, 0, 170, true, Types.POISON, null, 80, 80, 50, 40, 50, 25, 90),
MUK: new Race('Muk', 'm', 170, 0, 170, true, Types.POISON, null, 105, 105, 75, 65, 100, 50, 157),
SHELLDER: new Race('Shellder', 's', 170, 0, 170, false, Types.WATER, null, 30, 65, 100, 45, 25, 40, 97),
CLOYSTER: new Race('Cloyster', 'c', 170, 0, 170, true, Types.WATER, Types.ICE, 50, 90, 180, 85, 45, 70, 203),
GASTLY: new Race('Gastly', 'g', 170, 0, 170, true, Types.GHOST, Types.POISON, 30, 35, 30, 100, 35, 80, 95),
HAUNTER: new Race('Haunter', 'h', 170, 0, 170, true, Types.GHOST, Types.POISON, 45, 50, 45, 115, 55, 95, 126),
GENGAR: new Race('Gengar', 'G', 170, 0, 170, true, Types.GHOST, Types.POISON, 60, 65, 60, 130, 75, 110, 190),
ONIX: new Race('Onix', 'O', 170, 170, 170, true, Types.ROCK, Types.GROUND, 35, 45, 160, 30, 45, 70, 108),
DROWZEE: new Race('Drowzee', 'd', 255, 255, 85, false, Types.PSYCHIC, null, 60, 48, 45, 43, 90, 42, 102),
HYPNO: new Race('Hypno', 'h', 255, 255, 85, false, Types.PSYCHIC, null, 85, 73, 70, 73, 115, 67, 165),
KRABBY: new Race('Krabby', 'k', 255, 85, 85, false, Types.WATER, null, 30, 105, 90, 25, 25, 50, 115),
KINGLER: new Race('Kingler', 'K', 255, 85, 85, true, Types.WATER, null, 55, 130, 115, 50, 50, 75, 206),
VOLTORB: new Race('Voltorb', 'v', 255, 85, 85, true, Types.ELECTRIC, null, 40, 30, 50, 55, 55, 100, 103),
ELECTRODE: new Race('Electrode', 'E', 255, 85, 85, true, Types.ELECTRIC, null, 60, 50, 70, 80, 80, 140, 150),
EXEGGCUTE: new Race('Exeggcute', 'e', 255, 85, 255, true, Types.GRASS, Types.PSYCHIC, 60, 40, 80, 60, 45, 40, 98),
EXEGGUTOR: new Race('Exeggutor', 'E', 255, 255, 85, true, Types.GRASS, Types.PSYCHIC, 95, 95, 85, 125, 65, 55, 212),
CUBONE: new Race('Cubone', 'c', 170, 85, 0, true, Types.GROUND, null, 50, 50, 95, 40, 50, 35, 87),
MAROWAK: new Race('Marowak', 'm', 170, 85, 0, true, Types.GROUND, null, 60, 80, 110, 50, 80, 45, 124),
HITMONLEE: new Race('Hitmonlee', 'h', 170, 85, 0, true, Types.FIGHTING, null, 50, 120, 53, 35, 110, 87, 139),
HITMONCHAN: new Race('Hitmonchan', 'h', 170, 85, 0, true, Types.FIGHTING, null, 50, 105, 79, 35, 110, 76, 140),
LICKITUNG: new Race('Lickitung', 'l', 255, 85, 255, true, Types.NORMAL, null, 90, 55, 75, 60, 75, 30, 127),
KOFFING: new Race('Koffing', 'k', 170, 0, 170, true, Types.POISON, null, 40, 65, 95, 60, 45, 35, 114),
WEEZING: new Race('Weezing', 'w', 170, 0, 170, true, Types.POISON, null, 65, 90, 120, 85, 70, 60, 173),
RHYHORN: new Race('Rhyhorn', 'R', 170, 170, 170, true, Types.GROUND, Types.ROCK, 80, 85, 95, 30, 30, 25, 135),
RHYDON: new Race('Rhydon', 'R', 170, 170, 170, true, Types.GROUND, Types.ROCK, 105, 130, 120, 45, 45, 40, 204),
CHANSEY: new Race('Chansey', 'c', 255, 85, 255, false, Types.NORMAL, null, 250, 5, 5, 35, 105, 50, 255),
TANGELA: new Race('Tangela', 't', 85, 85, 255, false, Types.GRASS, null, 65, 55, 115, 100, 40, 60, 166),
KANGASKHAN: new Race('Kangaskhan', 'K', 170, 85, 0, true, Types.NORMAL, null, 105, 95, 80, 40, 80, 90, 175),
HORSEA: new Race('Horsea', 'h', 85, 85, 255, false, Types.WATER, null, 30, 40, 70, 70, 25, 60, 83),
SEADRA: new Race('Seadra', 's', 85, 85, 255, true, Types.WATER, null, 55, 65, 95, 95, 45, 85, 155),
GOLDEEN: new Race('Goldeen', 'g', 255, 85, 85, false, Types.WATER, null, 45, 67, 60, 35, 50, 63, 111),
SEAKING: new Race('Seaking', 'S', 255, 85, 85, true, Types.WATER, null, 80, 92, 65, 65, 80, 68, 170),
STARYU: new Race('Staryu', 's', 170, 85, 0, true, Types.WATER, null, 30, 45, 55, 70, 55, 85, 106),
STARMIE: new Race('Starmie', 's', 170, 0, 170, true, Types.WATER, Types.PSYCHIC, 60, 75, 85, 100, 85, 115, 207),
MR_MIME: new Race('Mr. Mime', 'm', 255, 85, 255, false, Types.PSYCHIC, null, 40, 45, 65, 100, 120, 90, 136),
SCYTHER: new Race('Scyther', 's', 85, 255, 85, true, Types.BUG, Types.FLYING, 70, 110, 80, 55, 80, 105, 187),
JYNX: new Race('Jynx', 'j', 255, 85, 85, false, Types.ICE, Types.PSYCHIC, 65, 50, 35, 115, 95, 95, 137),
ELECTABUZZ: new Race('Electabuzz', 'e', 255, 255, 85, true, Types.ELECTRIC, null, 65, 83, 57, 95, 85, 105, 156),
MAGMAR: new Race('Magmar', 'm', 255, 85, 85, true, Types.FIRE, null, 65, 95, 57, 100, 85, 93, 167),
PINSIR: new Race('Pinsir', 'p', 170, 85, 0, true, Types.BUG, null, 65, 125, 100, 55, 70, 85, 200),
TAUROS: new Race('Tauros', 'T', 170, 85, 0, true, Types.NORMAL, null, 75, 100, 95, 40, 70, 110, 211),
MAGIKARP: new Race('Magikarp', 'm', 255, 85, 85, false, Types.WATER, null, 20, 10, 55, 15, 20, 80, 20),
GYARADOS: new Race('Gyarados', 'G', 85, 85, 255, true, Types.WATER, Types.FLYING, 95, 125, 79, 60, 100, 81, 214),
LAPRAS: new Race('Lapras', 'L', 85, 85, 255, true, Types.WATER, Types.ICE, 130, 85, 80, 85, 95, 60, 219),
DITTO: new Race('Ditto', 'd', 170, 0, 170, true, Types.NORMAL, null, 48, 48, 48, 48, 48, 48, 61),
EEVEE: new Race('Eevee', 'e', 170, 85, 0, true, Types.NORMAL, null, 55, 55, 50, 45, 65, 55, 92),
VAPOREON: new Race('Vaporeon', 'v', 85, 85, 255, true, Types.WATER, null, 130, 65, 60, 110, 95, 65, 196),
JOLTEON: new Race('Jolteon', 'j', 255, 255, 85, true, Types.ELECTRIC, null, 65, 65, 60, 110, 95, 130, 197),
FLAREON: new Race('Flareon', 'f', 255, 85, 85, true, Types.FIRE, null, 65, 130, 60, 95, 110, 65, 198),
PORYGON: new Race('Porygon', 'p', 255, 85, 255, true, Types.NORMAL, null, 65, 60, 70, 85, 75, 40, 130),
OMANYTE: new Race('Omanyte', 'o', 85, 85, 255, true, Types.ROCK, Types.WATER, 35, 40, 100, 90, 55, 35, 120),
OMASTAR: new Race('Omastar', 'o', 85, 85, 255, true, Types.ROCK, Types.WATER, 70, 60, 125, 115, 70, 55, 199),
KABUTO: new Race('Kabuto', 'k', 170, 85, 0, true, Types.ROCK, Types.WATER, 30, 80, 90, 55, 45, 55, 119),
KABUTOPS: new Race('Kabutops', 'K', 170, 85, 0, true, Types.ROCK, Types.WATER, 60, 115, 105, 65, 70, 80, 201),
AERODACTYL: new Race('Aerodactyl', 'A', 170, 0, 170, true, Types.ROCK, Types.FLYING, 80, 105, 65, 60, 75, 130, 202),
SNORLAX: new Race('Snorlax', 'S', 85, 85, 85, false, Types.NORMAL, null, 160, 110, 65, 65, 110, 30, 154),
ARTICUNO: new Race('Articuno', 'A', 85, 85, 255, true, Types.ICE, Types.FLYING, 90, 85, 100, 95, 125, 85, 215),
ZAPDOS: new Race('Zapdos', 'Z', 255, 255, 85, true, Types.ELECTRIC, Types.FLYING, 90, 90, 85, 125, 90, 100, 216),
MOLTRES: new Race('Moltres', 'M', 255, 255, 85, true, Types.FIRE, Types.FLYING, 90, 100, 90, 125, 85, 90, 217),
DRATINI: new Race('Dratini', 'd', 85, 85, 255, true, Types.DRAGON, null, 41, 64, 45, 50, 50, 50, 67),
DRAGONAIR: new Race('Dragonair', 'd', 85, 85, 255, true, Types.DRAGON, null, 61, 84, 65, 70, 70, 70, 144),
DRAGONITE: new Race('Dragonite', 'D', 170, 85, 0, true, Types.DRAGON, Types.FLYING, 91, 134, 95, 100, 100, 80, 218),
MEWTWO: new Race('Mewtwo', 'M', 170, 0, 170, true, Types.PSYCHIC, null, 106, 110, 90, 154, 90, 130, 220),
MEW: new Race('Mew', 'm', 255, 85, 255, true, Types.PSYCHIC, null, 100, 100, 100, 100, 100, 100, 64)
};

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
Races.CLEFAIRY.skills.push({skill: Skills.POUND, level: 1});
Races.CLEFAIRY.skills.push({skill: Skills.GROWL, level: 1});
Races.CLEFAIRY.skills.push({skill: Skills.SING, level: 13});
Races.CLEFAIRY.skills.push({skill: Skills.DOUBLE_SLAP, level: 18});
Races.CLEFAIRY.skills.push({skill: Skills.MINIMIZE, level: 24});
Races.CLEFAIRY.skills.push({skill: Skills.METRONOME, level: 31});
Races.CLEFAIRY.skills.push({skill: Skills.DEFENSE_CURL, level: 39});
Races.CLEFAIRY.skills.push({skill: Skills.LIGHT_SCREEN, level: 48});
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

Races.BULBASAUR.setMainEvolution(16, Races.IVYSAUR); 
Races.IVYSAUR.setMainEvolution(32, Races.VENUSAUR); 

Races.CHARMANDER.setMainEvolution(16, Races.CHARMELEON); 
Races.CHARMELEON.setMainEvolution(36, Races.CHARIZARD); 

Races.SQUIRTLE.setMainEvolution(16, Races.WARTORTLE); 
Races.WARTORTLE.setMainEvolution(36, Races.BLASTOISE); 

Races.CATERPIE.setMainEvolution(7, Races.METAPOD); 
Races.METAPOD.setMainEvolution(10, Races.BUTERFREE); 

Races.WEEDLE.setMainEvolution(7, Races.KAKUNA); 
Races.KAKUNA.setMainEvolution(10, Races.BEEDRILL); 

Races.PIDGEY.setMainEvolution(18, Races.PIDGEOTTO); 
Races.PIDGEOTTO.setMainEvolution(36, Races.PIDGEOT); 

Races.RATTATA.setMainEvolution(20, Races.RATICATE); 

Races.SPEAROW.setMainEvolution(20, Races.FEAROW); 

Races.EKANS.setMainEvolution(22, Races.ARBOK); 



Races.SANDSHREW.setMainEvolution(22, Races.SANDSLASH); 

Races.NIDORAN_F.setMainEvolution(16, Races.NIDORINA); 


Races.NIDORAN_M.setMainEvolution(16, Races.NIDORINO); 








Races.ZUBAT.setMainEvolution(22, Races.GOLBAT); 

Races.ODDISH.setMainEvolution(21, Races.GLOOM); 


Races.PARAS.setMainEvolution(24, Races.PARASECT); 

Races.VENONAT.setMainEvolution(31, Races.VENOMOTH); 

Races.DIGLETT.setMainEvolution(26, Races.DUGTRIO); 

Races.MEOWTH.setMainEvolution(28, Races.PERSIAN); 

Races.PSYDUCK.setMainEvolution(33, Races.GOLDUCK); 

Races.MANKEY.setMainEvolution(28, Races.PRIMEAPE); 



Races.POLIWAG.setMainEvolution(25, Races.POLIWHIRL); 


Races.ABRA.setMainEvolution(16, Races.KADABRA); 


Races.MACHOP.setMainEvolution(28, Races.MACHOKE); 


Races.BELLSPROUT.setMainEvolution(21, Races.WEEPINBELL); 


Races.TENTACOOL.setMainEvolution(30, Races.TENTACRUEL); 

Races.GEODUDE.setMainEvolution(25, Races.GRAVELER); 


Races.PONYTA.setMainEvolution(40, Races.RAPIDASH); 

Races.SLOWPOKE.setMainEvolution(37, Races.SLOWBRO); 

Races.MAGNEMITE.setMainEvolution(30, Races.MAGNETON); 


Races.DODUO.setMainEvolution(31, Races.DODRIO); 

Races.SEEL.setMainEvolution(34, Races.DEWGONG); 

Races.GRIMER.setMainEvolution(38, Races.MUK); 



Races.GASTLY.setMainEvolution(25, Races.HAUNTER); 



Races.DROWZEE.setMainEvolution(26, Races.HYPNO); 

Races.KRABBY.setMainEvolution(28, Races.KINGLER); 

Races.VOLTORB.setMainEvolution(30, Races.ELECTRODE); 



Races.CUBONE.setMainEvolution(28, Races.MAROWAK); 




Races.KOFFING.setMainEvolution(35, Races.WEEZING); 

Races.RHYHORN.setMainEvolution(42, Races.RHYDON); 




Races.HORSEA.setMainEvolution(32, Races.SEADRA); 

Races.GOLDEEN.setMainEvolution(33, Races.SEAKING); 










Races.MAGIKARP.setMainEvolution(20, Races.GYARADOS); 








Races.OMANYTE.setMainEvolution(40, Races.OMASTAR); 

Races.KABUTO.setMainEvolution(40, Races.KABUTOPS); 






Races.DRATINI.setMainEvolution(30, Races.DRAGONAIR); 
Races.DRAGONAIR.setMainEvolution(55, Races.DRAGONITE); 


Races.RAICHU.setStoneEvolution("THUNDER_STONE", Races.PIKACHU); 
Races.NIDOQUEEN.setStoneEvolution("MOON_STONE", Races.NIDORINA); 
Races.NIDOKING.setStoneEvolution("MOON_STONE", Races.NIDORINO); 
Races.CLEFABLE.setStoneEvolution("MOON_STONE", Races.CLEFAIRY); 
Races.NINETALES.setStoneEvolution("FIRE_STONE", Races.VULPIX); 
Races.WIGGLYTUFF.setStoneEvolution("MOON_STONE", Races.JIGGLYPUFF); 
Races.VILEPLUME.setStoneEvolution("LEAF_STONE", Races.GLOOM); 
Races.ARCANINE.setStoneEvolution("FIRE_STONE", Races.GROWLITHE); 
Races.POLIWRATH.setStoneEvolution("WATER_STONE", Races.POLIWHIRL); 
Races.VICTREEBEL.setStoneEvolution("LEAF_STONE", Races.WEEPINBELL); 
Races.CLOYSTER.setStoneEvolution("WATER_STONE", Races.SHELLDER); 
Races.EXEGGUTOR.setStoneEvolution("LEAF_STONE", Races.EXEGGCUTE); 
Races.STARMIE.setStoneEvolution("WATER_STONE", Races.STARYU); 
Races.VAPOREON.setStoneEvolution("WATER_STONE", Races.EEVEE); 
Races.JOLTEON.setStoneEvolution("THUNDER_STONE", Races.EEVEE); 
Races.FLAREON.setStoneEvolution("FIRE_STONE", Races.EEVEE); 


module.exports = Races;
