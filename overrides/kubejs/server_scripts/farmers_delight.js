ServerEvents.recipes(event => {

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
            "item": "minecraft:feather"
            }
        ],
        "result": [
            {
            "item": {
                "count": 2,
                "id": "minecraft:string"
            }
            }
        ],
        "tool": [
            {
            "type": "farmersdelight:item_ability",
            "action": "knife_dig"
            },
            {
            "tag": "c:tools/knife"
            }
        ]
    })    
})