const explosiveBlocks = ['createmetallurgy:wolframite_ore']

explosiveBlocks.forEach(explosiveBlock => {
  BlockEvents.broken(explosiveBlock, event => {
    const { block, level } = event
    if (event.block.up == 'caverns_and_chasms:cupric_fire') return
      level.explode(
        /* source: */ null,
        /* x: */ block.x + 0.5,
        /* y: */ block.y + 0.5,
        /* z: */ block.z + 0.5,
        /* radius: */ 3,
        /* shouldSpawnFire: */ true,
        /* explosionInteraction: */ 'none'
      )
  })
})