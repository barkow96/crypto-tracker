const ERROR_MESSAGE =
  "STRAPI Coins (external) API - unsuccessful connection to data provider API";

export default {
  getCoins: async (ctx) => {
    let coinsList: CoinsListType;
    try {
      coinsList = await strapi.service("api::coins.coins").getCoinsList();
      ctx.response.status = 200;
      ctx.body = { data: coinsList, metaData: { ok: true, dataParts: 1 } };
    } catch (err) {
      ctx.response.status = 500;
      ctx.body = {
        ok: false,
        message: ERROR_MESSAGE,
        error: err ? err : "Error message missing",
      };
    }
  },
};
