ServerEvents.recipes(event => {

    event.recipes.create.emptying(
        [Fluid.of('dimensional_tears:dimensional_tears', 1000), 'minecraft:bucket'],
        'dimensional_tears:dimensional_tears_bucket'
    )

    event.recipes.create.emptying(
        [Fluid.of('dimensional_tears:dimensional_tears', 250), 'minecraft:glass_bottle'],
        'dimensional_tears:dimensional_tears_bottle'
    )
    event.recipes.create.emptying(
        [Fluid.of('kubejs:maple_syrup', 250), 'minecraft:glass_bottle'],
        'nomansland:maple_syrup_bottle'
    )
    event.recipes.create.filling(
        'nomansland:maple_syrup_bottle',
        [Fluid.of('kubejs:maple_syrup', 250), 'minecraft:glass_bottle']
    )
     event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
        {"tag": "c:stones"},
        {
        "type": "fluid_stack",
        "fluid": "dimensional_tears:dimensional_tears",
        "amount": 100
        }
    ],
    "heat_requirement": "lowheated",
    "processing_time": 500,
    "results": [
        {
        "id": "minecraft:obsidian"
        }

    ]
    })

    event.custom({
    "type": "createdieselgenerators:bulk_fermenting",
    "ingredients": [
        {"tag": "c:stones"},
        {
        "type": "fluid_stack",
        "fluid": "dimensional_tears:dimensional_tears",
        "amount": 100
        }
    ],
    "heat_requirement": "lowheated",
    "processing_time": 500,
    "results": [
        {
        "id": "minecraft:obsidian"
        }
    ]
    })
})
