ServerEvents.recipes(event => {
    
    // pressing
    event.recipes.create.compacting('farmersdelight:wheat_dough', ['create:wheat_flour', Fluid.of('minecraft:water', 100)  ])

    // washing recipes
    event.recipes.create.splashing([CreateItem.of('minecraft:clay_ball', 0.25), CreateItem.of('nomansland:seashells', 0.05), CreateItem.of('minecraft:nautilus_shell', 0.02)], 'minecraft:sand'  )
    event.recipes.create.splashing([CreateItem.of('minecraft:flint', 0.12), CreateItem.of('nomansland:pebbles', 0.25)], 'minecraft:gravel'  )

    // haunting
    event.recipes.create.haunting('minecraft:player_head',  'minecraft:zombie_head')

    // milling
    event.recipes.create.milling(['minecraft:bone_meal', CreateItem.of('minecraft:bone_meal', 0.25)], 'minecraft:nautilus_shell')
    event.recipes.create.milling(['minecraft:bone_meal', CreateItem.of('minecraft:bone_meal', 0.25)], 'nomansland:seashells')
    event.recipes.create.milling(['minecraft:amethyst_shard', CreateItem.of('minecraft:amethyst_shard', 0.5)], 'minecraft:amethyst_block')
    event.recipes.create.milling(['minecraft:quartz', CreateItem.of('minecraft:quartz', 0.5)], 'nomansland:quartzite')
    event.recipes.create.milling([
            CreateItem.of('minecraft:redstone', 1.0),
            CreateItem.of('minecraft:redstone', 0.25),
            CreateItem.of('minecraft:redstone', 0.25),
    ], 'caverns_and_chasms:spinel')


    // crushing

    event.recipes.create.crushing([
         CreateItem.of('minecraft:redstone', 3),
         CreateItem.of('minecraft:redstone', 0.5)
    ], 'caverns_and_chasms:spinel')


    
    event.recipes.create.emptying(
        [Fluid.of('create:honey', 250), 'minecraft:glass_bottle'],
        'minecraft:honey_bottle'
    )

    //mixing
     event.recipes.create.mixing('minecraft:blackstone', 'caverns_and_chasms:flint_block').heated()
     event.recipes.create.mixing('minecraft:totem_of_undying', ['nomansland:warding_effigy', 'create:brass_ingot', 'caverns_and_chasms:turquoise']).superheated()
    
    // alloying
//     event.recipes.createmetallurgy.alloying(Fluid.of('aeronautics:levitite_blend', 500), [Item.of('aeronautics:end_stone_powder', 2), Item.of('create:zinc_nugget'), Fluid.of('minecraft:water', 500) ] ).heated()
  //   event.recipes.createmetallurgy.alloying(Item.of('create:rose_quartz'), [Item.of('caverns_and_chasms:spinel', 1), Item.of('minecraft:quartz', 1) ] ).heated()


    // casting in basin
    // event.recipes.createmetallurgy.casting_in_basin('aeronautics:levitite', Fluid.of('aeronautics:levitite_blend', 1000))
    // event.recipes.createmetallurgy.casting_in_basin('minecraft:stone', Fluid.of('minecraft:lava', 1000))

     
    // item application
    event.recipes.create.item_application('minecraft:furnace', ['minecraft:campfire', 'minecraft:cobblestone'])
    event.recipes.create.item_application('farmersdelight:stove', ['minecraft:campfire', 'minecraft:bricks'])
    event.recipes.create.item_application('modestmining:forge', ['minecraft:campfire', 'minecraft:deepslate'])


    
    event.recipes.create.item_application('create_extra_casing:cyan_casing', [Ingredient.of('#c:stripped_logs'), Ingredient.of('#c:ingots/tungsten')])
    event.recipes.create.item_application('create_extra_casing:red_casing', [Ingredient.of('#c:stripped_logs'), 'modestmining:electrum_ingot'])
})
