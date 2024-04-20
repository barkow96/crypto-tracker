import { RemoveCoinService } from "@/types/portfolio-panel/portfolio-table";

const removeCoinService: RemoveCoinService = (
  portfolioId,
  coinName,
  setPortfolioList,
  setPortfolioCoins
) => {
  setPortfolioList((prevPortfolioList) => {
    return prevPortfolioList.map((portfolio) => {
      if (portfolio.id !== portfolioId) return portfolio;
      else {
        const portfolioCoins = portfolio.coins;

        const index = portfolioCoins.indexOf(coinName);
        if (index === -1) return portfolio;
        else {
          portfolioCoins.splice(index, 1);
          return { ...portfolio, coins: portfolioCoins };
        }
      }
    });
  });
  setPortfolioCoins((prevPortfolioCoins) => {
    if (prevPortfolioCoins === undefined) return undefined;
    else prevPortfolioCoins.filter((coin) => coin.symbol === coinName);
  });
};

export default removeCoinService;
