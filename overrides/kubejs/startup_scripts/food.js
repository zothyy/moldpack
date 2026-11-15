let $FoodBuilder = Java.loadClass('dev.latvian.mods.kubejs.item.FoodBuilder')

ItemEvents.modification(event => {

    //Example of editing food values. All methods of FoodBuilder works here (except for eaten() due to a bug in KubeJS itself)
    // https://github.com/KubeJS-Mods/KubeJS/blob/2101/src/main/java/dev/latvian/mods/kubejs/item/FoodBuilder.java
    event.modify('kubejs:jam', (item) => {
        let builder = setupFood(item)
        .nutrition(6.0)
        .saturation(saturationFixer(4.0, 3.0)) //Fixes an odd (vanilla) behaviour that will otherwise cause your saturation to be multiplied by Nutrition and then doubled.
        .useAnimation('drink')
        item.setFood(builder.build())
    })
    
    event.modify('kubejs:moonshine', (item) => {
        let builder = setupFood(item)
        .effect('culturaldelights:intoxication', 1200, 1, 1.0)
        .useAnimation('drink')
        item.setFood(builder.build())
    })
})

let setupFood = (i) => {
    //FoodBuilder(properties) is broken as it does NOT apply default Optional.empty for usingConvertsTo, causing crashes when eating modified food
    //So lets do what it's *supposed* to do, manually
    let p = i.get('food')
    let builder = new $FoodBuilder()
    builder.nutrition(p.nutrition())
    .saturation(saturationFixer(p.saturation(), p.nutrition()))
    .alwaysEdible(p.canAlwaysEat())
    .eatSeconds(p.eatSeconds())

    p.effects().forEach(pf => {
        let ef = pf.effectSupplier().get()
        builder.effect(ef.getEffect().unwrapKey().get().location(), ef.getDuration(), ef.getAmplifier(), pf.probability())
    })

    return builder
}

//FoodBuilder.build() calls FoodConstants#saturationByModifier which sets saturation = nutrition * input * 2. We do the reverse to keep original saturation
let saturationFixer = (saturation, nutrition) => {
    return (saturation / nutrition) / 2
}