const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST || "localhost"}:${process.env.PGPORT || "5432"}/${process.env.PGDATABASE}`,
});
