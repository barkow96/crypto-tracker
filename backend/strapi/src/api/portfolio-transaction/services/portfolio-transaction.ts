import { createTransactionAndCreateCoin } from "./createTransactionAndCreateCoin";
import { createTransactionAndUpdateCoin } from "./createTransactionAndUpdateCoin";
import { findCoinToBeUpdated } from "./findCoinToBeUpdated";
import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::portfolio-transaction.portfolio-transaction",
  ({ strapi }) => ({
    findCoinToBeUpdated: async (portfolioId, coinName) =>
      await findCoinToBeUpdated(portfolioId, coinName),
    createTransactionAndCreateCoin: async (
      portfolioId,
      coinName,
      quantity,
      price,
      date,
      type
    ) =>
      await createTransactionAndCreateCoin(
        portfolioId,
        coinName,
        quantity,
        price,
        date,
        type
      ),
    createTransactionAndUpdateCoin: async (
      coinId,
      quantity,
      price,
      date,
      type
    ) =>
      await createTransactionAndUpdateCoin(coinId, quantity, price, date, type),
  })
);
