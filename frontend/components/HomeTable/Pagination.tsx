import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { PaginationProps } from "@/types/home-table";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { colors } from "@/constants/colors";
import { PAGINATION_INITIAL_PAGE } from "@/constants/constants";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  pageChangeHandler,
}) => {
  const [currentPage, setCurrentPage] = useState(PAGINATION_INITIAL_PAGE);
  const paginationButtonStyles = {
    width: "120px",
    backgroundColor: colors.red,
    color: colors.bright,
    _hover: { backgroundColor: colors.green },
  };

  useEffect(() => {
    setCurrentPage(PAGINATION_INITIAL_PAGE);
  }, [totalPages]);

  function paginationButtonHandler(action: "PREVIOUS" | "NEXT") {
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

  return (
    <Flex align="center" justify="center" gap="15px" marginTop="10px">
      {currentPage > 1 && (
        <Button
          {...paginationButtonStyles}
          onClick={() => {
            paginationButtonHandler("PREVIOUS");
          }}
        >
          <Icon as={ArrowLeftIcon} />
          Previous
        </Button>
      )}
      <Box>
        Page {currentPage} of {totalPages}
      </Box>
      {currentPage < totalPages && (
        <Button
          {...paginationButtonStyles}
          onClick={() => {
            paginationButtonHandler("NEXT");
          }}
        >
          Next
          <Icon as={ArrowRightIcon} />
        </Button>
      )}
    </Flex>
  );
};

export default Pagination;
