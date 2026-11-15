ServerEvents.recipes(event => {
  
  const ingots = (material, modidsheet, modidscrew, modidwire) => {
  
   var wire = `${modidwire}:${material}_wire`
   var plate 
   var screw = `${modidscrew}:${material}_screw`
   
   if (material == 'gold') {
   plate = 'create:golden_sheet'
   } else {
   plate = `${modidsheet}:${material}_sheet`
   }

   event.remove({output:`#c:wires/${material}`})
   event.remove({output:`#c:plates/${material}`})
   event.remove({output:`#c:screws/${material}`})  

   event.recipes.create.pressing(plate,[Ingredient.of(`#c:ingots/${material}`)])
   event.recipes.create.pressing(screw,[Ingredient.of(`#c:nuggets/${material}`)])
   event.recipes.create.cutting(Item.of(wire, 3), [Ingredient.of(`#c:plates/${material}`)])

  }  
// material            sheet                 screw           wire
  ingots('iron',       'create',             'kubejs',       'electroenergetics') 
  ingots('tin',        'spicedcider',        'kubejs',       'kubejs'           )
  ingots('copper',     'create',             'modestmining', 'electroenergetics')
  ingots('gold',       'create',             'kubejs',       'kubejs'           )
  ingots('zinc',       'kubejs',             'kubejs',       'kubejs'           ) 
  ingots('tungsten',   'kubejs',             'kubejs',       'kubejs'           )
  ingots('silver',     'kubejs',             'kubejs',       'kubejs'           )
  ingots('lead',       'kubejs',             'kubejs',       'kubejs'           )

})
