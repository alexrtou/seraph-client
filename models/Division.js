'use strict';

var model = require('seraph-model');

module.exports = function(db, Joi, Brigade, Bataillon, Regiment){

  // Initialise le modele
  var Division = model(db, 'division');

  // Implémente le validator pour les champs
  Division.validator = Joi.object().keys({
    name: Joi.string().alphanum().min(1).max(30).required(),
    brigades: Joi.array().items(Brigade.validator),
    bataillons: Joi.array().items(Bataillon.validator),
    regiments: Joi.array().items(Regiment.validator),
  });

  // Implémente les relations
  Division.compose(Brigade, 'brigades', 'contient');
  Division.compose(Bataillon, 'bataillons', 'contient');
  Division.compose(Regiment, 'regiments', 'contient');

  return Division;

};
