import React from "react";
import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { PaginationProps } from "@/types/home-table";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { colors } from "@/constants/colors";
import { PAGINATION_INITIAL_PAGE } from "@/constants/constants";
import { paginationButtonHandler } from "./paginationServices/paginationButtonHandler";
import { usePages } from "@/hooks/usePages";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  pageChangeHandler,
}) => {
  const { currentPage, setCurrentPage } = usePages(
    PAGINATION_INITIAL_PAGE,
    totalPages
  );
  const paginationButtonStyles = {
    width: "120px",
    backgroundColor: colors.red,
    color: colors.bright,
    _hover: { backgroundColor: colors.green },
  };

  return (
    <Flex align="center" justify="center" gap="15px" marginTop="10px">
      {currentPage > 1 && (
        <Button
          {...paginationButtonStyles}
          onClick={() => {
            paginationButtonHandler(
              "PREVIOUS",
              currentPage,
              totalPages,
              setCurrentPage,
              pageChangeHandler
            );
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
            paginationButtonHandler(
              "NEXT",
              currentPage,
              totalPages,
              setCurrentPage,
              pageChangeHandler
            );
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
