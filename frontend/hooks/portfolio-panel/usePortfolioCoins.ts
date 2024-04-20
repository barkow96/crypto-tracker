import {
  Portfolio,
  PortfolioCoin,
} from "@/types/portfolio-panel/choose-portfolio-panel";
import { useEffect, useState } from "react";

export function usePortfolioCoins(
  portfolio: Portfolio | undefined,
  coinsList: PortfolioCoin[]
) {
  const [portfolioCoins, setPortfolioCoins] = useState<
    PortfolioCoin[] | undefined
  >(undefined);

  useEffect(() => {
    const coinsData: PortfolioCoin[] = [];

    portfolio?.coins.forEach((portfolioCoin) => {
      const data = coinsList.find((coin) => coin.symbol === portfolioCoin);
      if (data) coinsData.push(data);
    });

    if (coinsData) setPortfolioCoins(coinsData);
  }, [portfolio, coinsList]);

  return { portfolioCoins };
}
