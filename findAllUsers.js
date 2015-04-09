var models = require('./models');

models.User.findAllAsync()

  .then(
  function(users) {
    console.log(users);
  })

  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  });
