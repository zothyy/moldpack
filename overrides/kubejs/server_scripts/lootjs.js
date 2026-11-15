ServerEvents.recipes(event => {
    event.replaceInput(
    { input:'minecraft:rabbit_hide'},
    'minecraft:rabbit_hide',
    'minecraft:leather'
    )
})

LootJS.modifiers(event => {
    event
        .addTableModifier(LootType.ENTITY)
        .replaceLoot("minecraft:rabbit_hide", "minecraft:leather", true)
})
LootJS.lootTables(event => {

    const REPLACE_MAP = {
        'create:copper_nugget': 'kubejs:raw_copper_nugget',
        'minecraft:iron_nugget':   'kubejs:raw_iron_nugget',
        'minecraft:gold_nugget':   'kubejs:raw_gold_nugget',
        'modestmining:lead_nugget':  'kubejs:raw_lead_nugget',
        'create:zinc_nugget':  'kubejs:raw_zinc_nugget',
        'minecraft:copper_ingot': 'minecraft:raw_copper',
        'minecraft:iron_ingot':   'minecraft:raw_iron',
        'minecraft:gold_ingot':   'minecraft:raw_gold',
        'modestmining:lead_ingot':  'modestmining:raw_lead',
        'create:zinc_ingot':  'create:raw_zinc',
    }
    const chestAndUrn = event.modifyLootTables([/.*:chests\/.*/])
    Object.entries(REPLACE_MAP).forEach(([from, to]) => {
        chestAndUrn.replaceItem(from, to)
    })
})
