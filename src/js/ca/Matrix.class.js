function Matrix(map, w, h){
	if (map){
		this.values = map;
		this.futureValues = map;	
	} else {
		this.values = [];
		this.futureValues = [];
	}
}

Matrix.prototype = {
	setFuture: function(value, x, y){
		this.futureValues[x][y] = value;
	},
	setPresent: function (value, x, y){
		this.values[x][y] = value;
	},
	get: function(x, y){
		return this.values[x][y];
	},
	getWidth: function(){
		return this.values.length;
	},
	getHeight: function(){
		return this.values[0].length;
	},
	advance: function(){
		for (var x = 0; x < this.values.length; x++){
			for (var y = 0; y < this.values[0].length; y++){
				this.values[x][y] = this.futureValues[x][y];
			}
		}
	},
	getSurroundingCount: function(x, y, type){
		var upIndex = (y == 0 ? this.getHeight()-1 : y-1);
		var downIndex = (y == this.getHeight()-1  ? 0 : y+1);
		var rightIndex = (x == this.getWidth()-1  ? 0 : x+1);
		var leftIndex = (x == 0 ? this.getWidth()-1 : x-1);
		var count =
		 		(this.values[leftIndex][upIndex] == type ? 1 : 0) +
		 		(this.values[leftIndex][y] == type ? 1 : 0) +
		 		(this.values[leftIndex][downIndex] == type ? 1 : 0) +
		 		(this.values[rightIndex][upIndex] == type ? 1 : 0) +
		 		(this.values[rightIndex][y] == type ? 1 : 0) +
		 		(this.values[rightIndex][downIndex] == type ? 1 : 0) +
		 		(this.values[x][downIndex] == type ? 1 : 0) +
		 		(this.values[x][upIndex] == type ? 1 : 0) ;
		 return count;
	},
	getSurroundingCountNoWrap: function(x, y, type){
		var count =
		 		(y==0||x==0?0:(this.values[x-1][y-1] == type ? 1 : 0)) +
		 		(x==0?0:(this.values[x-1][y] == type ? 1 : 0)) +
		 		(x==0||y==this.getHeight()-1?0:(this.values[x-1][y+1] == type ? 1 : 0)) +
		 		(y==0||x==this.getWidth()-1?0:(this.values[x+1][y-1] == type ? 1 : 0)) +
		 		(x==this.getWidth()-1?0:(this.values[x+1][y] == type ? 1 : 0)) +
		 		(x==this.getWidth()-1||y==this.getHeight()-1?0:(this.values[x+1][y+1] == type ? 1 : 0)) +
		 		(y==this.getHeight()-1?0:(this.values[x][y+1] == type ? 1 : 0)) +
		 		(y==0?0:(this.values[x][y-1] == type ? 1 : 0)) ;
		 return count;
	},
	clean: function(){
		this.values = [];
		this.futureValues = [];
	},
	getArrays: function(){
		return this.values;
	},
	addHotSpot: function(value, x, y){
		if (!x) x = Random.n(5,this.getWidth()-5);
		if (!y) y = Random.n(5,this.getHeight()-5);
		this.values[x][y] = value;
		this.futureValues[x][y] = value;
	},
	addShoweredHotSpot: function(value, shower, showers, maxDist, x, y){
		if (!x) x = Random.n(5,this.getWidth()-5);
		if (!y) y = Random.n(5,this.getHeight()-5);
		var xs = showers;
		for (var i = 0; i < xs; i++){
			var xdif = maxDist - Random.n(0,maxDist*2);
			var ydif = maxDist - Random.n(0,maxDist*2);
			if (this.isValid(x+xdif, y+ydif))
				this.futureValues[x+xdif][y+ydif] = shower;
		}
		this.futureValues[x][y] = value;
	},
	isValid: function(x, y){
		return x>=0 && y >= 0 && x < this.getWidth() && y < this.getHeight();
	}
}

module.exports = Matrix;