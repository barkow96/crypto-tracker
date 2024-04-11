import axios from "axios";
import {
  searchedReferencePairs,
  stableCoinsReferences,
} from "../constants/coin-references";
import { filterDataInitially } from "../mappers/v3-ticker-24hr-endpoint/raw-data-initial-filter";
import { fillPricesOfReferencePairs } from "../mappers/v3-ticker-24hr-endpoint/reference-pairs-with-prices";
import { standarizeCoinsPricesToUsdt } from "../mappers/v3-ticker-24hr-endpoint/standarize-coins-prices";
import { filterUniquePairs } from "../mappers/v3-ticker-24hr-endpoint/final-data-unique-pairs-filter";
import { API_URL } from "../constants/external-api";

export default () => ({
  getCoinsList: async () => {
    // Fetch data from external API
    const response = await axios.get(API_URL);
    const coinsData: ExtEndpoint_Ticker24hr_Type = response.data;

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
  },
});
