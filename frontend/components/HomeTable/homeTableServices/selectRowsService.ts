import { PAGINATION_INITIAL_PAGE } from "@/constants/constants";

type SelectRowsService = (
  selectedRowsValue: string,
  setRowsQuantity: React.Dispatch<React.SetStateAction<number>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => void;

const selectRowsService: SelectRowsService = (
  selectedRowsValue,
  setRowsQuantity,
  setCurrentPage
) => {
  setRowsQuantity(parseInt(selectedRowsValue));
  setCurrentPage(PAGINATION_INITIAL_PAGE);
};

export default selectRowsService;
