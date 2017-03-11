module.exports = {
	direction: function(x1, y1, x2, y2){
		return {x: this.sign(x2 - x1), y: this.sign(y2 - y1)};
	},
	sign: function(a){
		if (a > 0)
			return 1;
		else if (a < 0)
			return -1;
		else
			return 0;
	}
}
