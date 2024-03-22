import { PAGINATION_INITIAL_PAGE } from "@/constants/constants";
import { SearchedCoin } from "@/types/home-table";
import { ChangeEvent } from "react";

export function searchCoinHandler(
  event: ChangeEvent<HTMLInputElement>,
  setSearchedCoin: React.Dispatch<React.SetStateAction<SearchedCoin>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) {
  if (event.target.value == "") setSearchedCoin(null);
  else {
    setSearchedCoin(event.target.value);
    setCurrentPage(PAGINATION_INITIAL_PAGE);
  }
}
