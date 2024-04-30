import { MoveCoinService } from "@/types/portfolio-panel/portfolio-table";

const moveCoinService: MoveCoinService = (
  sourcePortfolioId,
  destinationPortfolioId,
  coinName
) => {
  // --TO BE ADJUSTED IN NEXT STAGES--
  // setPortfolioList((prevPortfolioList) => {
  //   return prevPortfolioList.map((portfolio) => {
  //     if (
  //       portfolio.id !== sourcePortfolioId &&
  //       portfolio.id !== destinationPortfolioId
  //     )
  //       return portfolio;
  //     else if (portfolio.id === destinationPortfolioId)
  //       return { ...portfolio, coins: [...portfolio.coins, coinName] };
  //     else if (portfolio.id === sourcePortfolioId) {
  //       const portfolioCoins = portfolio.coins;
  //       const index = portfolioCoins.indexOf(coinName);
  //       if (index === -1) return portfolio;
  //       else {
  //         portfolioCoins.splice(index, 1);
  //         return { ...portfolio, coins: portfolioCoins };
  //       }
  //     } else return portfolio;
  //   });
  // });
};

export default moveCoinService;
