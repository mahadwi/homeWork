import pool from "../config/connection";

class UsersRepository {
  async getAllUsers() {
    const query = "SELECT * FROM users";
    const result = await pool.query(query);
    return result.rows;
  }

  async getUserById(id) {
    const query = "SELECT * FROM users WHERE id = $1";
    const result = await pool.query(query, [id]);
    return result.rows;
  }

  async deleteUser(id) {
    const query = "DELETE FROM users WHERE id = $1";
    const result = await pool.query(query, [id]);
    return result;
  }

  async updateUser(body, id) {
    const query = "UPDATE users SET email = $1 WHERE id = $2";
    const result = await pool.query(query, [body.email, id]);
    return result;
  }

  async registerUser(body) {
    const {email, gender, password, role} = body;
    const query = "INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4)";
    const result = await pool.query(query, [email, gender, password, role]);
    return result;
  }
}

export default new UsersRepository();