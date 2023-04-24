const express = require('express');
const authRoute = require('./auth.route');
const bookingRoute = require('./booking.route');
const userRoute = require('./user.route');

const router = express.Router();

// list of routes
const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/booking',
    route: bookingRoute,
  },
  {
    path: '/user',
    route: userRoute,
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
