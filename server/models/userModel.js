import { pool } from "../config/db.js";

//  insert a new user
export const createUser = async (username, email, hashedPassword) => {
  try {
    const result = await pool.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
      [username, email, hashedPassword]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error("Error creating user: " + err.message);
  }
};

//  get a user by email
export const getUserByEmail = async (email) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    return result.rows[0];
  } catch (err) {
    throw new Error("Error fetching user: " + err.message);
  }
};
