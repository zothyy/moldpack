LootJS.modifiers(event => {
// the mod is referring to the output
 const smelt = (type, material, mod) => {
  if (type == 'vanilla') {
  event.addBlockModifier(`#minecraft:${material}_ores`)
    .matchMainHand(ItemFilter.hasEnchantment("minecraft:fire_aspect"))
    .removeLoot(Ingredient.all)
    .addLoot(`${mod}:${material}_ingot`)
  } else {
   event.addBlockModifier(`#c:ores/${material}`)
    .matchMainHand(ItemFilter.hasEnchantment("minecraft:fire_aspect"))
    .removeLoot(Ingredient.all)
    .addLoot(`${mod}:${material}_ingot`)
  }
 }
 smelt('vanilla','iron', 'minecraft')
 smelt('modded', 'tin', 'caverns_and_chasms')
 smelt('modded', 'zinc', 'create')
// smelt('modded', 'tungsten', 'createmetallurgy')
})
