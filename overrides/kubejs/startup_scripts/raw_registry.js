StartupEvents.registry("item", event => {

const raw_registry = (material, ore, crushed, nugget,  dust) => {

 if (ore ==  'true') {
   event.create(`raw_${material}`).tag(`c:raw_materials/${material}`)
 }
 if (crushed ==  'true') {
   event.create(`crushed_raw_${material}`).tag(`create:crushed_raw_materials`)
 }
 if (nugget ==  'true') {
   event.create(`raw_${material}_nugget`).tag(`c:nuggets/raw/${material}`)
 }
 if (dust ==  'true') {
   event.create(`${material}_dust`).tag(`c:dusts/${material}`)
 }

}

raw_registry('copper', 'false', 'false', 'true',  'false')
raw_registry('gold', 'false', 'false', 'true', 'false')
raw_registry('iron', 'false', 'false', 'true', 'false')
raw_registry('zinc', 'false', 'false', 'true', 'true')
raw_registry('tungsten', 'true', 'true', 'true', 'true')
raw_registry('tin', 'false', 'false', 'true', 'true')
raw_registry('lead', 'false', 'false', 'true','false')
raw_registry('silver', 'false', 'false', 'true', 'true')

// ancient debris registry
//crushed
event.create('crushed_ancient_scrap').tag('create:crushed_raw_materials')
//nugget
event.create('ancient_nugget').tag('c:nuggets/raw/ancient')



})
