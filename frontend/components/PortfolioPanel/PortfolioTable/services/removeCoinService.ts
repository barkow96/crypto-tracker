import STRAPI_removeCoin from "@/services/portfolio-panel/removeCoin";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { PortfolioCoin } from "@/types/portfolio-panel/portfolio-table";

type RemoveCoinService = (
  jwt: string | null | undefined,
  coin: PortfolioCoin,
  portfolioId: number | undefined,
  setPortfolioList: React.Dispatch<
    React.SetStateAction<Portfolio[] | undefined>
  >
) => void;

const removeCoinService: RemoveCoinService = async (
  jwt,
  coin,
  portfolioId,
  setPortfolioList
) => {
  const responseData = await STRAPI_removeCoin(jwt, coin.id);

  if (!responseData.metaData.ok) return;

  setPortfolioList((prevPortfolioList) => {
    if (prevPortfolioList === undefined) return prevPortfolioList;

    return prevPortfolioList.map((portfolio) => {
      if (portfolio.id !== portfolioId) return portfolio;
      else {
        const portfolioCoins = portfolio.portfolio_coins;
        const index = portfolioCoins.findIndex(
          (portfolioCoin) => portfolioCoin.id === coin.id
        );
        if (index === -1) return portfolio;
        else {
          portfolioCoins.splice(index, 1);
          return { ...portfolio, portfolio_coins: portfolioCoins };
        }
      }
    });
  });
};

export default removeCoinService;
