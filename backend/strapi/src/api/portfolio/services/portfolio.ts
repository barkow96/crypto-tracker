import { factories } from "@strapi/strapi";
import { fetchUserPortfolios } from "./fetchUserPortfolios";

export default factories.createCoreService(
  "api::portfolio.portfolio",
  ({ strapi }) => ({
    fetchUserPortfolios: async (userId) => fetchUserPortfolios(userId),
  })
);
