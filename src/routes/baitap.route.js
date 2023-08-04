const express = require('express');
const route = express.Router();
const requireLogin = require('../middlewares/requireLogin.midedleware');

//fake user
const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
];

//login
route.get('/login', (req, res) => {
  res.render('../views/pages/Login');
});
route.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    req.session.user = user;
    res.cookie('loggedIn', true);
    return res.redirect('/baitap/home');
  }
  res.send('Đăng nhập không thành công!');
});

//home
route.get('/home', requireLogin, (req, res) => {
  res.render('../views/pages/Home', { user: req.session.user });
});

// Route thêm sản phẩm vào giỏ hàng
route.post('/add-to-cart', requireLogin, (req, res) => {
  const { product } = req.body;
  if (!req.session.cart) {
    req.session.cart = [];
  }
  req.session.cart.push(product);
  res.redirect('/baitap/cart');
});
// Trang giỏ hàng
route.get('/cart', requireLogin, (req, res) => {
  const cart = req.session.cart || [];
  res.render('../views/pages/Cart', { cart });
});

// Route đăng xuất
route.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('loggedIn');
  res.redirect('/baitap/login');
});
module.exports = route;
