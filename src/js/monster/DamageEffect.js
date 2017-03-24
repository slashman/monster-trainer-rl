var Status = require('./Status.enum');
var Random = require('../Random');
var Effectiveness = require('./Effectiveness');

module.exports = {
	hits: function(monster, enemy, skill){
		if (hitChance === 0){
			return true;
		}
		if (skill.params.alwaysHit)
			return true;
		var hitChance = skill.accuracy * (monster.getEffectiveAccuracy() / enemy.getEffectiveEvasion());
		return Random.chance(hitChance);
	},
	getCriticalHitChance: function(monster, skill){
		var t = monster.speed.current / 2; // This uses the base speed, not affected by modifiers
		if (skill.params.critBoost){
			t *= 8;
		}
		if (monster.hasStatus(Status.FOCUSED)){
			t *= 4;
		}
		return t / 256;
	},
	calculateDamage: function(monster, enemy, skill){
		if (skill.params.fixedDamage){
			if (skill.params.fixedDamage === "Level"){
				return monster.xpLevel;
			} else {
				return skill.params.fixedDamage;
			}
		} else if (skill.params.fixedDamagePercentage){
			var damage = Math.floor(enemy.hp.current * (skill.params.fixedDamagePercentage/100));
			if (damage === 0)
				damage = 1;
			return damage;
		} else if (skill.params.specialDamage){
			if (skill.params.specialDamage === "psywave"){
				return Random.n(1, Math.floor(monster.xpLevel * 1.5));
			}
		}
		var criticalHitChance = this.getCriticalHitChance(monster, skill) * 100;
		var criticalHit = Random.chance(criticalHitChance);
		if (criticalHit){
			monster.game.display.message("A Critical Hit!");
		}
		var level = criticalHit ? monster.xpLevel * 2 : monster.xpLevel;
		var a = skill.damageType = 'PHYS' ? monster.getEffectiveAttack() : monster.getEffectiveSpecialAttack();
		var d = skill.damageType = 'PHYS' ? enemy.getEffectiveDefense() : enemy.getEffectiveSpecialDefense();
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
		if (skill.params.undergroundBonus && enemy.isUnderground()){
			damage *= 2;
		}
		return damage;
	},
	effect: function(monster, skill){
		var enemy = monster.getNearestEnemy();
		monster.game.display.message(monster.race.name+" uses "+skill.name+" on the "+enemy.race.name+".");

		if (skill.params.suicide){
			monster.game.display.message("The "+monster.race.name+" sacrifices himself!");
		}
		
		if (!this.hits(monster, enemy, skill)){
			monster.game.display.message("The "+monster.race.name+" misses.");
			// Missed??
			if (skill.params.damageOnMiss){
				monster.game.display.message("The "+monster.race.name+" takes "+skill.params.damageOnMiss+" miss damage.");
				monster.takeDamage(skill.params.damageOnMiss);
			}
			return;
		}

		if (enemy.intent === 'STILL'){
			// No longer!!!
			monster.game.display.message("The "+enemy.race.name+" becomes hostile!");
			enemy.intent = 'CHASE';
		}

		var damage = this.calculateDamage(monster, enemy, skill);

		
		if (damage > 0){
			monster.game.display.message("The "+enemy.race.name+" is hit for "+damage+" damage.");
			enemy.recordHitBy(monster);
			enemy.takeDamage(damage);
			if (skill.params.absorbHPPercentage){
				var absorbedHP = Math.floor(damage * (skill.params.absorbHPPercentage / 100));
				if (absorbedHP === 0){
					absorbedHP = 1;
				}
				monster.game.display.message("The "+monster.race.name+" absorbs "+absorbedHP+" damage.");
				monster.recoverHP(absorbedHP);
			}
			if (skill.params.recoil){
				var recoilDamage = Math.floor(damage * (skill.params.recoil / 100));
				monster.game.display.message("The "+monster.race.name+" takes "+recoilDamage+" recoil damage.");
				monster.takeDamage(recoilDamage);
			}

			if (skill.params.burnChance && Random.chance(skill.params.burnChance)){
				monster.game.display.message("The "+enemy.race.name+" is burned!");
				enemy.inflictStatus(Status.BURN, 5);
			}

			if (skill.params.confuseChance && Random.chance(skill.params.confuseChance)){
				monster.game.display.message("The "+enemy.race.name+" is confused!");
				enemy.inflictStatus(Status.CONFUSION, 5);
			}

			if (skill.params.flinchChance && Random.chance(skill.params.flinchChance)){
				monster.game.display.message("The "+enemy.race.name+" flinches!");
				enemy.inflictStatus(Status.FLINCH, 1);
			}

			if (skill.params.freezeChance && Random.chance(skill.params.freezeChance)){
				monster.game.display.message("The "+enemy.race.name+" is frozen!");
				enemy.inflictStatus(Status.FREEZE, 20);
			}

			if (skill.params.paralyzeChance && Random.chance(skill.params.paralyzeChance)){
				monster.game.display.message("The "+enemy.race.name+" is paralyzed!");
				enemy.inflictStatus(Status.PARALYZE, 5);
			}

			if (skill.params.poisonChance && Random.chance(skill.params.poisonChance)){
				monster.game.display.message("The "+enemy.race.name+" is poisoned!");
				enemy.inflictStatus(Status.POISON, 10);
			}

			if (skill.params.lowerChance && Random.chance(skill.params.lowerChance)){
				monster.game.display.message("The "+enemy.race.name+"'s "+skill.params.lowerStat.name+" is lowered!");
				enemy.changeStat(skill.params.lowerStat, 5, -1);
			}

			if (skill.params.suicide){
				monster.die();
			}

			// afterHits - Status to set after ALL hits (when multiHit)
			// assault - not here but previous, make the monster get next to enemy
			// buildUpTurns - not here? turns required to execute the move
			// rageTurns - Add a counter which would repeat the same skill until over.
			  // raiseAttackWhileRaging - not here, if current skill has this param and monster is raging, raise attack temporarily.
			// dropCoins - Drop money when hits
			// hideTurns - not here? hide for x turns before executing
			// multihit - not here? execute attack multiple times
			
			// recoverTurns - not here? Counter during which cannot do anything
			// requireStatus - Validation, target should have this status for the attack to be done
			// splashRange - not here, affect multiple targets
			// trap - target can't move (nor attack? for 4-5 turns), damage is caused every turn
		} else {
			monster.game.display.message("The "+enemy.race.name+" is not affected.");
		}
	}
}