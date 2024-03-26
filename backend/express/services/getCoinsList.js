const axios = require("axios");

async function getCoinsList() {
  const API_URL = "https://api.binance.com/api/v3/ticker/24hr";
  const response = await axios.get(API_URL);
  const coinsData = response.data;

  const mappedCoins = coinsData
    .filter((coin) => parseFloat(coin.lastPrice) !== 0)
    .map((coin) => ({
      symbol: coin.symbol,
      price: parseFloat(coin.lastPrice),
      volume: parseFloat(coin.volume),
    }));

  const searchedReferencePairs = [
    { pair: "BTCUSDT", price: null, of: "BTC", to: "USDT" },
    { pair: "ETHUSDT", price: null, of: "ETH", to: "USDT" },
    { pair: "BNBUSDT", price: null, of: "BNB", to: "USDT" },
    { pair: "FDUSDUSDT", price: null, of: "FDUSD", to: "USDT" },
    { pair: "TRXUSDT", price: null, of: "TRX", to: "USDT" },
    { pair: "XRPUSDT", price: null, of: "XRP", to: "USDT" },
    { pair: "EURUSDT", price: null, of: "EUR", to: "USD" },
    { pair: "USDTTRY", price: null, of: "TRY", to: "USDT", reversedPair: true },
    { pair: "USDTZAR", price: null, of: "ZAR", to: "USDT", reversedPair: true },
    { pair: "USDTDAI", price: null, of: "DAI", to: "USDT", reversedPair: true },
    {
      pair: "USDTBIDR",
      price: null,
      of: "BIDR",
      to: "USDT",
      reversedPair: true,
    },
  ];

  const stableCoinsReferences = ["USDT", "FDUSD", "USD", "USDC", "TUSD"];

  searchedReferencePairs.forEach((reference) => {
    reference.price = mappedCoins.find(
      (coin) => coin.symbol === reference.pair
    ).price;
  });

  const coinsToUsd = mappedCoins
    .map((coin) => {
      let referenceToStable = false;
      let coinObject;

      stableCoinsReferences.forEach((referenceCoin) => {
        if (coin.symbol.endsWith(referenceCoin)) {
          referenceToStable = true;
          coinObject = {
            ...coin,
            symbol: coin.symbol.replace(referenceCoin, ""),
            price: coin.price,
            volume: coin.volume,
            reference: referenceCoin,
          };
        }
      });

      if (referenceToStable) return coinObject;

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
        price: newPrice,
        volume: coin.volume,
        symbol: newName,
        reference: newReference,
      };
    })
    .filter((coin) => coin.symbol);

  const singleCoin = coinsToUsd.filter((coin) => coin.symbol === "INJ");

  return coinsToUsd;
  // return singleCoin;
}

module.exports = { getCoinsList };
