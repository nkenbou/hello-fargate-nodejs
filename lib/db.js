import { Client } from "pg";

const client = new Client({
  user: process.env.MYSVCCLUSTER_SECRET.username,
  host: process.env.MYSVCCLUSTER_SECRET.host,
  database: process.env.MYSVCCLUSTER_SECRET.dbname,
  password: process.env.MYSVCCLUSTER_SECRET.password,
  port: process.env.MYSVCCLUSTER_SECRET.port,
});

export const getTableCount = () => {
  client.connect();
  client.query(
    "select count(*) from information_schema.tables;",
    (err, res) => {
      console.log(err, res);
      client.end();
    }
  );
};
