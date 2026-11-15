BlockEvents.placed('minecraft:coal_block', event => {
    const { block, level, server } = event
    const pos = block.pos
    const time = 2400 //in ticks (seconds * 20)

    server.scheduleInTicks(time, callback => {
         
         //checking if placed block is that block what we need to replace and checking if the block below is fully grown nether wart
         if (event.block != 'minecraft:coal_block') return
         if (event.block.down != 'minecraft:crimson_fungus') return
         
         //replacing:
         level.setBlock(pos, Block.getBlock('modestmining:coke_block').defaultBlockState(), 3)
         level.setBlock([pos.x, pos.y - 1, pos.z], Block.getBlock('minecraft:crimson_fungus').defaultBlockState(), 3)
         
         
         //particles if you want:
         server.runCommandSilent(`particle minecraft:flame ${pos.x + 0.5} ${pos.y + 1} ${pos.z + 0.5} 0.3 0.3 0.3 0.05 20`)
         
         //sound of ending:
         server.runCommandSilent(`playsound minecraft:block.lava.extinguish block @a ${pos.x} ${pos.y} ${pos.z} 1 1`)
                 
    })
})
BlockEvents.placed('minecraft:crimson_fungus', event => {
    const { block, level, server } = event
    const pos = block.pos
    const time = 2400 //in ticks (seconds * 20)

    server.scheduleInTicks(time, callback => {
         
         //checking if placed block is that block what we need to replace and checking if the block below is fully grown nether wart
         if (event.block.up != 'minecraft:coal_block') return
         if (event.block != 'minecraft:crimson_fungus') return
         
         //replacing:
         level.setBlock([pos.x, pos.y + 1, pos.z], Block.getBlock('modestmining:coke_block').defaultBlockState(), 3)
         level.setBlock([pos.x, pos.y, pos.z], Block.getBlock('minecraft:crimson_fungus').defaultBlockState(), 3)

         
         //particles if you want:
         server.runCommandSilent(`particle minecraft:flame ${pos.x + 1.5} ${pos.y + 2} ${pos.z + 1.5} 0.3 0.3 0.3 0.05 20`)
         
         //sound of ending:
         server.runCommandSilent(`playsound minecraft:block.lava.extinguish block @a ${pos.x + 1} ${pos.y + 1} ${pos.z + 1} 1 1`)
                 
    })
})

