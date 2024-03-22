export function paginationButtonHandler(
  action: "PREVIOUS" | "NEXT",
  currentPage: number,
  totalPages: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  pageChangeHandler: (pageId: number) => void
) {
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

  pageChangeHandler(nextRenderPage);
}
