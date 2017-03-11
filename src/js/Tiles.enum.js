module.exports = {
	GRASS: {
		tile: new ut.Tile('.', 0, 128, 0),
		darkTile: new ut.Tile('.', 128, 128, 128),
		solid: false,
		opaque: false
	},
	STAIRS_DOWN: {
		tile: new ut.Tile('>', 255, 255, 255),
		darkTile: new ut.Tile('>', 128, 128, 128),
		solid: false,
		opaque: false
	},
	STAIRS_UP: {
		tile: new ut.Tile('<', 255, 255, 255),
		darkTile: new ut.Tile('<', 128, 128, 128),
		solid: false,
		opaque: false
	},
	BUSH: {
		tile: new ut.Tile('&', 0, 128, 0),
		darkTile: new ut.Tile('&', 128, 128, 128),
		solid: false,
		opaque: true
	},
	WATER: {
		tile: new ut.Tile('~', 0, 0, 255),
		darkTile: new ut.Tile('~', 128, 128, 128),
		solid: true,
		opaque: false
	},
	WALL: {
		tile: new ut.Tile('#', 128, 128, 128),
		darkTile: new ut.Tile('#', 128, 128, 128),
		solid: true,
		opaque: true
	},
	FLOOR: {
		tile: new ut.Tile('.', 0, 0, 255),
		darkTile: new ut.Tile('.', 128, 128, 128),
		solid: false,
		opaque: false
	},
	ROAD: {
		tile: new ut.Tile('.', 128, 128, 128),
		darkTile: new ut.Tile('.', 128, 128, 128),
		solid: false,
		opaque: false
	},
	TALL_GRASS: {
		tile: new ut.Tile('|', 0, 255, 128),
		darkTile: new ut.Tile('|', 128, 128, 128),
		semiopaque: true
	},
	H_COUNTER: {
		tile: new ut.Tile('=', 255, 255, 255),
		darkTile: new ut.Tile('=', 128, 128, 128),
		solid: true
	},
	V_COUNTER: {
		tile: new ut.Tile('|', 255, 255, 255),
		darkTile: new ut.Tile('|', 128, 128, 128),
		solid: true
	},
	GYM_ENTRANCE: {
		tile: new ut.Tile('/', 255, 255, 255),
		darkTile: new ut.Tile('/', 128, 128, 128)
	}
}