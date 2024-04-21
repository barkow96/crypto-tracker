import {
  PortfolioCoin,
  PortfolioTransaction,
} from "@/types/portfolio-panel/portfolio-table";
import { useEffect, useState } from "react";

export function usePortfolioTransactions(
  coins: PortfolioCoin[] | undefined,
  transactions: PortfolioTransaction[]
) {
  const [portfolioTransactions, setPortfolioTransactions] = useState<
    PortfolioTransaction[] | undefined
  >(undefined);

  useEffect(() => {
    const transactionsData: PortfolioTransaction[] = [];

    coins?.forEach((coin) => {
      coin.transactions.forEach((coinTransaction) => {
        const foundTransaction = transactions.find(
          (transaction) => transaction.id === coinTransaction
        );
        if (foundTransaction) transactionsData.push(foundTransaction);
      });
    });

    setPortfolioTransactions(transactionsData);
  }, [coins, transactions]);

  return { portfolioTransactions, setPortfolioTransactions };
}
