module.exports = {
	generateMetadata: function(){
		return {
			"PALLET_TOWN":{
				type: 'TOWN',
				name: 'Pallet Town',
				width: 32,
				height: 32,
				addEnemies: false,
				exits: [
					{
						dir: 'UP',
						toId: "ROUTE_1"
					}
				],
				startPosition: {
					x: 16,
					y: 16
				},
				features: [
					{ // Hero's house
						type: 'myHouse',
						x: 1,
						y: 1
					},
					{ // Oak's Lab
						type: 'lab'
					},
					{
						// Rival's house (empty)
						type: 'house'
					},
					{
						type: 'pond'
					}
				]
			},
			"ROUTE_1":{
				type: 'ROUTE',
				orientation: 'VERTICAL',
				name: 'Route 1',
				width: 32,
				height: 64,
				addEnemies: true,
				exits: [
					{
						dir: 'DOWN',
						toId: "PALLET_TOWN"
					}
				]
			}
		}
	}
}