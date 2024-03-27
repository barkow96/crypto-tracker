const axios = require("axios");
const { getCoinsList } = require("../services/getCoinsList");
const { get24HoursData } = require("../services/get24HoursData");

const DATA_RECORDS_PER_REQUEST = 10;
const ERROR_MESSAGE =
  "There was an error during fetching data from Binance API";

const getCoins = async (req, res) => {
  const part = parseInt(req.params.part);

  let coinsList;
  try {
    coinsList = await getCoinsList();
  } catch (error) {
    console.error(ERROR_MESSAGE, error);
    res.status(500).json({
      message: ERROR_MESSAGE,
      error: error,
    });
  }

  const partialCoinsList = coinsList.slice(
    DATA_RECORDS_PER_REQUEST * part,
    DATA_RECORDS_PER_REQUEST * (part + 1)
  );

  // THE BELOW PART IS WORK IN PROGRESS
  // const finalCoinsData = partialCoinsList.map(async (coin) => {
  //   const data24Hours = await get24HoursData(coin.symbol);
  //   return {
  //     ...coin,
  //     new: "hahaha",
  //     priceChange24H: data24Hours.priceChange24H,
  //     volume24H: data24Hours.volume24H,
  //   };
  // });

  res.json(partialCoinsList);
};

module.exports = { getCoins };
