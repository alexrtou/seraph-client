'use strict';

var models = require('./models');

// Recherche tous les utilisateurs
models.User.findAllAsync()

  // puis, trace
  .then(
  function(users) {
    console.log(users);
  })

  // intercepte les erreurs
  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  });
