var Random = require('../Random');

/** 
 * Stores a rule of the form:
 *  if {baseCell} has {condType} {cellQuant} {cellParam} around, turn into {destinationCell}
 *
 * Example
 *  when 1 has morethan 4 2 around turn into 0
 */

function Rule(baseCell, condType, cellQuant, cellParam, destinationCell, chance){
	this.baseCell = baseCell;
	this.condType = condType;
	this.cellQuant = cellQuant;
	this.cellParam = cellParam;
	this.destinationCell = destinationCell;
	this.chance = chance ? chance : 100;
}

Rule.prototype = {
	apply: function (x, y, m, wrap){
		if (m.get(x,y) == this.baseCell){
			var surroundingCount = 0;
			if (wrap)
				surroundingCount = m.getSurroundingCount(x,y,this.cellParam);
			else
				surroundingCount = m.getSurroundingCountNoWrap(x,y,this.cellParam);

			switch (this.condType){
				case Rule.HAS:
					if (surroundingCount === this.cellQuant && Random.chance(this.chance)){
						m.setFuture(this.destinationCell, x, y);
					}
					break;
				case Rule.MORE_THAN:
					if (surroundingCount > this.cellQuant && Random.chance(this.chance)){
						m.setFuture(this.destinationCell, x, y);
					}
					break;
				case Rule.LESS_THAN:
					if (surroundingCount < this.cellQuant && Random.chance(this.chance)){
						m.setFuture(this.destinationCell, x, y);
					}
					break;
			}

		}
	}
}

Rule.HAS = 0;
Rule.MORE_THAN = 1;
Rule.LESS_THAN = 2,

module.exports = Rule;