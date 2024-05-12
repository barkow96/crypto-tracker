import { factories } from "@strapi/strapi";
import { findUserCoinsIds } from "./findUserCoinsIds";
import { moveCoin } from "./moveCoin";

export default factories.createCoreService(
  "api::portfolio-coin.portfolio-coin",
  () => ({
    findUserCoinsIds: async (userData) => await findUserCoinsIds(userData),
    moveCoin: async (sourcePortfolioId, destinationPortfolioId, coinId) => {
      moveCoin(sourcePortfolioId, destinationPortfolioId, coinId);
    },
  })
);
