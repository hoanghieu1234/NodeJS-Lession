const dbConfig = require('../config/config');
const Sequelize = require('sequelize');

const connectSql = new Sequelize(dbConfig.db.DATABASE, dbConfig.db.USER, dbConfig.db.PASSWORD, {
  host: dbConfig.db.HOST,
  dialect: dbConfig.db.dialect,

  pool: {
    max: dbConfig.db.max,
    min: dbConfig.db.min,
    acquire: dbConfig.db.acquire,
    idle: dbConfig.db.idle,
  },
});

module.exports = connectSql;
