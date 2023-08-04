const express = require('express');

const route = express.Router();

route.get('/set', (req, res) => {
  //set session
  req.session.user = {
    username: 'bui van vu',
    age: 23,
    email: 'vu@gmail.com',
  };
  res.send('ok');
});

route.get('/get', (req, res) => {
  const userSession = req.session;
  res.json({
    userSession: userSession,
  });
});

route.get('/delete', (req, res) => {
  req.session.destroy();
  res.send('HuY tHANH CONG');
});

module.exports = route;
