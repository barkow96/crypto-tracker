export default {
  routes: [
    {
      method: "POST",
      path: "/auth/signup",
      handler: "signup.signup",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
