ServerEvents.recipes(event => {

const ore_processing = (material, modidore, modidnugget, modidcrushed, modiddust, modidblock, stonetype, byproduct) => {

var ore
var nugget
var crushed
var dirty_dust
var dust
var block 


// ancient scraps and parts of tungsten are hardcoded as they do not fit the same syntax as the rest of the script
if (material == 'ancient') {
 ore = `${modidore}:netherite_scrap`
 nugget = `${modidnugget}:${material}_nugget`
 crushed = `${modidcrushed}:crushed_${material}_scrap`
 dust = `${modiddust}:debris_dust`
 block = `${modidblock}:${material}_debris`
} else { 
 ore = `${modidore}:raw_${material}`
 nugget = `${modidnugget}:raw_${material}_nugget`
 crushed = `${modidcrushed}:crushed_raw_${material}`
 dust = `${modiddust}:${material}_dust`
 if (material == 'tungsten') { 
   block = `${modidblock}:hexated_block`
 } else  {
   block = `${modidblock}:raw_${material}_block`
 }
}
 //remove all recipes using the material previously
 event.remove({ output: ore })
 event.remove({ output: nugget })
 event.remove({ output: crushed })
 event.remove({ output: dust })
 event.remove({ output: block })

 //nugget to ore
 event.shaped(
  Item.of(ore),
  [
  'NNN',
  'NNN',
  'NNN'
  ],
  {
  N: nugget
  }
 )
 // ore to nugget
 event.shapeless(Item.of( nugget, 9),[ore])

 // crushed ore recipes
 // t0
 event.recipes.create.compacting([crushed, CreateItem.of(crushed, 0.25)], ore)
 // t1
 event.recipes.create.compacting([crushed, CreateItem.of(crushed, 0.5)],  ore).heatLevel("lowheated")
 // t2
 event.recipes.create.compacting([crushed, CreateItem.of(crushed, 0.75)], ore).heatLevel("heated")
 // t3
 event.recipes.create.compacting([crushed, crushed], ore).heatLevel("superheated")
 // t4 (needs hyperheated)
 
 // dirty dust recipes
 // t1
 event.recipes.create.milling([dust],  crushed)
 event.recipes.create.milling([dust],  ore)
 // t2
 event.recipes.create.crushing([dust, CreateItem.of(dust, 0.5)], crushed).processingTime(500)
 event.recipes.create.crushing([dust, CreateItem.of(dust, 0.5)], ore).processingTime(500)

 // dust recipe
 event.recipes.create.splashing([dust, CreateItem.of(byproduct, 0.2)], crushed)

 //ore to block
 event.shaped(
  Item.of(block),
  [
  'NNN',
  'NNN',
  'NNN'
  ],
  {
  N: ore
  }
 )
}
// ORDER:      material,   ore modid,           nugget modid, crushed modid,     dust modid,        block modid,         associated stone,             sub-resource
ore_processing('tungsten', 'kubejs',            'kubejs',     'kubejs',          'kubejs',          'nethermore',        'c:stones/basalt',            'kubejs:raw_gold_nugget')
ore_processing('gold',     'minecraft',         'kubejs',     'create',          'modestmining',    'minecraft',         'c:stones/ochrum',            'minecraft:quartz')
ore_processing('zinc',     'create',            'kubejs',     'create',          'kubejs',          'create',            'c:stones/asurine',           'minecraft:gunpowder')
ore_processing('iron',     'minecraft',         'kubejs',     'create',          'modestmining',    'minecraft',         'c:stones/crimsite',          'minecraft:redstone')
ore_processing('copper',   'minecraft',         'kubejs',     'create',          'modestmining',    'minecraft',         'c:stones/veridium',          'minecraft:clay_ball')
ore_processing('tin',      'caverns_and_chasms','kubejs',     'create',          'kubejs',          'caverns_and_chasms','c:stones/blackstone',        'minecraft:lapis_lazuli')
ore_processing('lead',     'modestmining',      'kubejs',     'create',          'modestmining',    'modestmining',      'c:stones/dripstone',         'kubejs:raw_silver_nugget')
ore_processing('silver',   'caverns_and_chasms','kubejs',     'create',          'kubejs',          'caverns_and_chasms','c:stones/limestone',         'minecraft:amethyst_shard')
ore_processing('ancient',  'minecraft',         'kubejs',     'kubejs',          'modestmining',    'minecraft',         'c:stones/tuff',              'minecraft:tuff')

})
