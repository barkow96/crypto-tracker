// Create array with data in relation to USD, with standarized coin names
export const standarizeCoinsPricesToUsdt: DataProcess2_Type = (
  coins,
  stableCoinsReferences,
  referencePairs
) => {
  const requiredFields = ["symbol", "price"];

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

  const coinsToUsd = coins
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

      let isNew = true;
      let newPrice = -10;
      let newName = "DEFAULT_NAME";
      let newReference = "DEFAULT_REFERENCE";

      referencePairs.forEach((reference) => {
        if (coin.symbol.endsWith(reference.of)) {
          newName = coin.symbol.replace(reference.of, "");
          newReference = reference.of;
          if (!reference.reversedPair) newPrice = coin.price * reference.price;
          else if (reference.reversedPair)
            newPrice = coin.price / reference.price;
          else isNew = false;
        }
      });

      if (!isNew)
        return {
          ...coin,
          symbol: "null",
          reference: "null",
        };
      else
        return {
          ...coin,
          symbol: newName,
          price: newPrice,
          reference: newReference,
        };
    })
    .filter((coin) => coin.symbol);

  return coinsToUsd;
};
