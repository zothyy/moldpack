    // early game metal registry
ServerEvents.recipes(event => {
   
    const trueIron = [
        // Armor
        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots',
        // Other
        'minecraft:compass',
        'suppsquared:iron_plaque',
        'minecraft:heavy_weighted_pressure_plate',
        'minecraft:iron_door',
        'minecraft:iron_trapdoor',
        'minecraft:iron_block',
        'minecraft:iron_nugget',
        'minecraft:iron_bars',
        'caverns_and_chasms:iron_bricks',
        'minecraft:shield',
        'create:andesite_alloy',
        'supplementaries:iron_gate',
        'minecraft:iron_ingot',
        'minecraft:chain'
    ]


    const trueIronOutputFilters = trueIron.map(item => ({ output: item }))

    const trueIronExcludeFilter = {
        or: trueIronOutputFilters.concat([
            { mod: 'electroenergetics' },
            { mod: 'createdieselgenerators' },
            { mod: 'shieldexp'},
            { mod: 'oxide'},
            { mod: 'cookscollection'},
            { mod: 'farmersdelight'}
        ])
    }
   
    event.replaceInput(
        { type: 'minecraft:crafting_shaped', not: trueIronExcludeFilter },
        'minecraft:iron_ingot',
        '#kubejs:metal_ingot'
    )
   
    event.replaceInput(
        { type: 'minecraft:crafting_shapeless', not: trueIronExcludeFilter },
        'minecraft:iron_ingot',
        '#kubejs:metal_ingot'
    )
   
    event.replaceInput(
        { type: 'minecraft:stonecutting' },
        'minecraft:iron_ingot',
        '#kubejs:metal_ingot'
    )
   
    event.replaceInput(
        { type: 'create:block_cutting' },
        'minecraft:iron_ingot',
        '#kubejs:metal_ingot'
    )
   
    event.replaceInput(
        { type: 'overgeared:forging', not: trueIronExcludeFilter },
        'minecraft:iron_ingot',
        '#kubejs:metal_ingot'
    )
   
    event.replaceInput(
        { type: 'minecraft:crafting_shaped', not: trueIronExcludeFilter },
        'minecraft:iron_nugget',
        '#kubejs:metal_nugget'
    )
   
    event.replaceInput(
        { type: 'minecraft:crafting_shapeless', not: trueIronExcludeFilter },
        'minecraft:iron_nugget',
        '#kubejs:metal_nugget'
    )
   
    event.replaceInput(
        { type: 'overgeared:forging', not: trueIronExcludeFilter },
        'minecraft:iron_nugget',
        '#kubejs:metal_nugget'
    )
   
    event.replaceInput(
        { type: 'minecraft:crafting_shaped', not: trueIronExcludeFilter },
        'minecraft:iron_block',
        '#kubejs:metal_block'
    )
   
    event.replaceInput(
        { type: 'minecraft:crafting_shapeless', not: trueIronExcludeFilter },
        'minecraft:iron_block',
        '#kubejs:metal_block'
    )
   
    event.replaceInput(
        { type: 'overgeared:forging', not: trueIronExcludeFilter },
        'minecraft:iron_block',
        '#kubejs:metal_block'
    )
   
    event.replaceInput(
        { type: 'minecraft:crafting_shaped', not: trueIronExcludeFilter },
        'create:iron_sheet',
        '#kubejs:metal_sheet'
    )
   
    event.replaceInput(
        { type: 'minecraft:crafting_shapeless', not: trueIronExcludeFilter },
        'create:iron_sheet',
        '#kubejs:metal_sheet'
    )
   
    event.replaceInput(
        { type: 'overgeared:forging', not: trueIronExcludeFilter },
        'create:iron_sheet',
        '#kubejs:metal_sheet'
    )
})
