import { Pool } from "pg";

console.log(process.env.MYSVCCLUSTER_SECRET);

const pool = new Pool({
  user: process.env.MYSVCCLUSTER_SECRET.username,
  host: process.env.MYSVCCLUSTER_SECRET.host,
  database: process.env.MYSVCCLUSTER_SECRET.dbname,
  password: process.env.MYSVCCLUSTER_SECRET.password,
  port: process.env.MYSVCCLUSTER_SECRET.port,
});

export const getTableCount = async () => {
  try {
    const res = await pool.query(
      "select count(*) as c from information_schema.tables;"
    );
    return res.rows[0].c;
  } catch (err) {
    throw err.message;
  }
};
