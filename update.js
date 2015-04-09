var models = require('./models');

var moi = { nom: 'ROP',  prenom: 'Alexandre', email:'ar@yahoo.fr', login:'alex'};

models.User.validate(moi)

  .then(
  function(moivalid){
    console.log('user json is valid', moivalid);
    return models.User.saveAsync(moivalid);
  })

  .then(
  function(saved) {
    console.log('utilisateur créé', saved);
    return saved;
  })

  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  })

  .then(
  function(created) {
    created.nom = 'ROCcorrect';
    return models.User.validate(created);
  })

  .then(
  function(updatevalid){
    console.log('user json est tjs valide', updatevalid);
    return models.User.saveAsync(updatevalid);
  })

  .then(
  function(saved) {
    console.log('Utilisateur modifié : ', saved);
  })

  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  })

;
