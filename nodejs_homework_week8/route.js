const express = require('express');
const router = express.Router();
const {pool} = require('./queries.js');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/listFilm', (req, res) => {
  pool.query('SELECT * FROM film', (err, result) => {
    if(err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
});

router.get('/listFilm/:id', (req, res) => {
  pool.query(`SELECT * FROM film WHERE film_id = ${req.params.id}`, (err, result) => {
    if(err){
      throw err;
    }
    res.status(200).json(result.rows);
  });
});

router.get('/listCategory', (req, res) => {
  pool.query('SELECT * FROM category', (err, result) => {
    if(err){
      throw err;
    }
    res.status(200).json(result.rows);
  });
});

router.get('/listFilmByCategory/:category_id', (req, res) => {
  pool.query(`SELECT * FROM film_category a 
  INNER JOIN film b ON a.film_id = b.film_id
  INNER JOIN category c ON c.category_id = a.category_id
  WHERE a.category_id = ${req.params.category_id}`, (err, result) => {
    if(err){
      throw err;
    }
    res.status(200).json(result.rows);
  });
});

module.exports = {
  router,
}