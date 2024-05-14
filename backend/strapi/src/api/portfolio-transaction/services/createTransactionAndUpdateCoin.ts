type CreateTransactionAndUpdateCoinType = (
  coinId: number,
  quantity: number,
  price: number,
  date: string,
  type: "BUY" | "SELL"
) => Promise<any>;

export const createTransactionAndUpdateCoin: CreateTransactionAndUpdateCoinType =
  async (coinId, quantity, price, date, type) => {
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

    //FETCHING DATA ABOUT COIN TO BE UPDATED
    const coinToBeUpdated = await strapi.entityService.findOne(
      "api::portfolio-coin.portfolio-coin",
      coinId
    );

    //UPDATING THE COIN
    let newQuantity: number, newAvgBuyPrice: number;
    if (type === "BUY") {
      newQuantity = coinToBeUpdated.quantity + quantity;
      newAvgBuyPrice =
        (coinToBeUpdated.avgBuyPrice * coinToBeUpdated.quantity +
          price * quantity) /
        newQuantity;
    }
    if (type === "SELL") {
      newQuantity = coinToBeUpdated.quantity - quantity;
      newAvgBuyPrice = coinToBeUpdated.avgBuyPrice;
    }
    if (newQuantity < 0) newQuantity = 0;

    const updatedCoin = await strapi.entityService.update(
      "api::portfolio-coin.portfolio-coin",
      coinId,
      {
        data: {
          quantity: newQuantity,
          avgBuyPrice: newAvgBuyPrice,
          portfolio_transactions: { connect: [createdTransaction.id] },
        },
      }
    );

    return { createdTransaction };
  };
