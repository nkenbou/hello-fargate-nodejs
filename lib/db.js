import { Client } from "pg";

const client = new Client({
  user: process.env.MYSVCCLUSTER_SECRET.username,
  host: process.env.MYSVCCLUSTER_SECRET.host,
  database: process.env.MYSVCCLUSTER_SECRET.dbname,
  password: process.env.MYSVCCLUSTER_SECRET.password,
  port: process.env.MYSVCCLUSTER_SECRET.port,
});

export const getTableCount = async () => {
  client.connect();
  try {
    const res = await client.query(
      "select count(*) as c from information_schema.tables;"
    );
    return res.rows[0].c;
  } catch (err) {
    throw "db access error!";
  } finally {
    client.end();
  }
};
