'use strict';

var conf = require('../conf'),
    _ = require('lodash'),
    db = require('seraph')(conf.url),
    Promise = require("bluebird"),
    Joi = require('joi');

Promise.promisifyAll(Joi);
Promise.promisifyAll(db);

// Définition des modèles
var User = require('./User')(db, Joi),
    Group = require('./Group')(db, Joi, User),
    Brigade = require('./Brigade')(db, Joi),
    Bataillon = require('./Bataillon')(db, Joi),
    Regiment = require('./Regiment')(db, Joi),
    Division = require('./Division')(db, Joi, Brigade, Bataillon, Regiment),
    CorpArmee = require('./CorpArmee')(db, Joi, Division),
    Armee = require('./Armee')(db, Joi, CorpArmee),
    
    exportable = {
      db:db,
      User:User,
      Group:Group,
      Brigade:Brigade,
      Bataillon:Bataillon,
      Regiment:Regiment,
      Division:Division,
      CorpArmee:CorpArmee,
      Armee:Armee
    };

// Ajoute le validator
_.forEach(exportable, function(model) {
  Promise.promisifyAll(model);

  model.validate = function(json){
    return Joi.validateAsync(json, model.validator);
  };
});

module.exports = exportable;

