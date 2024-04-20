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
