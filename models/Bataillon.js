'use strict';

var model = require('seraph-model');

module.exports = function(db, Joi){
  
  // Initialise le modele
  var Bataillon = model(db, 'bataillon');

  // Implémente le validator pour les champs
  Bataillon.validator = Joi.object().keys({
    name: Joi.string().alphanum().min(1).max(30).required()
  });
  
  // Pas de relation filles

  return Bataillon;

};
