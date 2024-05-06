import { factories } from "@strapi/strapi";
import { findUserCoinsIds } from "./findUserCoinsIds";

export default factories.createCoreService(
  "api::portfolio-coin.portfolio-coin",
  () => ({
    findUserCoinsIds: (userData) => findUserCoinsIds(userData),
  })
);
