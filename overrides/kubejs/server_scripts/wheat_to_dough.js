ServerEvents.recipes(event => {
    const trueWheat = [
        'minecraft:packed_mud',
        'incubation:hay_nest',
        'minecraft:hay_block',
        'supplementaries:daub',
        'abyssal_decor:burlap',
        'nomansland:thatch'
    ]

    const trueWheatOutputFilters = trueWheat.map(item => ({ output: item }))

    const trueWheatExcludeFilter = {
        or: trueWheatOutputFilters
    }

    event.replaceInput(
        { type: 'minecraft:crafting_shaped', not: trueWheatExcludeFilter },
        'minecraft:wheat',
        'farmersdelight:wheat_dough'
    )
    event.replaceInput(
        { type: 'minecraft:crafting_shapeless', not: trueWheatExcludeFilter },
        'minecraft:wheat',
        'farmersdelight:wheat_dough'
    )
})
