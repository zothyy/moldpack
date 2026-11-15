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


 sword('copper', 'copper', 'caverns_and_chasms')
 sword('gold', 'golden', 'minecraft')

 pick('copper', 'copper', 'caverns_and_chasms')
 pick('gold', 'golden', 'minecraft')

 axe('copper', 'copper', 'caverns_and_chasms')
 axe('gold', 'golden', 'minecraft')

 shovel('copper', 'copper', 'caverns_and_chasms')
 shovel('gold', 'golden', 'minecraft')

 hoe('copper', 'copper', 'caverns_and_chasms')
 hoe('gold', 'golden', 'minecraft')

 knife('gold', 'golden', 'farmersdelight')


})
