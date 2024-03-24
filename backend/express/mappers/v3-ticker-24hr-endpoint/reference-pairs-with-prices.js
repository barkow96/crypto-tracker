const requiredFields = ["symbol", "price"];

// Fill in available prices of reference pairs
function fillPricesOfReferencePairs(referencePairs, coins) {
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

  const referencePairsWithPrices = referencePairs.map((reference) => {
    const foundPair = coins.find((coin) => coin.symbol === reference.pair);

    return { ...reference, price: foundPair ? foundPair.price : null };
  });

  return referencePairsWithPrices;
}

module.exports = { fillPricesOfReferencePairs };
