ServerEvents.recipes(event => {

    //shapeless recipes

    event.shapeless(
        Item.of('minecraft:note_block'),
        [
            '#minecraft:wool',
            'caverns_and_chasms:spinel'
        ]
    )


    event.shapeless(
        Item.of('minecraft:jukebox'),
        [
            'minecraft:note_block',
            'minecraft:diamond'
        ]
    )

    event.shapeless(
        Item.of('minecraft:sweet_berries', 9),
        [
            'kubejs:sweet_berry_bag'
        ]
    )


    event.shapeless(
        Item.of('minecraft:glow_berries', 9),
        [
            'kubejs:glow_berry_bag'
        ]
    )


    event.shapeless(
        Item.of('minecraft:flint_and_steel'),
        [
            'minecraft:flint',
            'minecraft:flint'
        ]
    )

    event.shapeless(
        Item.of('minecraft:stick', 2),
        [
            '#minecraft:saplings'
        ]
    )

    event.shapeless(
        Item.of('minecraft:paper', 3),
        [
            'minecraft:sugar_cane',
            'minecraft:sugar_cane',
            'minecraft:sugar_cane'
        ]
    )

    event.shapeless(
        Item.of('nomansland:straw_bed'),
        [
            'nomansland:thatch',
            'nomansland:thatch',
            'nomansland:thatch',
            '#minecraft:wool_carpets'
        ]
    )

    event.shapeless(
        Item.of('modestmining:forge'),
        [
            'minecraft:campfire',
            'minecraft:deepslate'
        ]
    )


    event.shapeless(
        Item.of('minecraft:furnace'),
        [
            'minecraft:campfire',
            'minecraft:cobblestone'
        ]
    )



    event.shapeless(
        Item.of('artistry:poster'),
        [
            'minecraft:paper',
            'farmersdelight:canvas',
            'minecraft:stick'
        ]
    )

    event.shapeless(
        Item.of('farmersdelight:stove'),
        [
            'minecraft:campfire',
            'minecraft:bricks'
        ]
    )
})