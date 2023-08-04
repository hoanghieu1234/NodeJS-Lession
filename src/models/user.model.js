const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect.mysqlDB');

const User = sequelize.define('User', {
  //Định nghĩa các cột trong bảng user
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
