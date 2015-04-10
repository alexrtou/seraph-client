'use strict';

var model = require('seraph-model');

module.exports = function(db, Joi, CorpArmee){

  // Initialise le modele
  var Armee = model(db, 'armee');

  // Implémente le validator pour les champs
  Armee.validator = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    corparmees: Joi.array().items(CorpArmee.validator)
  });

  // Implémente les relations
  Armee.compose(CorpArmee, 'corparmees', 'contient');

  return Armee;

};
