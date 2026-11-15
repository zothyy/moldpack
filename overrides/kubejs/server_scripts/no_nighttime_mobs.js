EntityEvents.spawned(event => {
    if (event.entity.isMonster()) {
        let y = event.entity.y
        if (y > 60) {
            event.cancel()
        }
    }
})