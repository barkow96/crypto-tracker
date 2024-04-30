import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::portfolio.portfolio",
  ({ strapi }) => ({
    async find(ctx) {
      const ERROR_MESSAGE = "Unsuccessful fetching of portfolios data";

      const userId = ctx.state.user.id;

      try {
        const userPortfolios = await strapi
          .service("api::portfolio.portfolio")
          .fetchUserPortfolios(userId);

        if (userPortfolios && userPortfolios.length >= 0) {
          ctx.response.status = 200;
          ctx.body = {
            data: { portfolios: userPortfolios },
            metaData: {},
          };
        } else {
          ctx.response.status = 204;
          ctx.body = {
            data: { portfolios: [] },
            metaData: { message: "You have no portfolios yet." },
          };
        }
      } catch (err) {
        ctx.response.status = 500;
        ctx.body = {
          message: ERROR_MESSAGE,
          error: err ? err : "Error message missing",
        };
      }
    },
  })
);
