'use strict';
const mongoose = require('mongoose');
const config = require('../configs/mongod.config');

const connectDB = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

console.log('database connection', connectDB);
const { countConnect } = require('../helpers/check.connect');
// const { checkOverload } = require('../helpers/check.connect');

// mongoose
//   .connect(connectDB)
//   .then((_) => console.log('Connect Mongodb Success'))
//   .catch((err) => console.log(`Error Connect`));

// if (1 === 0) {
//   mongoose.set('debug', true);
//   mongoose.set('debug', { color: true });
// }

// module.exports = mongoose;

//using Design Pattern
class Database {
  constructor() {
    this.connect();
  }
  //connect
  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
    mongoose
      .connect(connectDB, {
        maxPoolSize: 50,
      })
      .then((_) => {
        console.log('Connect MongoDB successfully');
        countConnect();
        // checkOverload();
      })
      .catch((err) => console.log('Error Connect'));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;
