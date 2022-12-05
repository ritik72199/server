const { createPool } = require("mysql");

const pool = createPool({
  port: 3306,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "ROGER_DB",
  connectionLimit: 150,
});

module.exports = pool;
