#! /usr/bin/env node

const { Client } = require("pg");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const connectionString =
  process.argv[2] || // 👈 command line argument
  process.env.DATABASE_URL ||
  `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST || "localhost"}:${process.env.PGPORT || "5432"}/${process.env.PGDATABASE}`;

const client = new Client({
  connectionString,
});
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
