ItemEvents.modification(event => {
  event.modify('spelunkery:tangle_roots', item => {
        item.setFood({
          nutrition: 3,
          saturation: 1,
          canAlwaysEat: false,
          eatSeconds: 1.6
        })
    })
})
