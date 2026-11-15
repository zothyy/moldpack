ServerEvents.recipes(event => {
    event.remove({ output:'electroenergetics:heavily_insulated_wire'})
    event.remove({ output:'electroenergetics:commutator'})
    event.remove({ output:'#c:wires'})
    event.remove({ output:'electroenergetics:copper_wire'})
    event.remove({ output:'electroenergetics:electrum_wire'})
    event.remove({ output:'electroenergetics:iron_wire'})

/*    event.recipes.createmetallurgy.alloying(
     [Fluid.of('createmetallurgy:molten_electrum', 20)], 
     [
      Fluid.of('createmetallurgy:molten_gold', 10),
      Fluid.of('createmetallurgy:molten_silver', 10),
      Item.of('minecraft:nether_star')
     ]
    ).heated().keepIngredient('minecraft:nether_star')
*/

    event.replaceInput(
    { input:'create:andesite_alloy', mod:'electroenergetics'},
    'create:andesite_alloy',
    '#c:ingots/electrum'
    )


    event.replaceInput(
    { input:'create:andesite_alloy_block', mod:'electroenergetics'},
    'create:andesite_alloy_block',
    '#c:storage_blocks/electrum'
    )
    event.shapeless(
        Item.of('electroenergetics:heavily_insulated_wire', 4),
                    [
                        'minecraft:dried_kelp',
                        'minecraft:dried_kelp',
                        'electroenergetics:insulated_wire'
                    ]
    )
})
