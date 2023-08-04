const requireLogin = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/baitap/login');
  }
  next();
};

module.exports = requireLogin;
