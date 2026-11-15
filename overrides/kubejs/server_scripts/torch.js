ServerEvents.recipes( event => {
const torch = (input, output, amount) => {
event.remove({ output:output})
event.shaped(Item.of(output, amount), [
'a',
'b'
], {
a: input,
b: 'minecraft:stick'
})
}
torch('minecraft:coal', 'minecraft:torch', 8)
torch('minecraft:redstone', 'minecraft:redstone_torch', 8)

})
