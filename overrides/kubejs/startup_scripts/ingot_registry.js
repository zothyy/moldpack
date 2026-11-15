StartupEvents.registry("item", event => {

const ingot_registry = (material, ingot, sheet, nugget, screw, wire) => {

if (ingot == 'true') { 
  event.create(`${material}_ingot`).tag('c:ingots').tag(`c:ingots/${material}`)
}

if (sheet == 'true') { 
  event.create(`${material}_sheet`).tag('c:plates').tag(`c:plates/${material}`)
}

if (nugget == 'true') { 
  event.create(`${material}_nugget`).tag('c:nuggets').tag(`c:nuggets/${material}`)
}

if (screw == 'true') { 
  event.create(`${material}_screw`).tag('c:screws').tag(`c:screws/${material}`)
}
if (wire == 'true') { 
  event.create(`${material}_wire`).tag('c:wires').tag(`c:wires/${material}`)
}
}
// material                    ingot      sheet         nugget        screw         wire
ingot_registry('iron',         'false',   'false',      'false',      'true',       'false')
ingot_registry('copper',       'false',   'false',      'false',      'false',      'false')
ingot_registry('tin',          'false',   'false',      'false',      'true',       'true')
ingot_registry('gold',         'false',   'false',      'false',      'true',       'true')
ingot_registry('lead',         'false',   'true',       'false',      'true',       'true')
ingot_registry('zinc',         'false',   'true',       'false',      'true',       'true')
ingot_registry('silver',       'false',   'true',       'false',      'true',       'true')
ingot_registry('tungsten',     'true',    'true',       'true',       'true',       'true')

})

