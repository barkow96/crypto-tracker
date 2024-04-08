import { PAGINATION_INITIAL_PAGE } from "@/constants/constants";
import { SearchedCoin } from "@/types/home-table/table";

type SearchCoinService = (
  enteredText: string,
  setSearchedCoin: React.Dispatch<React.SetStateAction<SearchedCoin>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => void;

const searchCoinService: SearchCoinService = (
  enteredText,
  setSearchedCoin,
  setCurrentPage
) => {
  if (enteredText === "") setSearchedCoin(null);
  else {
    setSearchedCoin(enteredText);
    setCurrentPage(PAGINATION_INITIAL_PAGE);
  }
};

export default searchCoinService;
