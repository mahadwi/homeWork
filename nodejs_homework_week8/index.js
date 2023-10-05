import express from 'express';
import { router } from './route.js';
import { pool } from './database.js';

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(new Date(), req.path);
  next();
});

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