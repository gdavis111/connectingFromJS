const config = require('./knexSettings.js'); //
const knex = require('knex')(config);

knex('famous_people').insert({
          first_name: process.argv[2],
          last_name: process.argv[3],
          birthdate: process.argv[4] })
.then(function() {
  console.log('success!');
  knex.destroy();
})
