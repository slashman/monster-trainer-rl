var Random = require('../Random');
var Matrix = require('./Matrix.class');

module.exports = {
	runCA: function(map, rules, generations, wrap){
		var matrix = new Matrix(map)
		for (var i = 0; i < generations; i++)
			this.step(matrix, rules, wrap);
	},
	step: function(matrix, rules, wrap){
		for (var x = 0; x < matrix.getWidth(); x++){
			for (var y = 0; y < matrix.getHeight(); y++){
				for (var i = 0; i < rules.length; i++){
					rules[i].apply(x,y, matrix, wrap);
				}
			}
		}
		matrix.advance();
	}
}