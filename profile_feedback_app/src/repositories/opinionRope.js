import pool from "@/src/repositories/lib/db";


export const saveOpinion = async (data) => {

  const { name, email, create_date, rating, opinion } = data;

  const query = `
    INSERT INTO opinions (name, email, create_date, rating, opinion)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [
    name,
    email,
    new Date(create_date),   
    parseInt(rating),   
    opinion
  ];

  const res = await pool.query(query, values);
  return res.rows[0];
};