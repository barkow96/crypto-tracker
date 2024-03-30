const axios = require("axios");
const {
  createJsonFromRawData,
} = require("../mappers/v3-klines-endpoint/raw-data-to-json");

async function getIntervalData(interval, symbol) {
  const API_URL = `https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}USDT&interval=${interval}&limit=1`;
  const response = await axios.get(API_URL);
  const coinData = await response.data;

  const jsonData = createJsonFromRawData(coinData);

  return jsonData;
}

module.exports = { getIntervalData };
