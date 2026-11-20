ServerEvents.recipes(event => {
  event.recipes.create.filling('kubejs:lifeblood_bottle', [Fluid.of('kubejs:life_blood', 250), 'minecraft:glass_bottle'])
  event.recipes.create.emptying([Fluid.of('kubejs:life_blood', 250), 'minecraft:glass_bottle'], 'kubejs:lifeblood_bottle')

})
ItemEvents.foodEaten('kubejs:lifeblood_bottle', event => {
const { item, level, player } = event;
event.player.runCommandSilent('execute'

})
