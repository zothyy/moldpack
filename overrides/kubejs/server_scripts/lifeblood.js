ServerEvents.recipes(event => {
  event.recipes.create.filling('kubejs:lifeblood_bottle', [Fluid.of('kubejs:life_blood', 250), 'minecraft:glass_bottle'])
  event.recipes.create.emptying([Fluid.of('kubejs:life_blood', 250), 'minecraft:glass_bottle'], 'kubejs:lifeblood_bottle')
  event.shapeless(
    Item.of('kubejs:lifeblood_bottle'),
                  [
                  'minecraft:yellow_dye'
                  ]
  )
})
ItemEvents.foodEaten('kubejs:lifeblood_bottle', event => {
const { item, level, player } = event;
//event.level.runCommand('execute in minecraft:the_nether run tp @s ~ ~ ~')
  player.teleportToLevel(event.server.getLevel('minecraft:the_nether'))
})