ServerEvents.recipes(event => {

    event.replaceInput(
    { input:'create:andesite_alloy', mod:'createdieselgenerators', not:{output:'createdieselgenerators:basin_lid'}},
    'create:andesite_alloy',
    '#c:ingots/tungsten'
    )
})
