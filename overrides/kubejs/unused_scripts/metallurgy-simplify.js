ServerEvents.recipes(event => {

   event.remove({ id: 'createmetallurgy:sequenced_assembly/industrial_crucible'})

   event.replaceInput(
   {input:'createmetallurgy:refractory_mortar'},
   'createmetallurgy:refractory_mortar',
   'minecraft:clay'
   )
   
   event.replaceInput(
   {input:'createmetallurgy:graphite'},
   'createmetallurgy:graphite',
   'minecraft:clay_ball'
   )

  const mold_firing = [
  ['kubejs:unfired_ingot_mold', 'createmetallurgy:graphite_ingot_mold', '#c:ingots'],
  ['kubejs:unfired_nugget_mold', 'createmetallurgy:graphite_nugget_mold', '#c:nuggets'],

  ]
  mold_firing.forEach(([input, output, resource]) =>{
   event.replaceOutput(
    { output:output},
    output,
    input
    ) 
   event.smelting(output, input)
   event.shapeless(
        Item.of(input),
        [
            'createmetallurgy:graphite_blank_mold',
            resource
        ]
   ).keepIngredient(resource)
  })

event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "minecraft:deepslate_bricks"
  },
  "results": [
    {
      "id": "createmetallurgy:industrial_crucible"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "createmetallurgy:incomplete_industrial_crucible"
        },
        {
          "item": "minecraft:clay"
        }
      ],
      "results": [
        {
          "id": "createmetallurgy:incomplete_industrial_crucible"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "createmetallurgy:incomplete_industrial_crucible"
        },
        {
          "tag": "c:plates/obsidian"
        }
      ],
      "results": [
        {
          "id": "createmetallurgy:incomplete_industrial_crucible"
        }
      ]
    },
    {
      "type": "createmetallurgy:grinding",
      "ingredients": [
        {
          "item": "createmetallurgy:incomplete_industrial_crucible"
        }
      ],
      "processing_time": 80,
      "results": [
        {
          "id": "createmetallurgy:incomplete_industrial_crucible"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "createmetallurgy:incomplete_industrial_crucible"
        },
        {
          "type": "neoforge:single",
          "amount": 30,
          "fluid": "createmetallurgy:molten_tungsten"
        }
      ],
      "results": [
        {
          "id": "createmetallurgy:incomplete_industrial_crucible"
        }
      ]
    }
  ],
  "transitional_item": {
    "id": "createmetallurgy:incomplete_industrial_crucible"
  }
})
 
})
