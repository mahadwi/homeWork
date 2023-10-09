import pool from "../db/connection.js";

const Users = {};

Users.getAll = async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  return result;
}

Users.register = async (req, res) => {
  const body = req.body;
  const result = await pool.query('INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4)', [body.email, body.gender, body.password, body.role]);
  return result;
}

Users.login = async (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT id, email, role FROM users WHERE email=$1 AND password=$2';
  const result = await pool.query(query, [email, password]);
  return result;
}

export default Users;

