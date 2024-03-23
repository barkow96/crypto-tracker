import React from "react";
import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { colors } from "@/constants/colors";
import paginationButtonService from "./paginationServices/paginationButtonService";
import { PaginationProps } from "@/types/home-table/table";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
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
            paginationButtonService(
              "PREVIOUS",
              currentPage,
              totalPages,
              setCurrentPage
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
            paginationButtonService(
              "NEXT",
              currentPage,
              totalPages,
              setCurrentPage
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
