import { ID } from "@strapi/types/dist/types/core/entity";
type MoveCoinType = (
  sourcePortfolioId: ID,
  destinationPortfolioId: ID,
  coinId: ID
) => void;
interface PortfolioType {
  portfolio_coins?: { id: ID }[];
}

export const moveCoin: MoveCoinType = async (
  sourcePortfolioId,
  destinationPortfolioId,
  coinId
) => {
  //UPDATING SOURCE PORTFOLIO
  await strapi.entityService.update(
    "api::portfolio.portfolio",
    sourcePortfolioId,
    {
      data: {
        portfolio_coins: { disconnect: [coinId] },
      },
    }
  );

  //UPDATING DESTINATION PORTFOLIO
  const destinationPortfolio: PortfolioType =
    await strapi.entityService.findOne(
      "api::portfolio.portfolio",
      destinationPortfolioId,
      {
        populate: { portfolio_coins: true },
      }
    );
  const destinationPortfolioCoinsIds = destinationPortfolio.portfolio_coins.map(
    (coin) => coin.id
  );
  await strapi.entityService.update(
    "api::portfolio.portfolio",
    destinationPortfolioId,
    {
      data: {
        portfolio_coins: {
          connect: [...destinationPortfolioCoinsIds, coinId],
        },
      },
    }
  );
};
