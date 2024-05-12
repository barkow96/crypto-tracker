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
    // FETCHING DATA FROM EXTERNAL API
    const response = await axios.get(API_URL);
    const coinsData: ExtEndpoint_Ticker24hr_Type = response.data;

    // PERFORMING INITIAL FILTERING OF RECEIVED DATA
    const mappedCoins = filterDataInitially(coinsData);

    // FILLING IN AVAILABLE PRICES OF REFERENCE PAIRS
    const referencePairsWithPrices = fillPricesOfReferencePairs(
      searchedReferencePairs,
      mappedCoins
    );

    // CREATING ARRAY WITH DATA IN RELATION TO USD
    const coinsToUsd = standarizeCoinsPricesToUsdt(
      mappedCoins,
      stableCoinsReferences,
      referencePairsWithPrices
    );

    // CREATING ARRAY WITH SELECTED DATA FOR UNIQUE COINS
    const coinsList = filterUniquePairs(coinsToUsd, stableCoinsReferences);

    return coinsList;
  },
});
