'use strict';

var model = require('seraph-model');

module.exports = function(db, Joi, User){

  // Initialise le modele
  var Group = model(db, 'group');

  // Implémente le validator pour les champs
  Group.validator = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    users: Joi.array().items(User.validator)
  });

  // Implémente les relations
  Group.compose(User, 'users', 'contains_user');

  return Group;

};
