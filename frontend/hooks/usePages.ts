import { useEffect, useState } from "react";

export function usePages(initialPage: number, totalPages: number) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [totalPages, initialPage]);

  return { currentPage, setCurrentPage };
}
