var db = require('seraph')('http://localhost:7474');
var model = require('seraph-model');
var Joi = require('joi');
var Promise = require("bluebird");

// Promisification
Promise.promisifyAll(Joi);

// Validation
var schema = Joi.object().keys({
  nom: Joi.string().alphanum().min(3).max(30).required(),
  prenom: Joi.string().alphanum().min(3).max(30).required(),
  login: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required()
});


// Model et Datas
var User = model(db, 'user');
Promise.promisifyAll(User);

var moi = { nom: 'ROC',  prenom: 'Alexandre', email:'ar@yahoo.fr', login:'alex'};

Joi
  .validateAsync(moi, schema)

  .then(
  function(valid){
    console.log('user is valid', valid);
    return User.saveAsync(valid);
  })

  .then(
  function(saved) {
    User.findAll(function(err, allUsers) {
      console.log(allUsers);
    });
  })

  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  });
