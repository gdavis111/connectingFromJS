const pg = require("pg");
const settings = require("./settings"); // settings.json
const lookupPeople = require('./lookupPeople');

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  lookupPeople.findPersonByFirstName(client, process.argv[2], (err, result) => {
    if (err) {
      console.error(err);
    }
    console.log('Searching ... ')
    console.log('Found 1 person(s) by the name', process.argv[2])
    // for(people of result) { // trying to break down result if there are more than 1 of a Name.
    //   for(singlePerson in people) {
    //     console.log(people[singlePerson])
    //   }
    // }
    console.log('- ', result[0].first_name, result[0].last_name, 'born', result[0].birthdate.toDateString());
  });

  // client.query("SELECT $1::int AS number", ["1"], (err, result) => {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  //   console.log(result.rows[0].number); //output: 1
  // client.end();
  // });
  setTimeout(() => {client.end()}, 2000)
});