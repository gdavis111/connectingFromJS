function findPersonByFirstName(client, person, callback) { // looking up person in the pg database by first name typed on command line after running file
  client.query(
    "SELECT first_name, last_name, birthdate FROM famous_people WHERE famous_people.first_name = $1;",
    [person],
    (err, result) => {
      if (err) {
        callback(err)
        return
      }
      callback(null, result.rows)
  });
}

module.exports = { // exporting function to test_script.js
  findPersonByFirstName: findPersonByFirstName
}