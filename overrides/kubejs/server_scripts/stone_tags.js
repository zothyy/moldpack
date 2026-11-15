ServerEvents.tags('item', event => {
event.removeAll(`c:stones`)
const stone = (material, items) => {
event.removeAll(`c:stones/${material}`)
event.add(`c:stones`, items)
event.add(`c:stones/${material}`, items)
}
// base
stone('stone', [
'minecraft:stone','minecraft:stone_stairs','minecraft:stone_slab','minecraft:stone_wall',
'minecraft:cobblestone','minecraft:cobblestone_stairs','minecraft:cobblestone_slab','minecraft:cobblestone_wall',
'nomansland:cobblestone_bricks','nomansland:cobblestone_brick_stairs','nomansland:cobblestone_brick_slab','nomansland:cobblestone_brick_wall',
'minecraft:smooth_stone','kubejs:smooth_stone_stairs','minecraft:smooth_stone_slab','kubejs:smooth_stone_wall',
'nomansland:polished_stone','nomansland:polished_stone_stairs','nomansland:polished_stone_slab','caverns_and_chasms:polished_andesite_wall',
'minecraft:stone_bricks','minecraft:stone_brick_stairs','minecraft:stone_brick_slab','minecraft:stone_brick_wall',
'create:andesite_pillar',
'minecraft:chiseled_stone_bricks',
])
// white
stone('calcite', [
'minecraft:calcite', 'minecraft:calcite_stairs','minecraft:calcite_slab','minecraft:calcite_wall',
'kubejs:cobbled_calcite','kubejs:cobbled_calcite_stairs','kubejs:cobbled_calcite_slab','kubejs:cobbled_calcite_wall',
'create:small_calcite_bricks','create:small_calcite_brick_stairs','create:small_calcite_brick_slab','create:small_calcite_brick_wall',
'create:cut_calcite','create:cut_calcite_stairs','create:cut_calcite_slab','create:cut_calcite_wall',
'caverns_and_chasms:polished_calcite','caverns_and_chasms:polished_calcite_stairs','caverns_and_chasms:polished_calcite_slab','caverns_and_chasms:polished_calcite_wall',
'caverns_and_chasms:calcite_bricks','caverns_and_chasms:calcite_brick_stairs','caverns_and_chasms:calcite_brick_slab','caverns_and_chasms:calcite_brick_wall',
'create:calcite_pillar',
'caverns_and_chasms:chiseled_calcite_bricks'
])
// light grey
stone('limestone', [
'create:limestone', 'kubejs:limestone_stairs','kubejs:limestone_slab','kubejs:limestone_wall',
'kubejs:cobbled_limestone','kubejs:cobbled_limestone_stairs','kubejs:cobbled_limestone_slab','kubejs:cobbled_limestone_wall',
'create:small_limestone_bricks','create:small_limestone_brick_stairs','create:small_limestone_brick_slab','create:small_limestone_brick_wall',
'create:cut_limestone','create:cut_limestone_stairs','create:cut_limestone_slab','create:cut_limestone_wall',
'create:polished_cut_limestone','create:polished_cut_limestone_stairs','create:polished_cut_limestone_slab','create:polished_cut_limestone_wall',
'create:cut_limestone_bricks','create:cut_limestone_brick_stairs','create:cut_limestone_brick_slab','create:cut_limestone_brick_wall',
'create:limestone_pillar',
'kubejs:chiseled_limestone'
])
// dark gray
stone('deepslate', [
'minecraft:deepslate','minecraft:deepslate_stairs','minecraft:deepslate_slab','minecraft:deepslate_wall',
'minecraft:cobbled_deepslate','minecraft:cobbled_deepslate_stairs','minecraft:cobbled_deepslate_slab','minecraft:cobbled_deepslate_wall',
'caverns_and_chasms:cobbled_deepslate_tiles','caverns_and_chasms:cobbled_deepslate_tile_stairs','caverns_and_chasms:cobbled_deepslate_tile_slab','caverns_and_chasms:cobbled_deepslate_tile_wall',
'create:cut_deepslate','create:cut_deepslate_stairs','create:cut_deepslate_slab','create:cut_deepslate_wall',
'minecraft:polished_deepslate','minecraft:polished_deepslate_stairs','minecraft:polished_deepslate_slab','minecraft:polished_deepslate_wall',
'minecraft:deepslate_bricks','minecraft:deepslate_brick_stairs','minecraft:deepslate_brick_slab','minecraft:deepslate_brick_wall',
'create:deepslate_pillar',
'minecraft:chiseled_deepslate_bricks'
])
// black
stone('blackstone', [
'minecraft:blackstone','minecraft:blackstone_stairs','minecraft:blackstone_slab','minecraft:blackstone_wall',
'kubejs:cobbled_blackstone','kubejs:cobbled_blackstone_stairs','kubejs:cobbled_blackstone_slab','kubejs:cobbled_blackstone_wall',
'kubejs:blackstone_tiles','kubejs:blackstone_tile_stairs','kubejs:blackstone_tile_slab','kubejs:blackstone_tile_wall',
'kubejs:smooth_blackstone','kubejs:smooth_blackstone_stairs','kubejs:smooth_blackstone_slab','kubejs:smooth_blackstone_wall',
'minecraft:polished_blackstone','minecraft:polished_blackstone_stairs','minecraft:polished_blackstone_slab','minecraft:polished_blackstone_wall',
'minecraft:polished_blackstone_bricks','minecraft:polished_blackstone_brick_stairs','minecraft:polished_blackstone_brick_slab','minecraft:polished_blackstone_brick_wall',
'kubejs:blackstone_pillar',
'minecraft:chiseled_polished_blackstone'
])
// brown
stone('dripstone', [
'minecraft:dripstone_block','caverns_and_chasms:dripstone_stairs','caverns_and_chasms:dripstone_slab','caverns_and_chasms:dripstone_wall',
'kubejs:cobbled_dripstone','kubejs:cobbled_dripstone_stairs','kubejs:cobbled_dripstone_slab','kubejs:cobbled_dripstone_wall',
'caverns_and_chasms:dripstone_shingles','caverns_and_chasms:dripstone_shingle_stairs','caverns_and_chasms:dripstone_shingle_slab','caverns_and_chasms:dripstone_shingle_wall',
'create:cut_dripstone','create:cut_dripstone_stairs','create:cut_dripstone_slab','create:cut_dripstone_wall',
'caverns_and_chasms:polished_dripstone','caverns_and_chasms:polished_dripstone_stairs','caverns_and_chasms:polished_dripstone_slab','caverns_and_chasms:polished_dripstone_wall',
'create:cut_dripstone_bricks','create:cut_dripstone_brick_stairs','create:cut_dripstone_brick_slab','create:cut_dripstone_brick_wall',
'kubejs:dripstone_pillar',
'caverns_and_chasms:chiseled_dripstone_shingles',
'minecraft:pointed_dripstone'
])
// red
stone('crimsite', [
'create:crimsite', 'kubejs:crimsite_stairs','kubejs:crimsite_slab','kubejs:crimsite_wall',
'kubejs:cobbled_crimsite','kubejs:cobbled_crimsite_stairs','kubejs:cobbled_crimsite_slab','kubejs:cobbled_crimsite_wall',
'create:small_crimsite_bricks','create:small_crimsite_brick_stairs','create:small_crimsite_brick_slab','create:small_crimsite_brick_wall',
'create:cut_crimsite','create:cut_crimsite_stairs','create:cut_crimsite_slab','create:cut_crimsite_wall',
'create:polished_cut_crimsite','create:polished_cut_crimsite_stairs','create:polished_cut_crimsite_slab','create:polished_cut_crimsite_wall',
'create:cut_crimsite_bricks','create:cut_crimsite_brick_stairs','create:cut_crimsite_brick_slab','create:cut_crimsite_brick_wall',
'create:crimsite_pillar',
'kubejs:chiseled_crimsite'
])
// orange
stone('granite', [
'minecraft:granite', 'minecraft:granite_stairs','minecraft:granite_slab','minecraft:granite_wall',
'kubejs:cobbled_granite','kubejs:cobbled_granite_stairs','kubejs:cobbled_granite_slab','kubejs:cobbled_granite_wall',
'caverns_and_chasms:granite_bricks','caverns_and_chasms:granite_brick_stairs','caverns_and_chasms:granite_brick_slab','caverns_and_chasms:granite_brick_wall',
'create:cut_granite','create:cut_granite_stairs','create:cut_granite_slab','create:cut_granite_wall',
'create:polished_cut_granite','create:polished_cut_granite_stairs','create:polished_cut_granite_slab','create:polished_cut_granite_wall',
'create:cut_granite_bricks','create:cut_granite_brick_stairs','create:cut_granite_brick_slab','create:cut_granite_brick_wall',
'create:granite_pillar',
'caverns_and_chasms:chiseled_polished_granite'
])
// yellow
stone('ochrum', [
'create:ochrum', 'kubejs:ochrum_stairs','kubejs:ochrum_slab','kubejs:ochrum_wall',
'kubejs:cobbled_ochrum','kubejs:cobbled_ochrum_stairs','kubejs:cobbled_ochrum_slab','kubejs:cobbled_ochrum_wall',
'create:small_ochrum_bricks','create:small_ochrum_brick_stairs','create:small_ochrum_brick_slab','create:small_ochrum_brick_wall',
'create:cut_ochrum','create:cut_ochrum_stairs','create:cut_ochrum_slab','create:cut_ochrum_wall',
'create:polished_cut_ochrum','create:polished_cut_ochrum_stairs','create:polished_cut_ochrum_slab','create:polished_cut_ochrum_wall',
'create:cut_ochrum_bricks','create:cut_ochrum_brick_stairs','create:cut_ochrum_brick_slab','create:cut_ochrum_brick_wall',
'create:ochrum_pillar',
'kubejs:chiseled_ochrum'
])
// lime
stone('tuff', [
'minecraft:tuff', 'minecraft:tuff_stairs','minecraft:tuff_slab','minecraft:tuff_wall',
'caverns_and_chasms:smooth_schist','caverns_and_chasms:smooth_schist_stairs','caverns_and_chasms:smooth_schist_slab','caverns_and_chasms:smooth_schist_wall',
'caverns_and_chasms:tuff_tiles','caverns_and_chasms:tuff_tile_stairs','caverns_and_chasms:tuff_tile_slab','caverns_and_chasms:tuff_tile_wall',
'caverns_and_chasms:smooth_tuff','caverns_and_chasms:smooth_tuff_stairs','caverns_and_chasms:smooth_tuff_slab','caverns_and_chasms:smooth_tuff_wall',
'minecraft:polished_tuff','minecraft:polished_tuff_stairs','minecraft:polished_tuff_slab','minecraft:polished_tuff_wall',
'minecraft:tuff_bricks','minecraft:tuff_brick_stairs','minecraft:tuff_brick_slab','minecraft:tuff_brick_wall',
'create:tuff_pillar',
'minecraft:chiseled_polished_tuff'
])
// green
stone('veridium', [
'create:veridium', 'kubejs:veridium_stairs','kubejs:veridium_slab','kubejs:veridium_wall',
'kubejs:cobbled_veridium','kubejs:cobbled_veridium_stairs','kubejs:cobbled_veridium_slab','kubejs:cobbled_veridium_wall',
'create:small_veridium_bricks','create:small_veridium_brick_stairs','create:small_veridium_brick_slab','create:small_veridium_brick_wall',
'create:cut_veridium','create:cut_veridium_stairs','create:cut_veridium_slab','create:cut_veridium_wall',
'create:polished_cut_veridium','create:polished_cut_veridium_stairs','create:polished_cut_veridium_slab','create:polished_cut_veridium_wall',
'create:cut_veridium_bricks','create:cut_veridium_brick_stairs','create:cut_veridium_brick_slab','create:cut_veridium_brick_wall',
'create:veridium_pillar',
'kubejs:chiseled_veridium'
])
// cyan
stone('prismarine', [
'kubejs:prismarine', 'kubejs:prismarine_stairs','kubejs:prismarine_slab','kubejs:prismarine_wall',
'minecraft:prismarine','minecraft:prismarine_stairs','minecraft:prismarine_slab','minecraft:prismarine_wall',
'minecraft:dark_prismarine','minecraft:dark_prismarine_stairs','minecraft:dark_prismarine_slab','minecraft:dark_prismarine_wall',
'kubejs:smooth_prismarine','kubejs:smooth_prismarine_stairs','kubejs:smooth_prismarine_slab','kubejs:smooth_prismarine_wall',
'kubejs:polished_prismarine','kubejs:polished_prismarine_stairs','kubejs:polished_prismarine_slab','kubejs:polished_prismarine_wall',
'minecraft:prismarine_bricks','minecraft:prismarine_brick_stairs','minecraft:prismarine_brick_slab','minecraft:prismarine_brick_wall',
'kubejs:prismarine_pillar',
'kubejs:chiseled_prismarine'
])
// light blue
stone('basalt', [
'minecraft:basalt', 'kubejs:basalt_stairs','kubejs:basalt_slab','kubejs:basalt_wall',
'kubejs:cobbled_basalt','kubejs:cobbled_basalt_stairs','kubejs:cobbled_basalt_slab','kubejs:cobbled_basalt_wall',
'caverns_and_chasms:basalt_tiles','caverns_and_chasms:basalt_tile_stairs','caverns_and_chasms:basalt_tile_slab','caverns_and_chasms:basalt_tile_wall',
'minecraft:smooth_basalt','kubejs:smooth_basalt_stairs','kubejs:smooth_basalt_slab','kubejs:smooth_basalt_wall',
'kubejs:polished_basalt','kubejs:polished_basalt_stairs','kubejs:polished_basalt_slab','kubejs:polished_basalt_wall',
'caverns_and_chasms:basalt_bricks','caverns_and_chasms:basalt_brick_stairs','caverns_and_chasms:basalt_brick_slab','caverns_and_chasms:basalt_brick_wall',
'minecraft:polished_basalt',
'kubejs:chiseled_basalt'
])
// blue
stone('asurine', [
'create:asurine', 'kubejs:asurine_stairs','kubejs:asurine_slab','kubejs:asurine_wall',
'kubejs:cobbled_asurine','kubejs:cobbled_asurine_stairs','kubejs:cobbled_asurine_slab','kubejs:cobbled_asurine_wall',
'create:small_asurine_bricks','create:small_asurine_brick_stairs','create:small_asurine_brick_slab','create:small_asurine_brick_wall',
'create:cut_asurine','create:cut_asurine_stairs','create:cut_asurine_slab','create:cut_asurine_wall',
'create:polished_cut_asurine','create:polished_cut_asurine_stairs','create:polished_cut_asurine_slab','create:polished_cut_asurine_wall',
'create:cut_asurine_bricks','create:cut_asurine_brick_stairs','create:cut_asurine_brick_slab','create:cut_asurine_brick_wall',
'create:asurine_pillar',
'kubejs:chiseled_asurine'
])
// purple
stone('obsidian', [
'minecraft:obsidian', 'kubejs:obsidian_stairs','kubejs:obsidian_slab','kubejs:obsidian_wall',
'kubejs:cobbled_obsidian','kubejs:cobbled_obsidian_stairs','kubejs:cobbled_obsidian_slab','kubejs:cobbled_obsidian_wall',
'kubejs:obsidian_tiles','kubejs:obsidian_tile_stairs','kubejs:obsidian_tile_slab','kubejs:obsidian_tile_wall',
'kubejs:smooth_obsidian','kubejs:smooth_obsidian_stairs','kubejs:smooth_obsidian_slab','kubejs:smooth_obsidian_wall',
'kubejs:polished_obsidian','kubejs:polished_obsidian_stairs','kubejs:polished_obsidian_slab','kubejs:polished_obsidian_wall',
'kubejs:obsidian_bricks','kubejs:obsidian_brick_stairs','kubejs:obsidian_brick_slab','kubejs:obsidian_brick_wall',
'kubejs:obsidian_pillar',
'kubejs:chiseled_obsidian'
])
// magenta
stone('scoria', [
'create:scoria', 'kubejs:scoria_stairs','kubejs:scoria_slab','kubejs:scoria_wall',
'kubejs:cobbled_scoria','kubejs:cobbled_scoria_stairs','kubejs:cobbled_scoria_slab','kubejs:cobbled_scoria_wall',
'create:small_scoria_bricks','create:small_scoria_brick_stairs','create:small_scoria_brick_slab','create:small_scoria_brick_wall',
'create:cut_scoria','create:cut_scoria_stairs','create:cut_scoria_slab','create:cut_scoria_wall',
'create:polished_cut_scoria','create:polished_cut_scoria_stairs','create:polished_cut_scoria_slab','create:polished_cut_scoria_wall',
'create:cut_scoria_bricks','create:cut_scoria_brick_stairs','create:cut_scoria_brick_slab','create:cut_scoria_brick_wall',
'create:scoria_pillar',
'kubejs:chiseled_scoria'
])
// pink
stone('cinnabar', [
'minecraft:cinnabar', 'minecraft:cinnabar_stairs','minecraft:cinnabar_slab','minecraft:cinnabar_wall',
'kubejs:cobbled_cinnabar','kubejs:cobbled_cinnabar_stairs','kubejs:cobbled_cinnabar_slab','kubejs:cobbled_cinnabar_wall',
'kubejs:cinnabar_tiles','kubejs:cinnabar_tile_stairs','kubejs:cinnabar_tile_slab','kubejs:cinnabar_tile_wall',
'kubejs:smooth_cinnabar','kubejs:smooth_cinnabar_stairs','kubejs:smooth_cinnabar_slab','kubejs:smooth_cinnabar_wall',
'minecraft:polished_cinnabar','minecraft:polished_cinnabar_stairs','minecraft:polished_cinnabar_slab','minecraft:polished_cinnabar_wall',
'minecraft:cinnabar_bricks','minecraft:cinnabar_brick_stairs','minecraft:cinnabar_brick_slab','minecraft:cinnabar_brick_wall',
'kubejs:cinnabar_pillar',
'minecraft:chiseled_cinnabar'
])

})
