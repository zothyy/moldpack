ServerEvents.recipes(event => {

    // tin into a metal for logistics items
    const tinPlateItems = [
        'create:chute',
        'create:item_vault',
    ]
    const tinIngotItems = [
        'create:chute',
        'create:packager',
        'create:redstone_requester',
        'minecraft:hopper',
    ]

    tinPlateItems.forEach(item => {
        event.replaceInput(
            { type: 'minecraft:crafting_shaped', output: item },
            'create:iron_sheet',
            'caverns_and_chasms:tinplate'
        )
    })

    tinIngotItems.forEach(item => {
        event.replaceInput(
            { type: 'minecraft:crafting_shaped', output: item },
            'minecraft:iron_ingot',
            'caverns_and_chasms:tin_ingot'
        )
    })
})