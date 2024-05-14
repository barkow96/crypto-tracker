// PERFORMING INITIAL FILTERING OF RECEIVED DATA - GETTING RID OF 0 VALUES AND LEAVING ONLY THE NECESSARY DATA
export const filterDataInitially: DataProcess1_Type = (
  coinsData: ExtEndpoint_Ticker24hr_Type
) => {
  const requiredFields = [
    "symbol",
    "lastPrice",
    "priceChangePercent",
    "volume",
  ];

  if (
    !Array.isArray(coinsData) ||
    coinsData.length === 0 ||
    !coinsData.every(
      (coin) =>
        typeof coin === "object" &&
        requiredFields.every((field) => field in coin)
    )
  )
    return null;

  const filteredData = coinsData
    .filter((coin) => parseFloat(coin.lastPrice) !== 0)
    .map((coin) => ({
      symbol: coin.symbol,
      price: parseFloat(coin.lastPrice),
      priceChange24H: parseFloat(coin.priceChangePercent),
      volume24H: parseFloat(coin.volume),
      lowPrice24H: parseFloat(coin.lowPrice),
      highPrice24H: parseFloat(coin.highPrice),
    }));

  return filteredData;
};
