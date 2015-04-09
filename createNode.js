'use strict';

var models = require('./models');

var moi = { nom: 'ROC',  prenom: 'Alexandre', email:'ar@yahoo.fr', login:'alex'};

models.User.validate(moi)

  .then(
  function(moivalid){
    console.log('user json is valid', moivalid);
    return models.User.saveAsync(moivalid);
  })

  .then(
  function(saved) {
    models.User.findAll(function(err, allUsers) {
      console.log(allUsers);
    });
  })

  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  });
