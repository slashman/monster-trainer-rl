var ItemType = require('./ItemType.enum')

module.exports = {
	IRON_SWORD: {
		type: ItemType.WEAPON,
		name: 'Iron Sword',
		tile: new ut.Tile('/', 128, 128, 128)
	},
	BOOK_OF_MIRDAS: {
		type: ItemType.BOOK,
		name: 'Book of Mirdas',
		tile: new ut.Tile('B', 255, 0, 0)
	}
}