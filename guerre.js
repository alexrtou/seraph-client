'use strict';

var models = require('./models');

// Json des datas dont les relations filles
var armee1 = {
  name: 'toulousains',
  corparmees: [
    { name: '1erCA',  divisions: [
      {
        name:'1ereDiv', brigades:[{name:'Brig1'}], bataillons:[{name:'Bat1'}], regiments:[{name:'Reg1'}, {name:'Reg2'}]
      },
      {
        name:'2ereDiv', regiments:[
          {name:'Reg3'}, {name:'Reg4'}
        ]
      }
    ] 
    }, { name: '2emeCA',  divisions: [
      {name:'3ereDiv'},
      {name:'4ereDiv'}
    ] 
       }
  ]
};


// Valide le Json complet
models.Armee.validate(armee1)

// puis sauvegarde les noeuds et relations
  .then(
  function(valid){
    console.log('group is valid', valid);
    return models.Armee.saveAsync(valid);
  })

// Recherche tous les groupes et Users fils
  .then(
  function() {
    return models.Armee.findAllAsync();
  })

  .then(function(armees){
  console.log('------------------------------------------------------');
  console.log(JSON.stringify(armees,null,2));
  console.log('------------------------------------------------------');
})

// Dans tous les cas catch des erreurs
  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e);
  });
