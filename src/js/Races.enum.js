module.exports = {
	RATTATA: {
		name: "Rattata",
		tile: new ut.Tile('r', 128, 0, 128),
		aggresive: true,
		hp: 10
	},
	PIDGEY: {
		name: "Pidgey",
		tile: new ut.Tile('p', 255, 128, 0),
		hp: 10
	},
	CHARMANDER: {
		name: "Charmander",
		tile: new ut.Tile('c', 255, 0, 0),
		hp: 20
	},
	ONYX: {
		name: "Onyx",
		tile: new ut.Tile('O', 128, 128, 128),
		hp: 30
	},

	STORE_CLERK: {
		name: "Store Clerk",
		tile: new ut.Tile('@', 0, 255, 0),
		hp: 20	
	},

	TRAINER_BROK: {
		name: "Brok",
		tile: new ut.Tile('@', 255, 255, 0),
		hp: 20,
		trainer: true
	}
}