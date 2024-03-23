import { PAGINATION_INITIAL_PAGE } from "@/constants/constants";
import { SearchCoinService } from "@/types/home-table/services";

const searchCoinService: SearchCoinService = (
  event,
  setSearchedCoin,
  setCurrentPage
) => {
  if (event.target.value == "") setSearchedCoin(null);
  else {
    setSearchedCoin(event.target.value);
    setCurrentPage(PAGINATION_INITIAL_PAGE);
  }
};

export default searchCoinService;
