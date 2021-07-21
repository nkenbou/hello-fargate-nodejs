import { Pool } from "pg";

const secret = JSON.parse(process.env.MYSVCCLUSTER_SECRET);

const pool = new Pool({
  user: secret.username,
  host: secret.host,
  database: secret.dbname,
  password: secret.password,
  port: secret.port,
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
