// This test validates all races defined on the route stereotypes are correct


global.ut = {
	Tile: function(){}
}

function assert(expression){
	if (!expression){
		throw new Error("Assertion failed");
	}
}

var MasterPlans = require('../MasterPlans');

MasterPlans.routeStereotypes.forEach((route) => {route.monsters.forEach((def) => assert(def.race != null))});