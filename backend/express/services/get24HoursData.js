const axios = require("axios");

async function get24HoursData(symbol) {
  const API_URL = `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`;
  const response = await axios.get(API_URL);
  const coinData = response.data;

  const coinReadableData = {
    symbol: coinData.symbol,
    priceChange: coinData.priceChange,
    priceChangePercent: coinData.priceChangePercent,
    weightedAvgPrice: coinData.weightedAvgPrice,
    prevClosePrice: coinData.prevClosePrice,
    lastPrice: coinData.lastPrice,
    lastQty: coinData.lastQty,
    bidPrice: coinData.bidPrice,
    bidQty: coinData.bidQty,
    askPrice: coinData.askPrice,
    askQty: coinData.askQty,
    openPrice: coinData.openPrice,
    highPrice: coinData.highPrice,
    lowPrice: coinData.lowPrice,
    volume: coinData.volume,
    quoteVolume: coinData.quoteVolume,
    openTime: coinData.openTime,
    closeTime: coinData.closeTime,
    firstId: coinData.firstId,
    lastId: coinData.lastId,
    count: coinData.count,
  };
  return {
    symbol: coinReadableData,
    priceChange24H: priceChange,
    volume24H: volume,
  };
}

module.exports = { get24HoursData };
