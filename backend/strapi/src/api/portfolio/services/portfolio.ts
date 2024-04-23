import { factories } from "@strapi/strapi";
import { fetchUserActivePortfolio } from "./fetchUserActivePortfolio";

export default factories.createCoreService(
  "api::portfolio.portfolio",
  ({ strapi }) => ({
    fetchUserActivePortfolio: async (userId) =>
      fetchUserActivePortfolio(userId),
  })
);
