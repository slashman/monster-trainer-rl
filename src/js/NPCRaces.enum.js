module.exports = {
	STORE_CLERK: {
		name: "Store Clerk",
		tile: new ut.Tile('@', 0, 255, 0),
		hp: 20,
		speed: 50,
		interact: function(player){
			player.game.display.message("Welcome! please grab the items you would be interested on!");
		}
	},
	NURSE: {
		name: "Nurse",
		tile: new ut.Tile('@', 255, 85, 255),
		hp: 20,
		speed: 50,
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
	PROFFESSOR: {
		name: "Proffessor",
		tile: new ut.Tile('@', 255, 255, 255),
		hp: 20,
		speed: 50,
		trainer: true,
		interact: function(player){
			if (player.pickedStarter){
				player.game.display.message("Good luck in your quest!");
			} else {
				player.game.display.message("Pick one of the starter pokemon.");
			}
		}
	},
	GYM_LEADER: {
		name: "Gym Leader",
		tile: new ut.Tile('@', 255, 255, 0),
		hp: 20,
		speed: 50,
		trainer: true
	}
}