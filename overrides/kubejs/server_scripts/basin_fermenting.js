ServerEvents.recipes(event => {
event.remove({type:'culturaldelights:aging'})
    const ferment = (inputs, output, heat) => {
            event.custom({
                type: 'createdieselgenerators:basin_fermenting',
                ingredients: inputs,
                'processing_time': 2400,
                "heat_requirement": heat,
                results: output
            })
            event.custom({
                type: 'createdieselgenerators:bulk_fermenting',
                ingredients: inputs,
                'processing_time': 1200,
                "heat_requirement": heat,
                results: output
            })
    }

    ferment([
        { tag: 'c:mushrooms/sculk' },
        { tag: 'moldpack:corn_kernels' },
        { item: 'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ], 
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:moonshine',
          amount: 500, 
        }
    ],"lowheated")
    
    ferment([
        { tag: 'c:mushrooms/sculk' },
        { item: 'minecraft:sugar' },
        { item: 'nomansland:succulent' },
        { item: 'nomansland:succulent' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:tequila',
          amount: 500, 
        }
    ],"lowheated")

    ferment([
        { item: 'minecraft:sweet_berries' },
        { tag: 'c:mushrooms/sculk' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:wine',
          amount: 500, 
        }
    ],"none")

    ferment([
        { tag: 'c:mushrooms/sculk' },
        { item: 'create:wheat_flour' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:beer',
          amount: 500, 
        }
    ],"none")

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
    ],"chilling")


    ferment([
        { item: 'minecraft:glow_berries' },
        { tag: 'c:mushrooms/sculk' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:glow_wine',
          amount: 500, 
        }
    ],"none")

    ferment([
        { item: 'nomansland:wild_mint' },
        { item: 'minecraft:ice' },
        { item: 'minecraft:sugar' },
        { item: 'culturaldelights:lemon' },
        { item: 'culturaldelights:lemon' },
        { type: 'fluid_stack', fluid: 'kubejs:rum', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:mojito',
          amount: 500, 
        }
    ],"chilling")

    ferment([
        { item: 'minecraft:sweet_berries' },
        { item: 'minecraft:sweet_berries' },
        { type: 'fluid_stack', fluid: 'kubejs:vodka', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:gin',
          amount: 500, 
        }
    ],"lowheated")

    ferment([
        { item: 'minecraft:potato' },
        { item: 'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:vodka',
          amount: 500, 
        }
    ],"lowheated")
    
    ferment([
        { item: 'minecraft:ice' },
        { item: 'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:milk', amount: 500 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:ice_cream',
          amount: 500, 
        }
    ],"chilling")

    ferment([
        { item: 'minecraft:apple' },
        { type: 'fluid_stack', fluid: 'kubejs:wine', amount: 500 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:brandy',
          amount: 500, 
        }
    ],"lowheated")
    

    ferment([
        { tag: 'c:mushrooms/sculk' },
        { item: 'minecraft:sugar' },
        { item: 'minecraft:sugar_cane' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:rum',
          amount: 500, 
        }
    ],"lowheated")

    ferment([
        { tag:  'c:mushrooms/sculk' },
        { item: 'minecraft:sugar' },
        { item: 'minecraft:sugar' },
        { item: 'farmersdelight:wheat_dough' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:whiskey',
          amount: 500, 
        }
    ],"chilling")


    ferment([
        { item: 'minecraft:sugar' },
        { item: 'culturaldelights:lemon' },
        { item: 'culturaldelights:cinnamon' },
        { item: 'culturaldelights:cinnamon' },
        { item: 'minecraft:ice' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:cola',
          amount: 500, 
        }
    ],"chilling")

    ferment([
        { item: 'culturaldelights:beans' },
        { item: 'culturaldelights:beans' },
        { item: 'culturaldelights:beans' },
        { item: 'culturaldelights:salt' },              
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 },
    ],
    [ 
        { 
          id: 'culturaldelights:tofu',
        }
    ],"none")

    ferment([
        { item: 'farmersdelight:tomato' },
        { item: 'culturaldelights:lemon' },
        { item: 'minecraft:blaze_powder' },
        { item: 'minecraft:ice' },
        { type: 'fluid_stack', fluid: 'kubejs:vinegar', amount: 250 },
        { type: 'fluid_stack', fluid: 'kubejs:vodka', amount: 500 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:bloody_mary',
          amount: 500, 
        }
    ],"chilling")


    ferment([
        { item: 'culturaldelights:lemon' },
        { item: 'culturaldelights:lemon' },
        { item: 'culturaldelights:salt' },
        { item: 'minecraft:ice' },
        { type: 'fluid_stack', fluid: 'kubejs:tequila', amount: 250 },
        { type: 'fluid_stack', fluid: 'kubejs:lemon_liqueur', amount: 250 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:margarita',
          amount: 500, 
        }
    ],"none")


    ferment([
        { tag: 'c:mushrooms/sculk' },
        { item: 'minecraft:sugar' },
        { item: 'minecraft:apple' },
        { item: 'minecraft:apple' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:apple_cider',
          amount: 500, 
        }
    ],"none")

    ferment([
        { item: 'culturaldelights:lemon' },
        { item: 'culturaldelights:lemon' },
        { type: 'fluid_stack', fluid: 'kubejs:vodka', amount: 500 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:lemon_liqueur',
          amount: 500, 
        }
    ],"none")

    ferment([
        { tag:  'c:mushrooms/sculk'},
        { item: 'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 },
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:vinegar',
          amount: 500, 
        }
    ],"none")


    ferment([
        { item: 'minecraft:sugar' },
        { type: 'fluid_stack', fluid: 'minecraft:water', amount: 500 },
        { type: 'fluid_stack', fluid: 'create:honey', amount: 250 }
    ],
    [ 
        { 
          type: 'fluid_stack',
          id: 'kubejs:mead',
          amount: 500, 
        }
    ],"none")

    ferment([
        { tag: 'c:eggs'},
        { tag: 'c:eggs'},
        { tag: 'c:eggs'},
        { tag: 'c:eggs'},
        { item: 'culturaldelights:salt'},    
        { type: 'fluid_stack', fluid: 'kubejs:vinegar', amount: 250 }
    ], 
    [
        {id: 'culturaldelights:pickled_egg'},
        {id: 'culturaldelights:pickled_egg'},
        {id: 'culturaldelights:pickled_egg'},
        {id: 'culturaldelights:pickled_egg'}
    ],"none")
    
    ferment([
        { item: 'minecraft:spider_eye'},
        { item: 'minecraft:spider_eye'},
        { item: 'minecraft:spider_eye'},
        { type: 'fluid_stack', fluid: 'kubejs:vinegar', amount: 250 }
    ], 
    [
        {id: 'minecraft:fermented_spider_eye'},
        {id: 'minecraft:fermented_spider_eye'},
        {id: 'minecraft:fermented_spider_eye'},
        {id: 'minecraft:fermented_spider_eye'}
    ],"none")

    ferment([
        { item: 'culturaldelights:cucumber'},
        { item: 'culturaldelights:cucumber'},
        { item: 'culturaldelights:cucumber'},
        { item: 'culturaldelights:cucumber'},
        { item: 'culturaldelights:salt'},    
        { type: 'fluid_stack', fluid: 'kubejs:vinegar', amount: 250 }
    ], 
    [
        {id: 'culturaldelights:pickle'},
        {id: 'culturaldelights:pickle'},
        {id: 'culturaldelights:pickle'},
        {id: 'culturaldelights:pickle'}

    ],"none")


    ferment([
        { tag:   'c:mushrooms/sculk'   },
        { item:  'culturaldelights:salt'},      
        { type: 'fluid_stack', fluid: 'minecraft:milk', amount: 1500 }
    ], 
    [
        {
         id: 'culturaldelights:cheese_wheel',
        }
    ],"none")



})