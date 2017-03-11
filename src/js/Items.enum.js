var ItemType = require('./ItemType.enum')

module.exports = {
	POKEBALL: {
		type: ItemType.POKEBALL,
		name: 'Pokeball',
		tile: new ut.Tile('@', 255, 0, 0)
	},
	SUPERBALL: {
		type: ItemType.POKEBALL,
		name: 'Superball',
		tile: new ut.Tile('@', 0, 255, 0),
		catchBoost: 10
	},
	POTION: {
		type: ItemType.POTION,
		name: 'Potion',
		tile: new ut.Tile('!', 255, 255, 0)	
	}
}