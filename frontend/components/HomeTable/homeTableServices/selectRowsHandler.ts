import { PAGINATION_INITIAL_PAGE } from "@/constants/constants";
import { ChangeEvent } from "react";

export function selectRowsHandler(
  event: ChangeEvent<HTMLSelectElement>,
  setRowsQuantity: React.Dispatch<React.SetStateAction<number>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) {
  setRowsQuantity(parseInt(event.target.value));
  setCurrentPage(PAGINATION_INITIAL_PAGE);
}
