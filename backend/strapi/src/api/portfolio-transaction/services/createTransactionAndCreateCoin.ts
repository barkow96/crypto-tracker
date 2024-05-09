type CreateTransactionAndCreateCoinType = (
  portfolioId: number,
  coinName: string,
  quantity: number,
  price: number,
  date: string,
  type: "BUY" | "SELL"
) => Promise<any>;

export const createTransactionAndCreateCoin: CreateTransactionAndCreateCoinType =
  async (portfolioId, coinName, quantity, price, date, type) => {
    //CREATING NEW TRANSACTION
    const createdTransaction = await strapi.entityService.create(
      "api::portfolio-transaction.portfolio-transaction",
      {
        data: {
          date,
          type,
          price: Math.abs(price),
          quantity: Math.abs(quantity),
          publishedAt: new Date().toISOString(),
        },
      }
    );

    //CREATING NEW COIN
    const createdCoin = await strapi.entityService.create(
      "api::portfolio-coin.portfolio-coin",
      {
        data: {
          symbol: coinName,
          quantity: type === "BUY" ? Math.abs(quantity) : 0,
          avgBuyPrice: type === "BUY" ? Math.abs(price) : 0,
          publishedAt: new Date().toISOString(),
          portfolio_transactions: { connect: [createdTransaction.id] },
        },
      }
    );

    //UPDATING THE PORTFOLIO
    const updatedPortfolio = await strapi.entityService.update(
      "api::portfolio.portfolio",
      portfolioId,
      { data: { portfolio_coins: { connect: [createdCoin.id] } } }
    );
  };
