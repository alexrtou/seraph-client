'use strict';

var conf = require('../conf'),
    _ = require('lodash'),
    db = require('seraph')(conf.url),
    promise = require("bluebird"),
    Joi = require('joi');

promise.promisifyAll(Joi);
promise.promisifyAll(db);

// Définition des modèles
var User = require('./User')(db, Joi),
    Group = require('./Group')(db, Joi, User),
    exportable = {
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

