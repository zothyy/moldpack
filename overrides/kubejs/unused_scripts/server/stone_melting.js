ServerEvents.recipes(event => {

    const stone_to_ore_table = [
        ['#create:stone_type/veridium','create:crushed_raw_copper'],
        ['#create:stone_type/tuff','#c:nuggets'],
        ['#create:stone_type/ochrum','create:crushed_raw_gold'],
        ['#create:stone_type/crimsite','create:crushed_raw_iron'],
        ['#stonezone:oreganized/glance','create:crushed_raw_lead'],
        ['#create:stone_type/asurine','create:crushed_raw_zinc'],
    ]
    stone_to_ore_table.forEach(([input, output]) => {
        event.remove({output:output, input:input})
    })
    const gold_nugget = [
        'kubejs:raw_gold_nugget',
        'minecraft:gold_nugget'
    ]
    const gold_table = [
        ['minecraft:red_sand','#c:nuggets', 'cookscollection:salt', 'minecraft:dead_bush'],
        ['minecraft:soul_sand','#c:nuggets', 'cookscollection:salt', 'minecraft:quartz'],
    ]
    gold_table.forEach(([input, oldoutput, newoutput1, newoutput2]) => {
        event.remove({output:oldoutput, input:input})
        event.recipes.create.splashing([CreateItem.of(newoutput2, 0.12), CreateItem.of(newoutput1, 0.05)], input  )
    })
    stone_to_ore_table.forEach(([input, output]) => {
        event.remove({output:output, input:input})
    })
    event.remove({input:'#create:stone_types/tuff', output:'minecraft:flint'})
    const stone_processing_table = [
        ['create:veridium','create:crushed_raw_copper', 'kubejs:raw_copper_nugget', 'createmetallurgy:dirty_copper_dust', 'create:copper_nugget'],
        ['create:ochrum','create:crushed_raw_gold', 'kubejs:raw_gold_nugget', 'createmetallurgy:dirty_gold_dust', 'minecraft:gold_nugget'],
        ['create:crimsite','create:crushed_raw_iron', 'kubejs:raw_iron_nugget', 'createmetallurgy:dirty_iron_dust', 'minecraft:iron_nugget'],
        ['minecraft:diorite','create:crushed_raw_lead', 'kubejs:raw_lead_nugget', 'kubejs:dirty_lead_dust', 'modestmining:lead_nugget'],
        ['create:asurine','create:crushed_raw_zinc', 'kubejs:raw_zinc_nugget', 'createmetallurgy:dirty_zinc_dust', 'create:zinc_nugget'],
    ]
    stone_processing_table.forEach(([stone, crushed_ore, raw_nugget, dust]) => {
        event.remove({input:stone, output:dust})
        event.remove({input:stone, output:raw_nugget})
        event.remove({input:stone, output:crushed_ore})
        
        // too lazy to figure anything else out so this will do lmao
        event.recipes.create.compacting([Item.of(raw_nugget, 3), CreateItem.of(dust, 0.25), dust, CreateItem.of(dust, 0.5)], [stone, crushed_ore, Fluid.of('minecraft:lava', 250)]).heated
    })

})
// todo: tuff processes with every ore at less efficiency, more ore gain on special variants of silver, tin, spinel, lead
