var ItemType = require('./ItemType.enum')

module.exports = {
	POKEBALL: {
		type: ItemType.POKEBALL,
		name: 'Pokeball',
		tile: new ut.Tile('*', 255, 0, 0),
		cost: 100
	},
	SUPERBALL: {
		type: ItemType.POKEBALL,
		name: 'Superball',
		tile: new ut.Tile('*', 0, 255, 0),
		catchBoost: 10,
		cost: 200
	},
	POTION: {
		type: ItemType.POTION,
		name: 'Potion',
		tile: new ut.Tile('!', 255, 255, 0),
		points: 10,
		cost: 50
	},
	SUPER_POTION: {
		type: ItemType.POTION,
		name: 'Super Potion',
		tile: new ut.Tile('!', 0, 255, 255),
		points: 20,
		cost: 100
	},
	BOULDER_BADGE: {
		type: ItemType.BADGE,
		name: 'Boulder Badge',
		tile: new ut.Tile('O', 255, 255, 255)
	},
	CASCADE_BADGE: {
		type: ItemType.BADGE,
		name: 'Cascade Badge',
		tile: new ut.Tile('O', 255, 255, 255)
	},
	THUNDER_BADGE: {
		type: ItemType.BADGE,
		name: 'Thunder Badge',
		tile: new ut.Tile('O', 255, 255, 255)
	}
}