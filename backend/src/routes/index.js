const express = require('express');
const authRoute = require('./auth.route');

const router = express.Router();

// list of routes
const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
