ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('kubejs:eye_of_flames', 1), // Main output, will appear in JEI as the result
      ],
      // Input:
      'caverns_and_chasms:spinel', 
      // Sequence:
      [
        // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
        event.recipes.create.filling('minecraft:fire_charge', ['minecraft:fire_charge', Fluid.of('dimensional_tears:dimensional_tears', 500)]),
        event.recipes.create.filling('minecraft:fire_charge', ['minecraft:fire_charge', Fluid.of('slag:molten_gold', 500)]),
        event.recipes.create.cutting('minecraft:fire_charge', 'minecraft:fire_charge'),
      ]
    )
    .transitionalItem('minecraft:fire_charge') // Set the transitional item
    .loops(1) // Set the number of loop
 })