ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('create:sturdy_sheet'), // Main output, will appear in JEI as the result
        ],
        // Input:
        'create:powdered_obsidian',
        // Sequence:
        [
            event.recipes.create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of('dimensional_tears:dimensional_tears', 250)]),
            event.recipes.create.pressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
            event.recipes.create.pressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
        ]
    ).transitionalItem('create:unprocessed_obsidian_sheet')
})
