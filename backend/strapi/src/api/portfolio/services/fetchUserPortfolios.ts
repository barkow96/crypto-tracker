import { ID } from "@strapi/types/dist/types/core/entity";

type FetchPortfolioCoinsType = (portfolioId: ID) => Promise<any>;
type FetchUserPortfoliosType = (userId: ID) => Promise<any>;

const fetchPortfolioCoins: FetchPortfolioCoinsType = async (portfolioId) => {
  const portfolioData = await strapi.entityService.findOne(
    "api::portfolio.portfolio",
    portfolioId,
    { populate: ["portfolio_coins"] }
  );

  if (!portfolioData || !portfolioData.portfolio_coins) return null;
  return portfolioData.portfolio_coins;
};

export const fetchUserPortfolios: FetchUserPortfoliosType = async (userId) => {
  const userData = await strapi.entityService.findOne(
    "plugin::users-permissions.user",
    userId,
    {
      populate: ["portfolios"],
    }
  );

  const mappedPortfolios = await Promise.all(
    userData.portfolios.map(async (portfolio) => {
      const portfolioCoins = await fetchPortfolioCoins(portfolio.id);

      return { ...portfolio, coins: portfolioCoins };
    })
  );

  return mappedPortfolios;
};
