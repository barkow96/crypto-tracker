const axios = require("axios");

async function get24HoursData(symbol) {
  const API_URL = `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}USDT`;
  const response = await axios.get(API_URL);
  const coinData = response.data;

  return coinData;
}

module.exports = { get24HoursData };
