import pool from "../db/connection.js";

const Movies = {};

Movies.getAllMovies = async (req, res) => {
  const page = parseInt(req.params.page);
  const per_page = parseInt(req.params.per_page);
  const query = {
    text: 'SELECT * FROM movies LIMIT $1 OFFSET $2',
    values: [page, per_page],
  };
  const result = await pool.query(query);
  return result;
}

Movies.getMoviesById = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query(`SELECT * FROM movies WHERE id = ${id}`);
  return result;
}

Movies.deleteMoviesById = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query(`DELETE FROM movies WHERE id = ${id}`);
  return result;
}

Movies.insertMovies = async (req, res) => {
  const body = req.body;
  const result = await pool.query('INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3);', [body.title, body.genres, body.year]);
  return result;
}

Movies.editMovies = async (req, res) => {
  const body = req.body;
  console.log(body.title);
  const result = await pool.query(`UPDATE movies SET title = '${body.title}' WHERE id = ${req.params.id}`);
  return result;
}

export default Movies;