const pg = require('pg');

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'admin123',
  port: 5432,
});

export {pool}