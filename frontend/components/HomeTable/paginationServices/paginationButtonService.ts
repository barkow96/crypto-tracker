import { PaginationButtonService } from "@/types/home-table/services";

const paginationButtonService: PaginationButtonService = (
  action,
  currentPage,
  totalPages,
  setCurrentPage
) => {
  let nextRenderPage = currentPage;

  switch (action) {
    case "PREVIOUS":
      if (currentPage === 1) return;
      nextRenderPage = currentPage - 1;
      setCurrentPage(nextRenderPage);
      break;

    case "NEXT":
      if (currentPage === totalPages) return;
      nextRenderPage = currentPage + 1;
      setCurrentPage(nextRenderPage);
      break;

    default:
      break;
  }
};

export default paginationButtonService;
