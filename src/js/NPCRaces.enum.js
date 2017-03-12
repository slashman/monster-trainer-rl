module.exports = {
	STORE_CLERK: {
		name: "Store Clerk",
		tile: new ut.Tile('@', 0, 255, 0),
		hp: 20,
		interact: function(player){
			player.game.display.message("Welcome! please grab the items you would be interested on!");
		}
	},
	NURSE: {
		name: "Nurse",
		tile: new ut.Tile('@', 255, 85, 255),
		hp: 20,
		interact: function(player){
			player.game.display.message("Would you like me to heal your pokemon back to perfect health? [Y/N]");
			player.game.input.promptFunction = function(confirm){
				if (confirm){
					player.game.display.message("Ok!");
					player.healAll();
				} else {
					player.game.display.message("Ok.");
				}
				player.endTurn();
				player.game.input.mode = "MOVEMENT";
			}
			player.game.input.mode = "PROMPT";
		}
	},
	GYM_LEADER: {
		name: "Gym Leader",
		tile: new ut.Tile('@', 255, 255, 0),
		hp: 20,
		trainer: true
	}
}