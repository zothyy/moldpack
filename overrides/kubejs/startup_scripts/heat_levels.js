CreateHeatJS.registerHeatEvent(event => {
  const campfire = Block.getBlock('minecraft:campfire');
  const litProperty = campfire.getStateDefinition().getProperty('lit');
  
  event.registerHeat("LOWHEATED", builder => builder
    .color(0xFF4500)
    .addHeatSourceIf(
      (level, pos) => {
        const state = level.getBlockState(pos);
        if (state.getBlock() === campfire && state.getValue(litProperty)) {
          return true;
        }
        return false;
      },
      'minecraft:campfire'
    )
  )
  event.registerHeat("CHILLING", builder => builder
        .color(0x00BFFF)
        .addHeatSource("#minecraft:ice")
  )
})