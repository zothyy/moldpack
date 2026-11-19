NativeEvents.onEvent('net.neoforged.neoforge.event.level.BlockEvent$PortalSpawnEvent', event => {
    if(event.player.getHeldItem("main_hand").hasTag("kubejs:can_ignite_portals"),event.cancelled = true)
})