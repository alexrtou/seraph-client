'use strict';

var models = require('./models');

// Json data
var moi = { nom: 'ROP',  prenom: 'Alexandre', email:'ar@yahoo.fr', login:'alex'};

// Validate
models.User.validate(moi)

  // puis, save
  .then(
  function(moivalid){
    console.log('user json is valid', moivalid);
    return models.User.saveAsync(moivalid);
  })

  // puis, trace l'objet sauvé
  .then(
  function(saved) {
    console.log('utilisateur créé', saved);
    return saved;
  })

  // encapsule les erreurs de validation et sauvegarde
  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  })

  // puis, modifie et valide le nouveau json
  .then(
  function(created) {
    created.nom = 'ROCcorrect';
    return models.User.validate(created);
  })

  // puis, update
  .then(
  function(updatevalid){
    console.log('user json est tjs valide', updatevalid);
    return models.User.saveAsync(updatevalid);
  })

  // puis, trace
  .then(
  function(saved) {
    console.log('Utilisateur modifié : ', saved);
    return saved.id;
  })

  // catch de la nouvelle validation et de l'update
  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue à l\'update: ", e.message);
  })

  // puis supprime le noeud
  .then(
  function(id){
    models.db.deleteAsync(id);
  })

  // catch de la suppression
  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue à la suppression: ", e.message);
  });
