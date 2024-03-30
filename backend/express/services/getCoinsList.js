const axios = require("axios");
const {
  searchedReferencePairs,
  stableCoinsReferences,
} = require("../data/coin-references");
const {
  filterDataInitially,
} = require("../mappers/v3-ticker-24hr-endpoint/raw-data-initial-filter");
const {
  fillPricesOfReferencePairs,
} = require("../mappers/v3-ticker-24hr-endpoint/reference-pairs-with-prices");
const {
  standarizeCoinsPricesToUsdt,
} = require("../mappers/v3-ticker-24hr-endpoint/standarize-coins-prices");
const {
  filterUniquePairs,
} = require("../mappers/v3-ticker-24hr-endpoint/final-data-unique-pairs-filter");

async function getCoinsList() {
  // Fetch data from external API
  const API_URL = "https://api.binance.com/api/v3/ticker/24hr";
  const response = await axios.get(API_URL);
  const coinsData = response.data;

  // Perform initial filtering of received data
  const mappedCoins = filterDataInitially(coinsData);

  // Fill in available prices of reference pairs
  const referencePairsWithPrices = fillPricesOfReferencePairs(
    searchedReferencePairs,
    mappedCoins
  );

  // Create array with data in relation to USD
  const coinsToUsd = standarizeCoinsPricesToUsdt(
    mappedCoins,
    stableCoinsReferences,
    referencePairsWithPrices
  );

  // Create array with with selected data for unique coins
  const coinsList = filterUniquePairs(coinsToUsd, stableCoinsReferences);

  return coinsList;
}

module.exports = { getCoinsList };
