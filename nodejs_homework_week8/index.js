const express = require('express');
const {router} = require('./route.js');
const {pool} = require('./queries.js');

const app = express();
const port = 3000;

app.use('/', router);

pool.connect((err, res) => {
  if(err) {
    console.error(`Connect Error: ${err}`);
    return;
  }
  console.log('Connected');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});