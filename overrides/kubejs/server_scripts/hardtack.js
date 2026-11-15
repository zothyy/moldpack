ServerEvents.recipes(event => {
    event.custom({
    "type": "create:compacting",
    "heat_requirement": "lowheated",
    "ingredients": [
        {
        "item": "farmersdelight:wheat_dough"
        }
    ],
    "results": [
        {
        "id": "nomansland:hardtack"
        }
    ]
    })
})
