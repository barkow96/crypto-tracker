import STRAPI_moveCoin from "@/services/portfolio-panel/moveCoin";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { PortfolioCoin } from "@/types/portfolio-panel/portfolio-table";

export type MoveCoinService = (
  jwt: string | null | undefined,
  sourcePortfolioId: number | undefined,
  destinationPortfolioId: number | undefined,
  coin: PortfolioCoin,
  setPortfolioList: React.Dispatch<
    React.SetStateAction<Portfolio[] | undefined>
  >
) => void;

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
          const portfolioCoins = portfolio.portfolio_coins;
          const index = portfolioCoins.findIndex(
            (portfolioCoin) => portfolioCoin.symbol === coin.symbol
          );
          if (index === -1) return portfolio;
          else {
            portfolioCoins.splice(index, 1);
            return { ...portfolio, portfolio_coins: portfolioCoins };
          }

        case destinationPortfolioId:
          if (portfolio.portfolio_coins === undefined) return portfolio;
          else
            return {
              ...portfolio,
              portfolio_coins: [...portfolio.portfolio_coins, coin],
            };

        default:
          return portfolio;
      }
    });
  });
};

export default moveCoinService;
