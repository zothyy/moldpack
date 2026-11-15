//priority: 2
ServerEvents.tags('item', event => {

  event.add('electroenergetics:wire_cutters', 'minecraft:shears')
  event.add('c:dirty_dusts/silver', 'kubejs:dirty_silver_dust')
  event.add('c:dusts/silver', 'kubejs:silver_dust')
  event.add('create:crushed_raw_materials', 'kubejs:crushed_ancient_scrap')

  event.add('caverns_and_chasms:cave_growths', [
  'caverns_and_chasms:cave_growths',
  'caverns_and_chasms:lurid_cave_growths',
  'caverns_and_chasms:wispy_cave_growths',
  'caverns_and_chasms:grainy_cave_growths',
  'caverns_and_chasms:weird_cave_growths',
  'caverns_and_chasms:zesty_cave_growths' 
  ])

  event.add('c:dirty_dusts/lead', 'kubejs:dirty_lead_dust')
  event.add('c:dusts/lead', 'kubejs:lead_dust')

  event.remove('c:ropes', 'supplementaries:rope')
  event.add('c:iron_melting_ingot', [
    '#c:ingots/iron',
  ])
  event.add('c:iron_melting_block', [
    'minecraft:iron_block',
  ])
  event.add('c:iron_melting_nugget', [
    '#c:nuggets/iron',
  ])
  event.add('kubejs:alloyable_andesites', [
    'minecraft:andesite',
  ])
  event.add('createmetallurgy:graphite_molds', [
    'kubejs:graphite_sword_blade_mold',
    'kubejs:graphite_axe_head_mold',
    'kubejs:graphite_pickaxe_head_mold',
    'kubejs:graphite_shovel_head_mold',
    'kubejs:graphite_hoe_head_mold',
  ])
  
  event.add('kubejs:metal_nugget', [
    '#c:nuggets/iron',
    '#c:nuggets/zinc',
    '#c:nuggets/lead',
    'caverns_and_chasms:tin_nugget',
  ])
  
  event.add('c:ingots', 'minecraft:brick')
  event.add('kubejs:metal_ingot', [
    '#c:ingots/iron',
    '#c:ingots/zinc',
    '#c:ingots/lead',
    'caverns_and_chasms:tin_ingot',
  ])
  
  event.add('kubejs:metal_block', [
    'minecraft:iron_block',
    'create:zinc_block',
    'oreganized:lead_block',
    'caverns_and_chasms:tin_block',
  ])
  
  event.add('kubejs:metal_sheet', [
    'create:iron_sheet',
    'kubejs:lead_sheet',
    'caverns_and_chasms:tinplate',
    'kubejs:zinc_sheet'
  ])

  event.add('c:chains', [ 'oxide:heavy_iron_chain', 'oxide:weathered_heavy_iron_chain', 'oxide:rusted_heavy_iron_chain'])
  event.add('c:plates', 'caverns_and_chasms:tinplate')
  event.add('c:plates/tin', 'caverns_and_chasms:tinplate')
  event.remove('c:wax', 'caverns_and_chasms:tinplate')


  event.add('c:wires', [ 
  'electroenergetics:iron_wire',
  'electroenergetics:copper_wire',
  'electroenergetics:electrum_wire'
  ])
  
  event.add('c:screws', 'modestmining:copper_screw')
  event.add('c:screws/copper', 'modestmining:copper_screw')
  
  event.add('c:mushrooms/sculk',  [
  'minecraft:sculk_vein',
  'minecraft:sculk',
  'minecraft:sculk_sensor',
  ])

  event.add('c:mushrooms',  [
  '#nomansland:edible_mushrooms',
  'minecraft:glow_lichen',
  'minecraft:sculk_vein',
  'minecraft:sculk',
  'minecraft:sculk_sensor',
  'minecraft:mushroom_stem',
  'minecraft:brown_mushroom_block',
  'minecraft:red_mushroom_block',
  'nomansland:field_mushroom_block',
  'nomansland:shelf_mushroom_block',
  '#minecraft:wart_blocks',
  'minecraft:nether_wart',
  'minecraft:warped_fungus',
  'minecraft:crimson_fungus',
  'minecraft:warped_roots',
  'minecraft:crimson_roots',
  'minecraft:crimson_fungus',
  'minecraft:weeping_vines',
  'minecraft:twisting_vines',
  'nomansland:field_mushroom_colony',
  'farmersdelight:red_mushroom_colony',
  'farmersdelight:brown_mushroom_colony',
  'nomansland:mycelium_sprouts',
  'nomansland:mycelium_growths',
  '#caverns_and_chasms:cave_growths'
  ])
  event.add('c:mushrooms/overworld',  [
  '#nomansland:edible_mushrooms',
  'minecraft:glow_lichen',
  'minecraft:mushroom_stem',
  'minecraft:brown_mushroom_block',
  'minecraft:red_mushroom_block',
  'nomansland:field_mushroom_block',
  'nomansland:shelf_mushroom_block',
  'minecraft:red_mushroom',
  'minecraft:brown_mushroom',
  'nomansland:field_mushroom_colony',
  'farmersdelight:red_mushroom_colony',
  'farmersdelight:brown_mushroom_colony',
  'nomansland:mycelium_sprouts',
  'nomansland:mycelium_growths',
  '#caverns_and_chasms:cave_growths'
  ])
  event.add('c:mushrooms/nether',  [
  '#minecraft:wart_blocks',
  'minecraft:nether_wart',
  'minecraft:warped_fungus',
  'minecraft:crimson_fungus',
  'minecraft:warped_roots',
  'minecraft:crimson_roots',
  'minecraft:crimson_fungus',
  'minecraft:weeping_vines',
  'minecraft:twisting_vines'
  ])
  event.add('c:torches',  [
  'minecraft:torch',
  'minecraft:soul_torch',
  'minecraft:redstone_torch',
  'caverns_and_chasms:cupric_torch'
  ])
  event.add('moldpack:corn_kernels', [
  'minecraft:chorus_fruit',
  'culturaldelights:corn_kernels'
  ])

})
ServerEvents.tags('block', event => {
  const needs_stone = [
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:redstone_ore',
    'minecraft:deepslate_redstone_ore',
  ]
  event.remove('minecraft:needs_iron_tool', needs_stone)
  event.add('minecraft:needs_stone_tool', needs_stone)

  event.add('c:torches',  [
  'minecraft:torch',
  'minecraft:soul_torch',
  'minecraft:redstone_torch',
  'caverns_and_chasms:cupric_torch'
  ])


  const needswoodentool = [
    'minecraft:copper_ore',
    'minecraft:copper_block',
    'minecraft:raw_copper_block'
  ]
  event.remove('minecraft:needs_stone_tool', needswoodentool)

  event.add('minecraft:infiniburn_end', 'createmetallurgy:wolframite_ore')
  event.add('minecraft:infiniburn_overworld', 'createmetallurgy:wolframite_ore')
  event.add('caverns_and_chasms:cupric_fire_base_blocks', 'createmetallurgy:wolframite_ore')
  event.add('minecraft:infiniburn_nether', 'createmetallurgy:wolframite_ore')
  event.add('c:chains', [ 'oxide:heavy_iron_chain', 'oxide:weathered_heavy_iron_chain', 'oxide:rusted_heavy_iron_chain'])
})
ServerEvents.tags('fluid', event => {
 event.add('create:bottomless/allow', 'dimensional_tears:dimensional_tears')


})
