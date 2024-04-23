type FetchUserActivePortfolioType = (userId: number) => Promise<any>;

export const fetchUserActivePortfolio: FetchUserActivePortfolioType = async (
  userId
) => {
  const userData = await strapi.entityService.findOne(
    "plugin::users-permissions.user",
    userId,
    {
      populate: ["portfolios", "portfolio_coins"],
    }
  );

  const userPortfolios = userData.portfolios;
  const userCoins = userData.portfolio_coins;

  return { userPortfolios, userCoins };
};
