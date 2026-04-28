import { Pool } from "pg";


const pool = new Pool({
  user: "admin1",
  host: "localhost",
  database: "opinion",
  password: "123",
  port: 5432,
});

export const saveOpinion = async (opinion) => {
  const { name, email, create_date, rating, opinion_text } = opinion;
  const query = `
    INSERT INTO opinions (name, email, create_date, rating, opinion)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [name, email, create_date, rating, opinion_text];

  const res = await pool.query(query, values);
  return res.rows[0];
};