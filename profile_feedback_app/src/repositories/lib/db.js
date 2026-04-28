import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // <- URL ของ Neon
  ssl: {
    rejectUnauthorized: false,  // จำเป็นกับ Neon
  },
});