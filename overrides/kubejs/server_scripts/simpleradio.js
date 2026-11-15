ServerEvents.recipes(event => { 
    event.remove({mod:'walkietalkie'})

    event.shapeless(
        Item.of('walkietalkie:radio_station'),
        [
            'electroenergetics:copper_wire_spool',
            'caverns_and_chasms:spinel',
            'caverns_and_chasms:spinel',
            '#kubejs:metal_ingot',
            '#kubejs:metal_ingot',
            '#kubejs:metal_ingot'
            
        ]
    )


    event.shapeless(
        Item.of('walkietalkie:microphone_module'),
        [
            '#c:wires/copper',
            'minecraft:amethyst_shard'
        ]
    )


    event.shapeless(
        Item.of('walkietalkie:speaker_module'),
        [
            '#c:wires/copper',
            'minecraft:note_block'
        ]
    )


    event.shapeless(
        Item.of('walkietalkie:walkie_talkie'),
        [
            '#c:wires/copper',
            '#kubejs:metal_ingot',
            'minecraft:note_block',
            'minecraft:amethyst_shard'
        ]
    )



})

