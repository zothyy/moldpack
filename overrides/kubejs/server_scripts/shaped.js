ServerEvents.recipes(event => {

    //shaped recipes
    event.shaped(
    Item.of('kubejs:sweet_berry_bag'),
    [
        'SSS',
        'SSS',
        'SSS',
    ],
    {
        S: 'minecraft:sweet_berries'
    }
    )
    event.shaped(
    Item.of('kubejs:glow_berry_bag'),
    [
        'SSS',
        'SSS',
        'SSS',
    ],
    {
        S: 'minecraft:glow_berries'
    }
    )

    event.shaped(
    Item.of('nomansland:thatch', 3),
    [
        'SS',
        'SS'
    ],
    {
        S: 'farmersdelight:straw'
    }
    )

    event.shaped(
    Item.of('minecraft:campfire'),
    [
        'SS',
        'WW'
    ],
    {
        W: '#minecraft:logs',
        S: 'minecraft:stick'
    }
    )
    
    event.shaped(
    Item.of('minecraft:soul_campfire'),
    [
        'SS',
        'WW'
    ],
    {
        W: '#minecraft:logs',
        S: 'minecraft:soul_sand'
    }
    )
    
    event.shaped(
    Item.of('caverns_and_chasms:cupric_campfire'),
    [
        'SS',
        'WW'
    ],
    {
        W: '#minecraft:logs',
        S: 'create:copper_nugget'
    }
    )
    
    event.shaped(
    Item.of('farmersdelight:canvas'),
    [
        'SS'
    ],
    {
        S: 'farmersdelight:straw'
    }
    )
    
    event.shaped(
    Item.of('minecraft:shears'),
    [
        ' S',
        'S '
    ],
    {
        S: '#minecraft:planks'
    }
    )

    event.shaped(
    Item.of('simulated:rope_coupling'),
    [
        'NRN'
    ],
    {
        N: '#kubejs:metal_nugget',
        R: '#c:ropes'
    }
    )
    
    event.shaped(
    Item.of('create:fluid_tank'),
    [
        'P',
        'G',
        'P'
    ],
    {
        P: '#c:plates/copper',
        G: '#c:glass_blocks'
    }
    )
    
    event.shaped(
    Item.of('minecraft:glass_bottle'),
    [
        'B',
        'G'
    ],
    {
        B: '#minecraft:wooden_buttons',
        G: '#c:glass_blocks'
    }
    )

    event.shaped(
    Item.of('minecraft:chest'),
    [
        'PPP',
        'PNP',
        'PPP'
    ],
    {
        P: '#minecraft:planks',
        N: '#kubejs:metal_nugget'
    }
    )

    event.shaped(
    Item.of('caverns_and_chasms:cupric_torch', 4),
    [
     'C',
     'S'
    ],
    {
        C: 'create:copper_nugget',
        S: 'minecraft:stick'
    }
    )
 
    event.shaped(
    Item.of('minecraft:redstone_torch', 4),
    [
     'C',
     'S'
    ],
    {
        C: 'minecraft:redstone',
        S: 'minecraft:stick'
    }
    )
 
    event.shaped(
    Item.of('minecraft:soul_torch', 4),
    [
     'C',
     'S'
    ],
    {
        C: '#minecraft:soul_fire_base_blocks',
        S: 'minecraft:stick'
    }
    )
 
    event.shaped(
    Item.of('minecraft:torch', 4),
    [
     'C',
     'S'
    ],
    {
        C: '#minecraft:coals',
        S: 'minecraft:stick'
    }
    )
    
    event.shaped(
    Item.of('create:andesite_alloy', 1),
    [
        'NA',
        'AN'
    ],
    {
        N: 'kubejs:raw_iron_nugget',
        A: 'minecraft:andesite'
    }
    )
    
    event.shaped('minecraft:barrel', [
        'PSP',
        'PNP',
        'PSP'
    ], {
        P: '#minecraft:planks',
        S: '#minecraft:wooden_slabs',
        N: '#kubejs:metal_nugget'
    })

    event.shaped(
    Item.of('minecraft:bundle'),
    [
     'S',
     'L'
    ],
    {
        S: 'minecraft:string',
        L: 'minecraft:leather'
    }
    
    )
    event.shaped(
    Item.of('minecraft:anvil'),
    [
     'IBI',
     ' I ',
     'III'
    ],
    {
        B: '#kubejs:metal_block',
        I: '#kubejs:metal_ingot'
    }
    )
    
})