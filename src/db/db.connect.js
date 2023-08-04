const mysql = require("mysql2");
const dbConfig = require("../configs/dbConfig");
const fs = require("fs");
const path = require("path");

const pathQuerrySql = path.join(__dirname, "../../query_database.sql");

const conNectSql = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

conNectSql.connect(function (err) {
  if (err) throw err;
  console.log("oke");
});

module.exports = conNectSql;
