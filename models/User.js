var model = require('seraph-model');

module.exports = function(db, Joi){
  // Model
  var User = model(db, 'user');

  User.validator = Joi.object().keys({
    nom: Joi.string().alphanum().min(3).max(30).required(),
    prenom: Joi.string().alphanum().min(3).max(30).required(),
    login: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required()
  });

  return User;

};
