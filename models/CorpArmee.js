'use strict';

var model = require('seraph-model');

module.exports = function(db, Joi, Division){

  // Initialise le modele
  var CorpArmee = model(db, 'ca');

  // Implémente le validator pour les champs
  CorpArmee.validator = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    divisions: Joi.array().items(Division.validator)
  });

  // Implémente les relations
  CorpArmee.compose(Division, 'divisions', 'contient');

  return CorpArmee;

};
