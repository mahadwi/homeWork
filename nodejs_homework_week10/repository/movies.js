import pool from "../config/connection";

class MoviesRepository {

  async getAllMovies(page, per_page) {
    const query = 'SELECT * FROM movies LIMIT $1 OFFSET $2';
    const result = await pool.query(query, [page, per_page]);
    return result.rows;
  }

  async getMovieById(id) {
    const query = `SELECT * FROM movies WHERE id = $1`;
    const result = await pool.query(query, [id]);
    return result.rows;
  }

  async deleteMovie(id) {
    const query = 'DELETE FROM movies WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows;
  }

  async insertMovie(body, filename) {
    const query = 'INSERT INTO movies (title, genres, year, photo) VALUES ($1, $2, $3, $4)';
    const result = await pool.query(query, [body.title, body.genres, body.year, filename]);
    return result;
  }

  async updateMovie(filename, id) {
    const query = 'UPDATE movies SET photo = $1 WHERE id = $2';
    const result = await pool.query(query, [filename, id]);
    return result;
  }
}

export default new MoviesRepository();