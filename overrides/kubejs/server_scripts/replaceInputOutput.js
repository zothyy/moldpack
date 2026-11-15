//priority: 2
ServerEvents.recipes(event => {

    event.replaceOutput(
    { output:'create:dough'},
    'create:dough',
    'farmersdelight:wheat_dough'
    )

    
    event.replaceInput(
    { output:'#c:armors', mod:'caverns_and_chasms'},
    'minecraft:copper_block',
    '#c:ingots/copper'
    )


    event.replaceInput(
    { output:'#c:tools', mod:'caverns_and_chasms'},
    'minecraft:copper_block',
    '#c:ingots/copper'
    )
    


    event.replaceInput(
    { input:'#c:mushrooms'},
    '#c:mushrooms',
    '#nomansland:edible_mushrooms'
    )


    event.replaceInput(
    { input:'minecraft:bone_meal'},
    'minecraft:bone_meal',
    'minecraft:bone'
    )


    event.replaceInput(
    { id:'caverns_and_chasms:diamond_lamp'},
    'minecraft:diamond',
    'modestmining:diamond_shard'
    )


    event.replaceInput(
    { input:'create:dough'},
    'create:dough',
    'farmersdelight:wheat_dough'
    )

    event.replaceInput(
    { output:'minecraft:sugar'},
    'minecraft:sugar_cane',
    'minecraft:beetroot'
    )

    event.replaceInput(
    { input:'minecraft:iron_ingot', type:'slag:melting'},
    'minecraft:iron_ingot',
    '#c:iron_melting_ingot'
    )

    event.replaceInput(
    { input:'minecraft:iron_nugget', type:'slag:melting'},
    'minecraft:iron_nugget',
    '#c:iron_melting_nugget'
    )

    event.replaceInput(
    { output:'simulated:throttle_lever'},
    'simulated:throttle_lever',
    'createdieselgenerators:kelp_handle'
    )


    event.replaceInput(
    { input:'minecraft:iron_block', type:'slag:melting'},
    'minecraft:iron_block',
    '#c:iron_melting_block'
    )

    event.replaceInput(
    { output:'minecraft:shield'},
    'minecraft:iron_ingot',
    'minecraft:copper_ingot'
    )

    event.replaceInput(
    { output:'get_creative:clockwork_motor'},
    'minecraft:clock',
    'simulated:spring'
    )

    event.replaceInput(
    { output:'get_creative:empty_breeze_whirler'},
    'minecraft:breeze_rod',
    'minecraft:snowball'
    )

    event.replaceInput(
    { output:'createdieselgenerators:oil_scanner'},
    'minecraft:clock',
    'caverns_and_chasms:depth_gauge'
    )


    event.replaceInput(
    { output:'simulated:altitude_sensor'},
    'minecraft:paper',
    'caverns_and_chasms:depth_gauge'
    )

    event.replaceInput(
    { output:'minecraft:cauldron'},
    'minecraft:iron_ingot',
    'create:andesite_alloy'
    )

    event.replaceInput(
    { output:'create:mechanical_press'},
    'minecraft:iron_block',
    'create:andesite_alloy_block'
    )

    event.replaceInput(
    { input:'farmersdelight:rope'},
    'farmersdelight:rope',
    '#c:ropes'
    )

    event.replaceInput(
    { output: 'minecraft:stonecutter'},
    'minecraft:iron_ingot',
    'create:iron_sheet'
    )

    event.replaceInput(
    { output:'nomansland:thatch'},
    'nomansland:dried_grass',
    'farmersdelight:straw'
    )

    event.replaceInput(
    { output:'create:item_hatch'},
    'minecraft:iron_trapdoor',
    'caverns_and_chasms:hoop'
    )

    event.replaceInput(
    { output:'createdieselgenerators:basin_lid'},
    'minecraft:clock',
    'create:andesite_alloy'
    )

    event.replaceInput(
    { output:'minecraft:cake'},
    'minecraft:carrot',
    'minecraft:sugar'
    )

})

