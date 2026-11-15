ServerEvents.recipes(event => {

 const helm = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        }
      },
      "pattern": [
        "###",
        "# #"
      ],
      "result": {
        "id": `${mod}:${output}_helmet`
      }
    })
 } 
 const chest = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        }
      },
      "pattern": [
        "# #",
        "###",
        "###"
      ],
      "result": {
        "id": `${mod}:${output}_chestplate`
      }
    })
 }   
 const leg = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        }
      },
      "pattern": [
        "###",
        "# #",
        "# #"
      ],
      "result": {
        "id": `${mod}:${output}_leggings`
      }
    })
 }
 const foot = (input, output, mod) => {

    event.custom({
      "type": "modestmining:forging_shaped",
      "category": "equipment",
      "cooktime": 144,
      "key": {
        "#": {
          "tag": `c:ingots/${input}`
        }
      },
      "pattern": [
        "# #",
        "# #"
      ],
      "result": {
        "id": `${mod}:${output}_boots`
      }
    })
 }
 helm('iron', 'iron', 'minecraft')

 chest('iron', 'iron', 'minecraft')

 leg('iron', 'iron', 'minecraft')

 foot('iron', 'iron', 'minecraft')
})
