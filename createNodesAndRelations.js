'use strict';

var models = require('./models');

// Json des datas dont les relations filles
var toulousains = {
  name: 'toulousains',
  users: [
    { nom: 'RRR',  prenom: 'Alexandre', email:'ar@yahoo.fr', login:'alex' },
    { nom: 'FFF',  prenom: 'Gabrielle', email:'gf@yahoo.fr', login:'gaby' }
  ]
};

// Valide le Json complet
models.Group.validate(toulousains)

  // puis sauvegarde les noeuds et relations
  .then(
  function(valid){
    console.log('group is valid', valid);
    return models.Group.saveAsync(valid);
  })

  // Recherche tous les groupes et Users fils
  .then(
  function(saved) {
    models.Group.findAll(function(err, allGroups) {
      console.log(allGroups);
    });
  })

  // Dans tous les cas catch des erreurs
  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  });
