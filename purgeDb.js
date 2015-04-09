'use strict';

var models = require('./models');

models.db.queryRawAsync('MATCH (n)-[r]-(m) DELETE n, r, m')

  .then(
  function() {
    console.log('relations supprimées');
  })

  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  })

  .then(
  function() {
    return models.db.queryRawAsync('MATCH n DELETE n');
  })

  .then(
  function() {
    console.log('noeuds isolés supprimés');
  })

  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  })


  .done();
