const config = require('./knexSettings.js'); //
const knex = require('knex')(config);

knex('famous_people').select('first_name', 'last_name', 'birthdate').where('first_name', process.argv[2]).asCallback(function(err, rows) {
  if (err) {
    console.error(err)
    return
    knex.destroy();
  }
  let listCount = 1;
  console.log('Searching ...');
  console.log('Found person(s) matching your search name:');
  for (people of rows) {
    console.log('- ', listCount, ':', people.first_name, people.last_name, 'born', people.birthdate.toDateString());
    listCount ++;
    knex.destroy();
  }
});


