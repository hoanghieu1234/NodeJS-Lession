const Sequelize = require('../../libs/connect.sql');
const { DataTypes } = require('sequelize');

// Định nghĩa ra một bảng product gồm các trường ...
const product = Sequelize.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'product',
  }
);

product.sync().then(() => {
  console.log('Truy vấn Database thành công');
});

module.exports = product;
