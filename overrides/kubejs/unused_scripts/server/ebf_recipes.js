ServerEvents.recipes(event => {

event.custom({               
	"type": "custommachinery:custom_machine",
	"machine": "custommachinery:electric_blast_furnace",
	"time": 500,
	"requirements": [
    {
			"type": "custommachinery:item",
			"ingredient": {
				"item": "minecraft:coal",
				"count": 1
			},
			"mode": "input"
		},
		{
			"type": "custommachinery:item",
			"ingredient": {
				"item": "minecraft:diamond",
				"count": 1
			},
			"mode": "output"
		}
	]
}).requireStructure([["a","m"]], {"a":"electroenergetics:red_electric_motor"})


})