//priority: 1
ServerEvents.recipes(event => {

    //removing recipes
    event.remove({ id:'createdieselgenerators:basin_fermenting/fermented_spider_eye'})
    event.remove({ id:'createdieselgenerators:basin_fermenting/fermentable'})
    event.remove({ id:'createdieselgenerators:bulk_fermenting/fermentable'})
    
    event.remove({ output:'minecraft:note_block'})
    event.remove({ output:'supplementaries:speaker_block'})
    event.remove({ output:'minecraft:jukebox'})
    event.remove({ type:'modestmining:forging'})
    event.remove({ type:'modestmining:forging_shaped'})
    event.remove({ type:'createdieselgenerators:hammering'}) 

    event.remove({output:'modestmining:forge'})
    event.remove({ output:'#minecraft:campfires'})
    event.remove({output:'minecraft:soul_campfire'})
    event.remove({output:'minecraft:campfire'})
    event.remove({output:'caverns_and_chasms:cupric_campfire'})
    event.remove({ output:'artistry:poster'})
    event.remove({ output:'hearthandharvest:sausage'})
    event.remove({output:"caverns_and_chasms:lapis_bricks"})

    event.remove({ id: 'minecraft:smoker'})

    event.remove({ id: 'minecraft:redstone_torch'})
    event.remove({ id: 'minecraft:soul_torch'})
    event.remove({ id: 'minecraft:torch'})
    event.remove({ id: 'caverns_and_chasms:cupric_torch'})

    event.remove({ id: 'farmersdelight:wheat_dough_from_water' })
    event.remove({ id: 'minecraft:red_dye_from_beetroot' })
    event.remove({ id: 'spelunkery:lapis_lazuli_shard'})
    event.remove({ id: 'nomansland:polished_deepslate'})
    event.remove({ id: 'hearthandharvest:cooking/glazed_carrots'})
    event.remove({ id: 'createmetallurgy:alloying/electrum'})

    event.remove({ mod:'create_extra_casing'})
    event.remove({ type:'modestmining:milling'})
    event.remove({ input:'#modestmining:hammers'})

    event.remove({ output:'#minecraft:stairs', not: {mod:'deimos'}})

    event.remove({ output: 'farmersdelight:wheat_dough'})
    event.remove({ input: 'minecraft:sand', output: 'minecraft:clay_ball', type: 'create:splashing' })
    event.remove({ input: 'minecraft:gravel', output: 'minecraft:flint', type: 'create:splashing' })
    event.remove({ output: 'minecraft:flint_and_steel'})
    event.remove({ output: 'simulated:rope_coupling'})
    event.remove({ output: 'farmersdelight:canvas'})
    event.remove({ output: 'minecraft:anvil'})
    event.remove({ type: 'minecraft:blasting'})
    event.remove({ output: 'minecraft:bread', type:'minecraft:crafting_shaped'})
    event.remove({ output: 'create:rose_quartz'})
    event.remove({ output: 'createmetallurgy:ghast_transfer_ladle'})

    event.remove({ input: 'minecraft:gold_ingot', output: 'minecraft:netherite_ingot'})

    event.remove({ output: 'caverns_and_chasms:tin_ingot', type: 'minecraft:smelting'})
    event.remove({ output: 'create:brass_ingot', type: 'create:mixing'})
    event.remove({ output: '#minecraft:trim_materials', type:'create:mixing'})

    event.remove({ output: 'create:fluid_tank'})
    event.remove({ output: 'minecraft:furnace'})
    event.remove({ output: 'farmersdelight:stove'})
    event.remove({ output: 'createmetallurgy:sandpaper_belt'})


    event.remove({ output: 'dungeonsdelight:dungeon_stove'})

    event.remove({ output: 'nomansland:thatch', input:'minecraft:wheat'})
    event.remove({ output: 'nomansland:straw_bed'})

    event.remove({ output: 'minecraft:stone_sword'})
    event.remove({ output: 'minecraft:stone_pickaxe'})
    event.remove({ output: 'minecraft:stone_axe'})
    event.remove({ output: 'minecraft:stone_shovel'})
    event.remove({ output: 'minecraft:stone_hoe'})

    event.remove({ output: 'minecraft:barrel'})

    event.remove({ output: 'createmetallurgy:graphite'})
   event.remove({ output: '#c:ingots', type: 'minecraft:smelting', not: { output: 'minecraft:brick', output: 'minecraft:copper_ingot', output: 'caverns_and_chasms:silver_ingot', output: 'minecraft:gold_ingot', output: 'modestmining:lead_ingot' } })
    event.remove({ output: '#c:nuggets', type: 'minecraft:smelting', not: { output: 'minecraft:copper_nugget' , output: 'caverns_and_chasms:silver_nugget', output: 'minecraft:gold_nugget', output: 'modestmining:lead_nugget'} })

    event.remove({ output: 'create:sturdy_sheet'})
    event.remove({ output:'minecraft:lodestone', mod:'spelunkery'})

    event.remove({ output: 'minecraft:andesite_alloy'})

    event.remove({ output: 'caverns_and_chasms:tinplate'})

    event.remove({ output: 'hearthandharvest:waffle'})


    event.remove({ output: 'minecraft:bundle'})
    event.remove({ output: 'minecraft:glass_bottle'})

    event.remove({ output: '#minecraft:campfires'})
    event.remove({ output:Fluid.of('aeronautics:levitite_blend')})

    event.remove({ output:'minecraft:chest'})
})
