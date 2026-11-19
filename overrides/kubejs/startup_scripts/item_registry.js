StartupEvents.registry('item', event => {

  event.create('eye_of_flames')
//bottles
  event.create('lifeblood_bottle').food(food => {
    food
      .effect('caverns_and_chasms:rewind', 600, 0, 1)
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
