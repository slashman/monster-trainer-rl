module.exports = {
	n: function(a, b){
		return Math.floor(Math.random() * (b - a + 1))+a;
	},
	chance: function(c){
		return this.n(0,100) <= c;
	},
	from: function(array, remove){
		var index = this.n(0, array.length-1);
		var value = array[index];
		if (remove){
			array.splice(index, 1);
		}
		return value;
	},
	fromObject: function(object, remove){
		var keys = Object.keys(object)
		var key = keys[this.n(0, keys.length-1)];
		var value = object[key];
		if (remove){
			delete object[key];
		}
		return value;
	},
	fromWeighted: function(array, totalWeight){
		var totalWeight = 0;
		for (var i = 0; i < array.length; i++){
			totalWeight += array[i].weight;
		}
		var pivot = this.n(0, totalWeight);
		var acum = 0;
		for (var i = 0; i < array.length; i++){
			acum += array[i].weight;
			if (pivot <= acum){
				return array[i];
			}
		}
		return false; // Should never happen
	}
}