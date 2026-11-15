ServerEvents.recipes(event => {

 const sword = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        },
        "S": {
          "item": "minecraft:stick"
        }
      },
      "pattern": [
        "#",
        "#",
        "S"
      ],
      "result": {
        "id": `${mod}:${output}_sword`
      }
    })
 } 

 const pick = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        },
        "S": {
          "item": "minecraft:stick"
        }
      },
      "pattern": [
        "###",
        " S ",
        " S "
      ],
      "result": {
        "id": `${mod}:${output}_pickaxe`
      }
    })
 } 


 const axe = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        },
        "S": {
          "item": "minecraft:stick"
        }
      },
      "pattern": [
        "##",
        "#S",
        " S"
      ],
      "result": {
        "id": `${mod}:${output}_axe`
      }
    })
 } 


 const shovel = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        },
        "S": {
          "item": "minecraft:stick"
        }
      },
      "pattern": [
        "#",
        "S",
        "S"
      ],
      "result": {
        "id": `${mod}:${output}_shovel`
      }
    })
 } 

 const hoe = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        },
        "S": {
          "item": "minecraft:stick"
        }
      },
      "pattern": [
        "##",
        " S",
        " S"
      ],
      "result": {
        "id": `${mod}:${output}_hoe`
      }
    })
 } 

 const knife = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        },
        "S": {
          "item": "minecraft:stick"
        }
      },
      "pattern": [
        "#",
        "S"
      ],
      "result": {
        "id": `${mod}:${output}_knife`
      }
    })
 } 


 sword('iron', 'iron', 'minecraft')

 pick('iron', 'iron', 'minecraft')

 axe('iron', 'iron', 'minecraft')

 shovel('iron', 'iron', 'minecraft')

 hoe('iron', 'iron', 'minecraft')

 knife('iron', 'iron', 'farmersdelight')


})
