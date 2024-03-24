function createJsonFromRawData(rawData) {
  if (
    !Array.isArray(rawData) ||
    rawData.length !== 1 ||
    !Array.isArray(rawData[0]) ||
    rawData[0].length !== 12
  )
    return null;

  return {
    openTime: rawData[0][0],
    openPrice: rawData[0][1],
    highPrice: rawData[0][2],
    lowPrice: rawData[0][3],
    closePrice: rawData[0][4],
    volume: rawData[0][5],
    closeTime: rawData[0][6],
    quoteAssetVolume: rawData[0][7],
    numberOfTrades: rawData[0][8],
    takerBuyBaseAssetVolume: rawData[0][9],
    takerBuyQuoteAssetVolume: rawData[0][10],
    unused: rawData[0][11],
  };
}

module.exports = { createJsonFromRawData };
