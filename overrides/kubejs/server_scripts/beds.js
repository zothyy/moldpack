ServerEvents.recipes(event => {
    event.remove({ output:'#minecraft:beds', not: {input:'supplementaries:soap'}})

    Color.DYE.forEach(color => {
        event.shaped(
        Item.of(`minecraft:${color}_bed`),
        [
            'WWW',
            'PNP'
        ],
        {
            N: 'minecraft:iron_nugget',
            W: `${color}_wool`,
            P: '#minecraft:planks'
        }
        )
    })
})
