import { DELAY_SEARCH_FOR_COIN } from "@/constants/constants";
import { HomeTableItemProps, SearchedCoin } from "@/types/home-table";
import { useEffect, useState } from "react";

export function useFilteredCoins(
  coins: HomeTableItemProps[],
  searchedCoin: SearchedCoin
) {
  const [filteredCoins, setFilteredCoins] =
    useState<HomeTableItemProps[]>(coins);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (!searchedCoin) {
        setFilteredCoins(coins);
        return;
      }
      const newCoinsList = coins.filter((coin) => {
        if (!searchedCoin) return false;
        return (
          coin.name.toLowerCase().includes(searchedCoin.toLowerCase()) ||
          coin.ticker.toLowerCase().includes(searchedCoin.toLowerCase())
        );
      });
      setFilteredCoins(newCoinsList);
    }, DELAY_SEARCH_FOR_COIN);

    return () => clearTimeout(delay);
  }, [searchedCoin]);

  return filteredCoins;
}
