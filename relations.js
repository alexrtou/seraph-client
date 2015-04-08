var db = require('seraph')('http://localhost:7474');
var model = require('seraph-model');
var beer = model(db, "Beer");
var hop = model(db, "Hop");

beer.compose(hop, 'hops', 'contains_hop');

var pliny = {
  name: 'Pliny the Elder',
  brewery: 'Russian River',
  hops: [
    { name: 'Columbus', aa: '13.9%' },
    { name: 'Simcoe', aa: '12.3%' },
    { name: 'Centennial', aa: '8.0%' }
  ]
};

// Since objects were listed on the 'hops' key that I specified, they will be
// saved with the `hop` model, and then related back to my beer.
beer.save(pliny, function(err, saved) {
  // if any of the hops or the beer failed validation with their model, err
  // will be populated and nothing will be saved.

  console.log(saved);
  /* -> { brewery: 'Russian River',
          name: 'Pliny the Elder',
          id: 11,
          hops:
           [ { name: 'Columbus', aa: '13.9%', id: 12 },
             { name: 'Simcoe', aa: '12.3%', id: 13 },
             { name: 'Centennial', aa: '8.0%', id: 14 } ] }
  */

  db.relationships(saved, function(err, rels) {
    console.log(rels) // -> [ { start: 11, end: 12, type: 'contains_hop', properties: {}, id: 0 },
                      // { start: 11, end: 13, type: 'contains_hop', properties: {}, id: 1 },
                      // { start: 11, end: 14, type: 'contains_hop', properties: {}, id: 2 } ]
  });

  // Read directly with seraph
  db.read(saved, function(err, readPlinyFromDb) {
    console.log(readPlinyFromDb)
    /* -> { brewery: 'Russian River',
            name: 'Pliny the Elder',
            id: 11 }
    */
  })

  // Read with model, and you get compositions implicitly.
  beer.read(saved, function(err, readPliny) {
    console.log(readPliny)
    /* -> { brewery: 'Russian River',
            name: 'Pliny the Elder',
            id: 11,
            hops:
             [ { name: 'Columbus', aa: '13.9%', id: 12 },
               { name: 'Simcoe', aa: '12.3%', id: 13 },
               { name: 'Centennial', aa: '8.0%', id: 14 } ] }
    */
  });

  hop.read(14, function(err, hop) {
    console.log(hop); // -> { name: 'Centennial', aa: '8.0%', id: 14 }
  });
});
