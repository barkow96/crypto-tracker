import STRAPI_addTransaction from "@/services/portfolio-panel/addTransaction";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";

export type AddTransactionService = (
  jwt: string | null | undefined,
  portfolioId: number,
  coinName: string,
  date: string,
  type: "BUY" | "SELL",
  price: number,
  quantity: number,
  setPortfolioList: React.Dispatch<
    React.SetStateAction<Portfolio[] | undefined>
  >
) => void;

const addTransactionService: AddTransactionService = async (
  jwt,
  portfolioId,
  coinName,
  date,
  type,
  price,
  quantity,
  setPortfolioList
) => {
  const responseData = await STRAPI_addTransaction(
    jwt,
    portfolioId,
    coinName,
    date,
    type,
    price,
    quantity
  );

  if (!responseData || !responseData.metaData.ok) return;

  const isCoinAndTransactionNewlyCreated =
    ("createdTransaction" && "createdCoin") in responseData.data;

  setPortfolioList((prevPortfolioList) => {
    if (prevPortfolioList === undefined) return prevPortfolioList;

    return prevPortfolioList.map((portfolio) => {
      if (portfolio.id !== portfolioId) return portfolio;

      //SCENARIO IN WHICH ONLY NEW TRANSACTION NEEDS TO BE CREATED
      if (!isCoinAndTransactionNewlyCreated) {
        const portfolioCoins = portfolio.portfolio_coins;
        const updatedCoins = portfolioCoins.map((coin) => {
          if (coin.symbol !== coinName) return coin;

          //CALCULATE NEW VALUES OF QUANTITY AND AVGBUYPRICE
          let newQuantity, newAvgBuyPrice: number;
          if (responseData.data.createdTransaction.type === "BUY") {
            newQuantity =
              coin.quantity + responseData.data.createdTransaction.quantity;
            newAvgBuyPrice =
              (coin.quantity * coin.avgBuyPrice +
                responseData.data.createdTransaction.quantity *
                  responseData.data.createdTransaction.price) /
              newQuantity;
          } else {
            newQuantity =
              coin.quantity - responseData.data.createdTransaction.quantity;
            newAvgBuyPrice = coin.avgBuyPrice;
          }
          if (newQuantity < 0) newQuantity = 0;

          return {
            id: coin.id,
            symbol: coin.symbol,
            quantity: newQuantity,
            avgBuyPrice: newAvgBuyPrice,
            portfolio_transactions: [
              ...coin.portfolio_transactions,
              responseData.data.createdTransaction,
            ],
          };
        });

        return { ...portfolio, portfolio_coins: updatedCoins };
      }
      //SCENARIO IN WHICH NEW TRANSACTION AND NEW COIN NEED TO BE CREATED
      else {
        const newPortfolioCoins = portfolio.portfolio_coins;
        newPortfolioCoins.push({
          ...responseData.data.createdCoin,
          portfolio_transactions: [responseData.data.createdTransaction],
        });

        return { ...portfolio, portfolio_coins: newPortfolioCoins };
      }
    });
  });
};

export default addTransactionService;
