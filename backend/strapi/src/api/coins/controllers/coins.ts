import { Context } from "koa";

export default {
  getCoins: async (ctx: Context) => {
    const ERROR_MESSAGE = "Unsuccessful connection to data provider API";

    let coinsList: CoinsListType;
    try {
      coinsList = await strapi.service("api::coins.coins").getCoinsList();
      ctx.response.status = 200;
      ctx.body = { data: coinsList, metaData: { dataParts: 1 } };
    } catch (err) {
      ctx.response.status = 500;
      ctx.body = {
        message: ERROR_MESSAGE,
        error: err ? err : "Error message missing",
      };
    }
  },
};
