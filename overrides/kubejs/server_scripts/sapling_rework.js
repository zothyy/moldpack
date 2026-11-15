    const tree = [
       [ 'minecraft','oak'],
       [ 'nomansland','autumnal_oak'],
       [ 'minecraft','dark_oak'],
       [ 'nomansland','pale_cherry'],
       [ 'minecraft','cherry'],
       [ 'nomansland','willow'],
       [ 'nomansland','walnut'],
       [ 'nomansland','maple'],
       [ 'nomansland','red_maple'],
       [ 'minecraft','acacia'],
       [ 'minecraft','jungle'],
       [ 'minecraft','spruce'],
       [ 'nomansland','pine'],
       [ 'minecraft','birch'],
       [ 'nomansland','yellow_birch']
    ]
tree.forEach(([modid, type]) => {
    ServerEvents.recipes(event => {

       event.shaped(
            Item.of(`${modid}:${type}_sapling`),
            [
                'L',
                'S'
            ],
            {
                L: `${modid}:${type}_leaves`,
                S: 'minecraft:stick'
            }
            )
    })
    LootJS.lootTables(event => {
        event.getLootTable(`${modid}:blocks/${type}_leaves`).firstPool().removeItem(`${modid}:${type}_sapling`)
    })
})

const azalea = [
      [ 'minecraft','azalea'] ,
      [ 'minecraft','flowering_azalea']
      ]


azalea.forEach(([modid, type]) => {

    ServerEvents.recipes(event => {

       event.shaped(
            Item.of(`${modid}:${type}`),
            [
                'L',
                'S'
            ],
            {
                L: `${modid}:${type}_leaves`,
                S: 'minecraft:stick'
            }
            )
    })
    LootJS.lootTables(event => {
        event.getLootTable(`${modid}:blocks/${type}_leaves`).firstPool().removeItem(`${modid}:${type}`)
    })

})
