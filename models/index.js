var _ = require('lodash');
var db = require('seraph')('http://localhost:7474');
var Promise = require("bluebird");
var Joi = require('joi');
Promise.promisifyAll(Joi);

Promise.promisifyAll(db);

// Définition des modèles
var User = require('./User')(db, Joi);
var Group = require('./Group')(db, Joi, User);

var exportable = {
  db:db,
  User:User,
  Group:Group
};

// Ajoute le validator
_.forEach(exportable, function(model) {
  Promise.promisifyAll(model);

  model.validate = function(json){
    return Joi.validateAsync(json, model.validator);
  };
});

module.exports = exportable;

