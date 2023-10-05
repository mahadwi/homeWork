const fs = require('fs');
const {pool} = require('../database.js');

const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf8'})
pool.query(seedQuery, (err, res) => {
  if(err) {
    console.error(`Query Error: ${err}`);
    return;
  }
  console.log('Seeding Complete');
  pool.end();
});