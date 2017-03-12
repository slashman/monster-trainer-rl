module.exports = {
	STORE_CLERK: {
		name: "Store Clerk",
		tile: new ut.Tile('@', 0, 255, 0),
		hp: 20	
	},

	GYM_LEADER: {
		name: "Gym Leader",
		tile: new ut.Tile('@', 255, 255, 0),
		hp: 20,
		trainer: true
	}
}