// level 0
// const mysql = require('mysql2');

// const connectMysql = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'mysql',
// });

// connectMysql.connect(function (err) {
//   if (err) {
//     throw err;
//   }

//   console.log('connect oke');
// });

//level 1
const dbConfig = require('../configs/mysql.config');
const Sequelize = require('sequelize');
const connectMysql = new Sequelize(dbConfig.db.name, dbConfig.db.user, dbConfig.db.password, {
  host: dbConfig.db.host,
  dialect: dbConfig.db.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

module.exports = connectMysql;
