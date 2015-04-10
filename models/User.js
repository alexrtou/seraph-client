'use strict';

var model = require('seraph-model');

module.exports = function(db, Joi){
  
  // Initialise le modele
  var User = model(db, 'user');

  // Implémente le validator pour les champs
  User.validator = Joi.object().keys({
    id: Joi.number().integer().optional(),
    nom: Joi.string().alphanum().min(3).max(30).required(),
    prenom: Joi.string().alphanum().min(3).max(30).required(),
    login: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required()
  });
  
  // Pas de relation filles

  return User;

};
