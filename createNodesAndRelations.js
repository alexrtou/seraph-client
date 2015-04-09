var models = require('./models');

var toulousains = {
  name: 'toulousains',
  users: [
    { nom: 'RRR',  prenom: 'Alexandre', email:'ar@yahoo.fr', login:'alex' },
    { nom: 'FFF',  prenom: 'Gabrielle', email:'gf@yahoo.fr', login:'gaby' }
  ]
};

models.Group.validate(toulousains)

  .then(
  function(valid){
    console.log('group is valid', valid);
    return models.Group.saveAsync(valid);
  })

  .then(
  function(saved) {
    models.Group.findAll(function(err, allGroups) {
      console.log(allGroups);
    });
  })

  .catch(
  Error,
  function(e) {
    console.error("Erreur survenue : ", e.message);
  });

//// Since objects were listed on the 'users' key that I specified, they will be
//// saved with the `user` model, and then related back to my group.
//group.save(toulousains, function(err, saved) {
//  // if any of the users or the group failed validation with their model, err
//  // will be populated and nothing will be saved.
//
//  console.log(saved);
//  /* -> { brewery: 'Russian River',
//          name: 'Pliny the Elder',
//          id: 11,
//          users:
//           [ { nom: 'R',  prenom: 'Alexandre', email:'ar@yahoo.fr', login:'alex' },
//             { nom: 'F',  prenom: 'Gabrielle', email:'gf@yahoo.fr', login:'gaby' } ] }
//  */
//
//  db.relationships(saved, function(err, rels) {
//    console.log(rels) // -> [ { start: 11, end: 12, type: 'contains_user', properties: {}, id: 0 },
//                      // { start: 11, end: 13, type: 'contains_user', properties: {}, id: 1 },
//                      // { start: 11, end: 14, type: 'contains_user', properties: {}, id: 2 } ]
//  });
//
//  // Read directly with seraph
//  db.read(saved, function(err, readPlinyFromDb) {
//    console.log(readPlinyFromDb)
//    /* -> { brewery: 'Russian River',
//            name: 'Pliny the Elder',
//            id: 11 }
//    */
//  })
//
//  // Read with model, and you get compositions implicitly.
//  group.read(saved, function(err, readPliny) {
//    console.log(readPliny)
//    /* -> { brewery: 'Russian River',
//            name: 'Pliny the Elder',
//            id: 11,
//            users:
//             [ { name: 'Columbus', aa: '13.9%', id: 12 },
//               { name: 'Simcoe', aa: '12.3%', id: 13 },
//               { name: 'Centennial', aa: '8.0%', id: 14 } ] }
//    */
//  });
//
//  user.read(14, function(err, user) {
//    console.log(user); // -> { name: 'Centennial', aa: '8.0%', id: 14 }
//  });
//});
