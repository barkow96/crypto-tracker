import { ID } from "@strapi/types/dist/types/core/entity";

type FindUserCoinsIdsType = (userData: UserDataType) => Promise<number[]>;
interface UserDataType {
  portfolios: { id: ID }[];
}

export const findUserCoinsIds: FindUserCoinsIdsType = async (
  userData: UserDataType
) => {
  const userPortfolioIds = userData.portfolios.map((portfolio) => portfolio.id);
  const userPortfoliosWithCoins = await strapi.entityService.findMany(
    "api::portfolio.portfolio",
    {
      filters: { id: { $in: userPortfolioIds } },
      populate: { portfolio_coins: true },
    }
  );
  const userCoinsIds = [];
  userPortfoliosWithCoins.forEach((portfolio) => {
    portfolio.portfolio_coins.forEach((coin) => {
      userCoinsIds.push(parseInt(coin.id.toString()));
    });
  });

  return userCoinsIds;
};
