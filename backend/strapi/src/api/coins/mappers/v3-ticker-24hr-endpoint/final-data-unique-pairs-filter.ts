export const filterUniquePairs: DataProcess3_Type = (
  coins,
  stableCoinsReferences
) => {
  const requiredFields = ["symbol", "volume24H"];

  if (
    !Array.isArray(coins) ||
    coins.length === 0 ||
    !coins.every(
      (coin) =>
        typeof coin === "object" &&
        requiredFields.every((field) => field in coin)
    )
  )
    return null;

  // Create array with unique coins
  const uniqueCoinsSet = new Set(coins.map((coin) => coin.symbol));
  const uniqueCoinsList = Array.from(uniqueCoinsSet);

  // Create array with with selected data for unique coins
  const coinsList = [];
  uniqueCoinsList.forEach((uniqueCoin) => {
    const uniqueCoinMultipleData = coins.filter(
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
  coinsList.sort((coinA, coinB) => coinB.volume24H - coinA.volume24H);
  const coinsListWithRanks = coinsList.map((coin, index) => ({
    rank: index + 1,
    ...coin,
  }));

  return coinsListWithRanks;
};
