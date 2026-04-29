import pool from "@/src/repositories/lib/db";


export const getOpinion = async () => {

  const result = await pool.query(
    `SELECT name, email, create_date, rating, opinion FROM opinions ORDER BY id DESC`
  );

  return result.rows;
};