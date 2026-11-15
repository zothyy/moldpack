ServerEvents.recipes(event => {
event.remove({type:'brewinandchewin:fermenting'})
    const ferment = (inputs, output) => {
            event.custom({
                type: 'createdieselgenerators:basin_fermenting',
                ingredients: inputs,
                'processing_time': 2400,
                results: output
            })
            event.custom({
                type: 'createdieselgenerators:bulk_fermenting',
                ingredients: inputs,
                'processing_time': 1200,
                results: output
            })
    }

    ferment([
        { tag: 'c:mushrooms/sculk' },
        { item: 'minecraft:popped_chorus_fruit' },
        { item: 'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ], 
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:moonshine',
          amount: 500, 
        }
    ])

    ferment([
        { tag: 'c:mushrooms/sculk' },
        { item: 'create:wheat_flour' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:beer',
          amount: 500, 
        }
    ]
    )

    ferment([
        { tag: 'caverns_and_chasms:cave_growths' },
        { item: 'minecraft:sugar' },
        { item: 'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:root_beer',
          amount: 500, 
        }
    ])

    ferment([
        { item: 'caverns_and_chasms:zirconia' },
        { tag: 'c:mushrooms/sculk' },
        { item: 'minecraft:wither_rose'},
        { type: 'fluid_stack', fluid: 'brewinandchewin:salty_folly', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:withering_dross',
          amount: 500, 
        }
    ])


    ferment([
        { item: 'minecraft:dried_kelp' },
        { item: 'cookscollection:salt' },
        { item: 'minecraft:sea_pickle' },
        { item: 'minecraft:seagrass'},
        { type: 'fluid_stack', fluid: 'brewinandchewin:vodka', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:salty_folly',
          amount: 500, 
        }
    ])


    ferment([
        { item: 'minecraft:sweet_berries' },
        { item: 'minecraft:sugar_cane' },
        { item: 'minecraft:glistering_melon_slice'},
        { type: 'fluid_stack', fluid: 'brewinandchewin:mead', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:saccharine_rum',
          amount: 500, 
        }
    ])


    ferment([
        { item: 'minecraft:glow_berries' },
        { tag: 'c:mushrooms/sculk' },
        { type: 'fluid_stack', fluid: 'supplementaries:lumisene', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:glittering_grenadine',
          amount: 500, 
        }
    ])


    ferment([
        { item: 'minecraft:fermented_spider_eye' },
        { item: 'minecraft:turtle_egg' },
        { item: 'minecraft:ominous_bottle' },
        { type: 'fluid_stack', fluid: 'brewinandchewin:egg_grog', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:dread_nog',
          amount: 500, 
        }
    ])


    ferment([
        { item: 'farmersdelight:rice' },
        { tag: 'c:mushrooms/sculk' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:rice_wine',
          amount: 500, 
        }
    ])

    ferment([
        { item: 'minecraft:iron_ingot' },
        { item: 'minecraft:crimson_fungus' },
        { tag:  'c:flours/wheat'},
        { type: 'fluid_stack', fluid: 'brewinandchewin:strongroot_ale', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:steel_toe_stout',
          amount: 500, 
        }
    ])

    ferment([
        { item: 'minecraft:fermented_spider_eye' },
        { item: 'minecraft:crimson_fungus' },
        { item: 'minecraft:shroomlight' },
        { type: 'fluid_stack', fluid: 'brewinandchewin:bloody_mary', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:red_rum',
          amount: 500, 
        }
    ])


    ferment([
        { item: 'minecraft:sugar' },
        { item: 'minecraft:lily_of_the_valley' },
        { item: 'farmersdelight:tree_bark' },
        { type: 'fluid_stack', fluid: 'create:honey', amount: 250 },
        { type: 'fluid_stack', fluid: 'brewinandchewin:rice_wine', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:pale_jane',
          amount: 500, 
        }
    ])


    ferment([
        { item: 'minecraft:sweet_berries' },
        { item: 'farmersdelight:tomato' },
        { tag:  'c:foods/cabbage'},
        { type: 'fluid_stack', fluid: 'brewinandchewin:vodka', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:bloody_mary',
          amount: 500, 
        }
    ])

    ferment([
        { item: 'minecraft:sugar' },
        { item: 'minecraft:egg' },
        { tag:  'c:foods/cabbage'},
        { type: 'fluid_stack', fluid: 'minecraft:milk', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:egg_grog',
          amount: 500, 
        }
    ])


    ferment([
        { item: 'minecraft:potato' },
        { item: 'brewinandchewin:jerky' },
        { item: 'minecraft:beetroot' },
        { tag:  'c:mushrooms/sculk'},
        { type: 'fluid_stack', fluid: 'brewinandchewin:beer', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:strongroot_ale',
          amount: 500, 
        }
    ])


    ferment([
        { item: 'minecraft:potato' },
        { item: 'farmersdelight:wheat_dough' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:vodka',
          amount: 500, 
        }
    ])

    ferment([
        { item: 'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 },
        { type: 'fluid_stack', fluid: 'create:honey', amount: 250 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'brewinandchewin:mead',
          amount: 500, 
        }
    ])

    ferment([
        { item: 'minecraft:sea_pickle'},
        { item: 'minecraft:sea_pickle'},      
        { type: 'fluid_stack', fluid: 'create:honey', amount: 100 }
    ], 
    [
        {
         id: 'brewinandchewin:pickled_pickles',
         amount: 2
        }
    ])


    ferment([
        { item:  'minecraft:crimson_fungus'},      
        { item:  'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:milk', amount: 500 }
    ], 
    [
        {
         id: 'brewinandchewin:unripe_scarlet_cheese_wheel',
        }
    ])


    ferment([
        { item:  'minecraft:pumpkin_seeds'},      
        { item:  'minecraft:sugar' },
        { tag: 'c:mushrooms/sculk' },
        { type: 'fluid_stack', fluid: 'minecraft:milk', amount: 500 }
    ], 
    [
        {
         id: 'brewinandchewin:unripe_flaxen_cheese_wheel',
        }
    ])


    ferment([
        { item:  'minecraft:cocoa_beans'},      
        { item:  'minecraft:cocoa_beans'},      
        { item:  'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:milk', amount: 100 }
    ], 
    [
        {
         id: 'brewinandchewin:cocoa_fudge',
        }
    ])


    ferment([
        { tag: 'c:foods/safe_raw_fish'},
        { tag: 'c:foods/safe_raw_fish'},      
        { item: 'minecraft:dried_kelp' }
    ], 
    [
        {
         id: 'brewinandchewin:kippers',
         amount: 2
        }
    ])


    ferment([
        { tag: 'c:foods/cabbage'},
        { tag: 'c:foods/vegetable'},      
        { item: 'minecraft:kelp' }
    ], 
    [
        {
         id: 'brewinandchewin:kimchi',
         amount: 2
        }
    ])


    ferment([
        { tag: 'brewinandchewin:foods/jerky_meat'},
        { tag: 'brewinandchewin:foods/jerky_meat'},
        { tag: 'brewinandchewin:foods/jerky_meat'},      
        { item: 'cookscollection:salt' }
    ], 
    [
        {
         id: 'brewinandchewin:jerky',
         amount: 3
        }
    ])

})