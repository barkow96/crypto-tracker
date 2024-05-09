import { ID } from "@strapi/types/dist/types/core/entity";

type FindCoinToBeUpdatedType = (
  portfolioId: number,
  coinName: string
) => Promise<ID | null>;

export const findCoinToBeUpdated: FindCoinToBeUpdatedType = async (
  portfolioId,
  coinName
) => {
  const portfolioToBeUpdated = await strapi.entityService.findOne(
    "api::portfolio.portfolio",
    portfolioId,
    { populate: ["portfolio_coins"] }
  );

  const coinToBeUpdated = portfolioToBeUpdated.portfolio_coins.find(
    (coin) => coin.symbol === coinName
  );

  if (coinToBeUpdated) return coinToBeUpdated.id;
  return null;
};
