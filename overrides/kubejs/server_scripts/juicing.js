ServerEvents.recipes(event => {
  const juicing = (bulkinput, input, output) => {
   event.recipes.create.compacting( Fluid.of(output, 100), input)
   event.recipes.create.compacting( Fluid.of(output, 900), bulkinput)
     
  }

  juicing('nomansland:pear_crate', 'nomansland:pear', 'kubejs:pear_juice')
  juicing('nomansland:apple_crate', 'minecraft:apple', 'kubejs:apple_juice')
  juicing('kubejs:sweet_berry_bag', 'minecraft:sweet_berries', 'kubejs:sweet_berry_juice')
  juicing('kubejs:glow_berry_bag', 'minecraft:glow_berries', 'kubejs:glow_berry_juice')
  juicing('culturaldelights:lemon_crate', 'culturaldelights:lemon', 'kubejs:lemon_juice')
  juicing('minecraft:melon', 'minecraft:melon_slice', 'kubejs:melon_juice')
})