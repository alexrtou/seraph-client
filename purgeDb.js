'use strict';

var models = require('./models');

// Exécute une requête cypher
models.db.queryRawAsync('MATCH (n)-[r]-(m) DELETE n, r, m')

  // puis, trace
  .then(
  function() {
    console.log('relations supprimées');
  })

  // catch des erreurs
  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  })

  // puis, exécution de la seconde requête
  .then(
  function() {
    return models.db.queryRawAsync('MATCH n DELETE n');
  })

  // puis, trace
  .then(
  function() {
    console.log('noeuds isolés supprimés');
  })

  // catch des erreurs
  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  })

  // bref, c'est fini !
  .done();
