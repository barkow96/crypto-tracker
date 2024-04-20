import { Portfolio } from "./choose-portfolio-panel";

export type PortfolioCoin = {
  symbol: string;
  quantity: number;
  avgBuyPrice: number;
  price: number;
  profit: number;
  transactions: number[];
};

export type PortfolioTransaction = {
  id: number;
  date: string;
  type: string;
  price: number;
  quantity: number;
  coin: string;
};

export type RemoveCoinService = (
  portfolioId: number | undefined,
  coinName: string,
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>,
  setPortfolioCoins: React.Dispatch<
    React.SetStateAction<PortfolioCoin[] | undefined>
  >
) => void;
