var Random = require('../Random');

module.exports = {
	act: function(being){
		this.being = being;
		if (being.monsters.length == 0){
			// Defeated!
			if (!being.gavePrize){
				being.givePrize();
			}
			// Stand by
			return;
		}
		if (!being.game.player.gymTown){
			// Player gave up
			if (being.monsterDeployed){
				being.pullBackMonster();
			}
			being.healAll();
			return;
		}
		if (being.monsterDeployed){
			if (this.pullBackMonster()){
				being.pullBackMonster();
			} else if (this.useItem()){
				being.useItem(this.selectItem());
			} else if (this.issuePositionalOrder()){
				being.issueOrder(this.selectPositionalOrder());
			} else if (this.issueSkillOrder()){
				being.issueOrder(this.selectSkillOrder());
			} else {
				//Stand by
			}
		} else {
			if (this.releaseMonster()){
				being.releaseMonster(this.selectMonster());
			} else {
				// Stand by
			}
		}
	},
	pullBackMonster: function(){
		// Define if should call back the current monster
		var hasMoreMonster = this.being.monsters.length > 1;
		var tooInjured = this.being.monsterDeployed.hp.getProportion() <= 0.3 && Random.chance(60);
		var whatever = Random.chance(1);
		return hasMoreMonster && (tooInjured || whatever);
	},
	useItem: function(){
		// Define if should use an item
		return false;
	},
	selectItem: function(){
		// Select an item to use from inventory
		return false;
	},
	issuePositionalOrder: function(){
		// Define if should issue a positional order
		return false;
	},
	selectPositionalOrder: function(){
		// Select what positional order to give
		return false;
	},
	issueSkillOrder: function(){
		// Define if should issue a skill order
		return false;
	},
	selectSkillOrder: function(){
		// Select what skill order to give
		return false;
	},
	releaseMonster: function(){
		// Define is should release a monster
		return this.being.monsters.length > 0 && Random.chance(30);
	},
	selectMonster: function(){
		// Define what monster to release
		if (this.being.enemyMonster){
			// Evaluate all available monsters to see which one is the best
			var evals = this.being.monsters.map(function(monster){
				return this.evaluate(monster);
			}, this);
			evals.sort();
			return evals[evals.length - 1];
		} else {
			// Select a random monster from available
			return Random.from(this.being.monsters);
		}
	},
	evaluate: function(monster){
		if (this.being.monsterDeployed.hp.getProportion() <= 0.3)
			return 1;
		return 5;
	}
}