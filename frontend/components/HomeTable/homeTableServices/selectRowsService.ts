import { PAGINATION_INITIAL_PAGE } from "@/constants/constants";
import { SelectRowsService } from "@/types/home-table/services";

const selectRowsService: SelectRowsService = (
  event,
  setRowsQuantity,
  setCurrentPage
) => {
  setRowsQuantity(parseInt(event.target.value));
  setCurrentPage(PAGINATION_INITIAL_PAGE);
};

export default selectRowsService;
