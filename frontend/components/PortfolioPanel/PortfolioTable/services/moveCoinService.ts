import STRAPI_moveCoin from "@/services/portfolio-panel/moveCoin";
import { MoveCoinService } from "@/types/portfolio-panel/portfolio-table";

const moveCoinService: MoveCoinService = async (
  jwt,
  sourcePortfolioId,
  destinationPortfolioId,
  coin,
  setPortfolioList
) => {
  if (!sourcePortfolioId || !destinationPortfolioId) return;

  const responseData = await STRAPI_moveCoin(
    jwt,
    sourcePortfolioId,
    destinationPortfolioId,
    coin.id
  );

  if (!responseData.metaData.ok) return;

  setPortfolioList((prevPortfolioList) => {
    if (prevPortfolioList === undefined) return prevPortfolioList;
    return prevPortfolioList.map((portfolio) => {
      switch (portfolio.id) {
        case sourcePortfolioId:
          const portfolioCoins = portfolio.coins;
          const index = portfolioCoins.findIndex(
            (portfolioCoin) => portfolioCoin.symbol === coin.symbol
          );
          if (index === -1) return portfolio;
          else {
            portfolioCoins.splice(index, 1);
            return { ...portfolio, coins: portfolioCoins };
          }

        case destinationPortfolioId:
          if (portfolio.coins === undefined) return portfolio;
          else return { ...portfolio, coins: [...portfolio.coins, coin] };

        default:
          return portfolio;
      }
    });
  });
};

export default moveCoinService;
