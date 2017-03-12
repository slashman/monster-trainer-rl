var Effectiveness = require('./Effectiveness');
var Random = require('../Random');

module.exports = {
	DAMAGE: function(monster, skill){
		var enemy = monster.getNearestEnemy();
		monster.game.display.message(monster.race.name+" uses "+skill.name+" on the "+enemy.race.name+".");
		if (enemy.intent === 'STILL'){
			// No longer!!!
			monster.game.display.message("The "+enemy.race.name+" becomes hostile!");
			enemy.intent = 'CHASE';
		}

		var criticalHit = Random.chance((monster.speed.current / 512)*100);
		var level = criticalHit ? monster.xpLevel * 2 : monster.xpLevel;
		var a = skill.damageType = 'PHYS' ? monster.attack.current : monster.spAttack.current;
		var d = skill.damageType = 'PHYS' ? enemy.defense.current : enemy.spDefense.current;
		var power = skill.power;
		var targets = 1; // Changes if multitargets
		var weather = 1; // Changes based on environment
		var random = Random.n(85,100) / 100;
		var stab = skill.type === monster.type ? 1.5 : 1;
		var type = Effectiveness(skill, monster, enemy);
		switch(type){
			case 2:
				monster.game.display.message("It's super effective!");
				break;
			case 0.5:
				monster.game.display.message("It's not very effective...");
				break;
		}
		var modifier = targets * weather * random * stab * type;
		var damage = modifier * (
		(
			(
				(
					(
						(
							2 * level
						) / 5
					) + 2
				) * power * (a/d)
			)/50
		)+2);
		damage = Math.floor(damage);
		if (damage > 0){
			monster.game.display.message("The "+enemy.race.name+" is hit for "+damage+" damage.");
			enemy.hp.reduce(damage);
			if (enemy.hp.current <= 0){
				enemy.die();
			}
		} else {
			monster.game.display.message("The "+enemy.race.name+" is not affected.");
		}

	},
	LOWER_STAT: function(monster, skill){
		monster.game.display.message(monster.race.name+" uses "+skill.name);
	}
}