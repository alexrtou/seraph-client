var model = require('seraph-model');

module.exports = function(db, Joi, User){
  var Group = model(db, 'group');

  Group.validator = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    users: Joi.array().items(User.validator)
  });

  Group.compose(User, 'users', 'contains_user');

  return Group;

};
