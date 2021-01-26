const { Router } = require('express');
const AuthRouter = require('./auth.routes');
const { withAuth } = require('../middleware/auth');

module.exports.connect = app => {
  const router = Router();

  router.use('/auth', AuthRouter);

  router.route('/').get(withAuth, function (req, res) {
    res.json({ info: `Welcome, ${req.user}` });
  });

  app.use('/', router);
};