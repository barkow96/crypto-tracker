import { constants } from "@/constants/constants";
import { HomeTableItemdata } from "@/types/home-table/item";
import { SearchedCoin } from "@/types/home-table/table";

import { useEffect, useState } from "react";

export function useFilteredCoins(
  coins: HomeTableItemdata[],
  searchedCoin: SearchedCoin
) {
  const [filteredCoins, setFilteredCoins] =
    useState<HomeTableItemdata[]>(coins);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (!searchedCoin) {
        setFilteredCoins(coins);
        return;
      }
      const newCoinsList = coins.filter((coin) => {
        if (!searchedCoin) return false;
        return coin.symbol.toLowerCase().includes(searchedCoin.toLowerCase());
      });
      setFilteredCoins(newCoinsList);
    }, constants.homePage.DELAY_SEARCH_FOR_COIN);

    return () => clearTimeout(delay);
  }, [coins, searchedCoin]);

  return { filteredCoins, setFilteredCoins };
}
