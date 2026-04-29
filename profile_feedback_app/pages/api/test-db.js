import { pool } from "@/src/repositories/lib/db";

export default async function handler(req, res) {
  try {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json({ success: true, server_time: result.rows[0] });
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}