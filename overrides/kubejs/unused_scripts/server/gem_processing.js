ServerEvents.recipes(event => {
    
    const roughGems = [
        ['minecraft:diamond', 'spelunkery:rough_diamond'],
        ['minecraft:emerald', 'spelunkery:rough_emerald'],
    ]

    roughGems.forEach(([output, rough]) => {
        event.remove({output:output, type:'create:crushing'})
        event.recipes.create.sequenced_assembly(
            [CreateItem.of(output)],
            rough,
            [
                event.recipes.createmetallurgy.grinding(rough, rough),
                event.recipes.create.pressing(rough, rough),
                event.recipes.create.pressing(rough, rough),
            ]
        )
        .transitionalItem(rough)
        .loops(1)
    })
})
