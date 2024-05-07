import { factories } from "@strapi/strapi";
import { findUserCoinsIds } from "./findUserCoinsIds";
import { moveCoin } from "./moveCoin";

export default factories.createCoreService(
  "api::portfolio-coin.portfolio-coin",
  () => ({
    findUserCoinsIds: (userData) => findUserCoinsIds(userData),
    moveCoin: (sourcePortfolioId, destinationPortfolioId, coinId) => {
      moveCoin(sourcePortfolioId, destinationPortfolioId, coinId);
    },
  })
);
