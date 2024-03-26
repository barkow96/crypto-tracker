const axios = require("axios");

async function getIntervalData(interval, symbol) {
  const API_URL = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=1`;
  const response = await axios.get(API_URL);
  const coinData = response.data;

  const coinReadableData = {
    openTime: coinData[0][0],
    openPrice: coinData[0][1],
    highPrice: coinData[0][2],
    lowPrice: coinData[0][3],
    closePrice: coinData[0][4],
    volume: coinData[0][5],
    closeTime: coinData[0][6],
    quoteAssetVolume: coinData[0][7],
    numberOfTrades: coinData[0][8],
    takerBuyBaseAssetVolume: coinData[0][9],
    takerBuyQuoteAssetVolume: coinData[0][10],
    unused: coinData[0][11],
  };

  return {
    interval: interval,
    openPrice: coinReadableData.openPrice,
    volume: coinReadableData.quoteAssetVolume,
  };
}

module.exports = { getIntervalData };
