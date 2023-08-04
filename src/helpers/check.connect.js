'use strict';
const mongoose = require('mongoose');
const os = require('os'); // được tích hợp sẵn với nodejs để làm việc với thằng với các chức năng trong hệ thống mà mình đang sử dụng
const process = require('process');
const _SECONDS = 5000;
//count Connect
const countConnect = () => {
  const quantityConnection = mongoose.connections.length;
  console.log(quantityConnection);
  console.log(`Number of connections::${quantityConnection}`);
  return quantityConnection;
};

//check over Load
const checkOverload = () => {
  setInterval(() => {
    const quantityConnection = mongoose.connections.length;
    const quantityCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = quantityCores * 5;
    console.log(`Active connection: ${quantityConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
    if (quantityConnection > maxConnections) {
      console.log(`Connection overload detected`);
    }
  }, _SECONDS);
};

module.exports = {
  countConnect,
  checkOverload,
};
