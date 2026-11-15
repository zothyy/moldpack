ServerEvents.tags('block', event => {
  const needs_stone = [
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:redstone_ore',
    'minecraft:deepslate_redstone_ore',
  ]
  event.remove('minecraft:needs_iron_tool', needs_stone)
  event.add('minecraft:needs_stone_tool', needs_stone)

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
  event.add('c:ores/wolframite', 'createmetallurgy:wolframite_ore')

  event.add('c:chains', [ 'oxide:heavy_iron_chain', 'oxide:weathered_heavy_iron_chain', 'oxide:rusted_heavy_iron_chain'])

  event.add('kubejs:molten_smeltable', [
   'minecraft:iron_ore',
   'minecraft:deepslate_iron_ore'
  ])
})

