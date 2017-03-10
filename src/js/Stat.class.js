function Stat(max){
	this.max = max;
	this.current = max;
}

module.exports = Stat;

Stat.prototype.replenish = function(){
	this.current = this.max;
};

Stat.prototype.regenerate = function(){
	if (this.current < this.max)
		this.current++;
};

Stat.prototype.increase = function(value){
	if (this.current < this.max)
		this.current += value;
	if (this.current > this.max)
		this.current = this.max;
};

Stat.prototype.increaseOpenly = function(value){
	this.current += value;
};

Stat.prototype.recoverProportion = function(proportion){
	var missing = this.max - this.current;
	this.increase(Math.round(missing*proportion));
};

Stat.prototype.recoverProportionOfTotal = function(proportion){
	this.increase(Math.round(this.max*proportion));
};

Stat.prototype.reduce = function(value){
	if (this.current > 0)
		this.current-= value;
	if (this.current < 0)
		this.current = 0;
};

Stat.prototype.extend = function(value){
	this.max += value;
	this.current += value;
};

Stat.prototype.multiply = function(value){
	this.max *= value;
	this.current *= value;
};

Stat.prototype.contract = function(value){
	this.max -= value;
	if (this.max < 0)
		this.max = 0;
	if (this.current > this.max)
		this.current = this.max;
};

Stat.prototype.getText = function(){
	return this.current + "/" + this.max;
};

Stat.prototype.getProportion = function(){
	return this.current / this.max;
};

Stat.prototype.notFull = function(value){
	return this.current !== this.max;
};

Stat.prototype.empty = function(){
	return this.current <= 0;
};

Stat.prototype.getRemaining = function(){
	return this.max - this.current;
};