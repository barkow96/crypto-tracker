export default {
  routes: [
    {
      method: "GET",
      path: "/coins",
      handler: "coins.getCoins",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
