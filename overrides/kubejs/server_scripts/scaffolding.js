ServerEvents.recipes(event => {
 event.remove({output:'nomansland:wooden_scaffolding'})
 event.remove({output:'minecraft:scaffolding'})
 
 event.shapeless(
  Item.of('nomansland:wooden_scaffolding', 2), 
  [
    'minecraft:stick',
    'minecraft:stick', 	       
    'farmersdelight:rope'
  ]
 )

 event.shapeless(
  Item.of('minecraft:scaffolding', 2), 
  [
    'minecraft:bamboo',
    'minecraft:bamboo', 	       
    'farmersdelight:canvas'
  ]
 )
})
