ServerEvents.recipes(event => {
    
     event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
        {"item": "farmersdelight:organic_compost"},
        {"tag": "c:mushrooms"},
        {
        "type": "fluid_stack",
        "fluid": "minecraft:water",
        "amount": 500
        }
    ],
    "processing_time": 1200,
    "results": [
        {
        "type": "fluid_stack",
        "id": "kubejs:undistilled_ethanol",
        "amount": 500
        }

    ]
    })
    
     event.custom({
    "type": "createdieselgenerators:bulk_fermenting",
    "ingredients": [
        {"item": "farmersdelight:organic_compost"},
        {"tag": "c:mushrooms"},
        {
        "type": "fluid_stack",
        "fluid": "minecraft:water",
        "amount": 500
        }
    ],
    "processing_time": 1200,
    "results": [
        {
        "type": "fluid_stack",
        "id": "kubejs:undistilled_ethanol",
        "amount": 500
        }

    ]
    })
    event.custom({
      "type": "createdieselgenerators:distillation",
      "ingredients": [
        {
          "type": "fluid_stack",
          "fluid": "kubejs:undistilled_ethanol",
          "amount": 100
        }
      ],
      "heat_requirement": "superheated",
      "processing_time": 60,
      "results": [
        {
          "id": "createdieselgenerators:ethanol",
          "amount": 100
        }
      ]
    })
    event.custom({
      "type": "createdieselgenerators:distillation",
      "ingredients": [
        {
          "type": "fluid_stack",
          "fluid": "kubejs:undistilled_ethanol",
          "amount": 100
        }
      ],
      "heat_requirement": "heated",
      "processing_time": 60,
      "results": [
        {
          "id": "createdieselgenerators:ethanol",
          "amount": 90
        },
        {
          "id": "kubejs:liquid_compost",
          "amount": 10
        }
      ]
    })
})
