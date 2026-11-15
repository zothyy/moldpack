ServerEvents.recipes(event => {
  const forms = (tag, amount) => {
    const metals = [
    'lead', 
    'copper'
    ]
    metals.forEach((metal) => {   
    var results = [ Fluid.of('slag:molten_' + metal , amount)]

    event.custom({
       type: 'createdieselgenerators:basin_fermenting',
       ingredients:[ {tag: `c:${tag}/${metal}`}],
       'processing_time': 2400,
       'heat_requirement': "LOWHEATED",
       results: results
    })
  })
}
// forms('dirty_dusts', 72)
 forms('ingots', 72)
 forms('nuggets', 8)
 forms('plates', 72)
 forms('raw_materials', 72)
 forms('wires', 8)
 forms('dusts', 72)
 forms('ores', 108)
})
