export default {
  routes: [
    {
      method: "POST",
      path: "/portfolio-coins/move",
      handler: "custom-portfolio-coin.move",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
