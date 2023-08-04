const express = require('express');

const route = express.Router();

route.get('/set', (req, res) => {
  //set cookie
  // res.setHeader('set-cookie', 'username=buivanvu');
  res
    .cookie('hello', 'world', {
      // maxAge:
      // expires: new Date,
      // httpOnly: true
    })
    .cookie('quanque', 'huy', {
      httpOnly: true,
      secure: false,
    });
  res.send('Set Cookie');
});

route.get('/get', (req, res) => {
  const cookie = req.headers.cookie;
  console.log('cookieHeader', cookie);
  const cookieParser = req.cookies.username;
  console.log('cookieParser', cookieParser);
  res.json({
    cookieHeader: cookie,
    cookieParser: cookieParser,
  });
});

route.get('/delete', (req, res) => {
  res.clearCookie('hello');
  res.send('delete cookies');
});

module.exports = route;
