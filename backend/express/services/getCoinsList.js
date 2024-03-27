const axios = require("axios");
const {
  searchedReferencePairs,
  stableCoinsReferences,
} = require("../data/coin-references");

async function getCoinsList() {
  // Fetch data from external API
  const API_URL = "https://api.binance.com/api/v3/ticker/24hr";
  const response = await axios.get(API_URL);
  const coinsData = response.data;

  // Perform initial filtering of received data
  const mappedCoins = coinsData
    .filter((coin) => parseFloat(coin.lastPrice) !== 0)
    .map((coin) => ({
      symbol: coin.symbol,
      price: parseFloat(coin.lastPrice),
      priceChange24H: parseFloat(coin.priceChangePercent),
      volume24H: parseFloat(coin.volume),
    }));

  // Complete available prices of reference pairs
  searchedReferencePairs.forEach((reference) => {
    const foundPair = mappedCoins.find(
      (coin) => coin.symbol === reference.pair
    );
    const referencePairPrice = foundPair ? foundPair.price : null;
    reference.price = referencePairPrice;
  });

  // Create array with data in relation to USD
  const coinsToUsd = mappedCoins
    .map((coin) => {
      let referenceToStable = false;
      let bestFitReferenceCoin = "";

      stableCoinsReferences.forEach((referenceCoin) => {
        if (
          coin.symbol.endsWith(referenceCoin) &&
          referenceCoin.length > bestFitReferenceCoin.length
        ) {
          referenceToStable = true;
          bestFitReferenceCoin = referenceCoin;
        }
      });

      if (referenceToStable)
        return {
          ...coin,
          symbol: coin.symbol.replace(bestFitReferenceCoin, ""),
          reference: bestFitReferenceCoin,
        };

      let newPrice = "NEW_PRICE";
      let newName = "NEW_NAME";
      let newReference = "NEW_REFERENCE";

      searchedReferencePairs.forEach((reference) => {
        if (coin.symbol.endsWith(reference.of)) {
          newName = coin.symbol.replace(reference.of, "");
          newReference = reference.of;
          if (!reference.reversedPair) newPrice = coin.price * reference.price;
          else if (reference.reversedPair)
            newPrice = coin.price / reference.price;
        }
      });

      if (newPrice === "NEW_PRICE")
        return {
          symbol: null,
        };
      return {
        ...coin,
        symbol: newName,
        price: newPrice,
        reference: newReference,
      };
    })
    .filter((coin) => coin.symbol);

  // Create array with unique coins
  const uniqueCoinsSet = new Set(coinsToUsd.map((coin) => coin.symbol));
  const uniqueCoinsList = Array.from(uniqueCoinsSet);

  // Create array with with selected data for unique coins
  const coinsList = [];
  uniqueCoinsList.forEach((uniqueCoin) => {
    const uniqueCoinMultipleData = coinsToUsd.filter(
      (coin) => coin.symbol === uniqueCoin
    );

    let firstFit = true;
    stableCoinsReferences.forEach((stableCoin) => {
      const uniqueCoinData = uniqueCoinMultipleData.find(
        (data) => data.reference === stableCoin
      );

      if (firstFit && uniqueCoinData) {
        coinsList.push(uniqueCoinData);
        firstFit = false;
      }
    });
  });
  coinsList.sort((coinA, coinB) => coinB.volume - coinA.volume);

  return coinsList;
}

module.exports = { getCoinsList };
