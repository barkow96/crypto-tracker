const express = require("express");
const router = express.Router();

// Import handlers for the routes
const { getCoin } = require("../controllers/coinController");
const { getCoins } = require("../controllers/coinsController");
const { handleStrapiTest } = require("../controllers/strapiTestController");

// Define supported routes
const routes = [
  { path: "/coins", method: "get", middleware: [], handler: getCoins },
  { path: "/coin/:name", method: "get", middleware: [], handler: getCoin },
  {
    path: "/strapi-test",
    method: "get",
    middleware: [],
    handler: handleStrapiTest,
  },
];

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  if (middleware && middleware.length > 0)
    router[method](path, middleware, handler);
  else router[method](path, handler);
});

module.exports = router;
