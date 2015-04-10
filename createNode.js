'use strict';

var models = require('./models');

// Json de datas
var moi = { nom: 'ROC',  prenom: 'Alexandre', email:'ar@yahoo.fr', login:'alex'};

// Depuis le User :

// validation des champs champs
models.User.validate(moi)

  // puis, enregistre le user
  .then(
  function(moivalid){
    console.log('user json is valid', moivalid);
    return models.User.saveAsync(moivalid);
  })

  // puis on lance une recherche de tous les utilisateurs
  .then(
  function(saved) {
    models.User.findAll(function(err, allUsers) {
      console.log(allUsers);
    });
  })

  // Dans tous les cas, les erreurs sont catchées
  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  });
