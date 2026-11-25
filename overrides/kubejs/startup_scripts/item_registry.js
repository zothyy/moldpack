StartupEvents.registry('item', event => {
  
  event.create('heart_of_ichor', 'eyejs:structure_eye')
    .displayName('Heart of ichor')
    .structures('minecraft:fortress')
    .trailColor(0x1FCC4D)
//bottles
  event.create('lifeblood_bottle').food(food => {
    food
      .effect('caverns_and_chasms:rewind', 12000, 0, 1)
      .alwaysEdible()
  }).useAnimation('drink').maxStackSize(16)

  event.create('jam').food(food => {
    food
      .nutrition(5)
      .saturation(3)
  }).useAnimation('drink')
  event.create('moonshine').food(food => {
    food
      .effect('culturaldelights:intoxication', 1200, 0, 1)
      .alwaysEdible()
  }).useAnimation('drink').maxStackSize(16)

})