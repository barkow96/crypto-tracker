import { createTransactionAndCreateCoin } from "./createTransactionAndCreateCoin";
import { createTransactionAndUpdateCoin } from "./createTransactionAndUpdateCoin";
import { findCoinToBeUpdated } from "./findCoinToBeUpdated";
import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::portfolio-transaction.portfolio-transaction",
  ({ strapi }) => ({
    findCoinToBeUpdated: (portfolioId, coinName) =>
      findCoinToBeUpdated(portfolioId, coinName),
    createTransactionAndCreateCoin: (
      portfolioId,
      coinName,
      quantity,
      price,
      date,
      type
    ) => {
      createTransactionAndCreateCoin(
        portfolioId,
        coinName,
        quantity,
        price,
        date,
        type
      );
    },
    createTransactionAndUpdateCoin: (coinId, quantity, price, date, type) => {
      createTransactionAndUpdateCoin(coinId, quantity, price, date, type);
    },
  })
);
