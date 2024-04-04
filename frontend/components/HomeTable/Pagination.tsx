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
    width: "60px",
    backgroundColor: colors.red,
    color: colors.bright,
    _hover: { backgroundColor: colors.green },
  };
  const firstAndLastButtonStyles = { width: "10px", marginX: "1px" };

  return (
    <Flex align="center" justify="space-between" gap="15px" marginTop="10px">
      <Box width="42.5%" textAlign="right">
        {currentPage > 3 && (
          <Button
            {...paginationButtonStyles}
            {...firstAndLastButtonStyles}
            onClick={() => {
              paginationButtonService(
                "FIRST",
                currentPage,
                totalPages,
                setCurrentPage
              );
            }}
          >
            <Icon as={ArrowLeftIcon} />
          </Button>
        )}
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
            Back
          </Button>
        )}
      </Box>
      <Box width="15%" textAlign="center">
        Page {currentPage}/{totalPages}
      </Box>
      <Box width="42.5%" textAlign="left">
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
          </Button>
        )}
        {totalPages - currentPage > 3 && (
          <Button
            {...paginationButtonStyles}
            {...firstAndLastButtonStyles}
            onClick={() => {
              paginationButtonService(
                "LAST",
                currentPage,
                totalPages,
                setCurrentPage
              );
            }}
          >
            <Icon as={ArrowRightIcon} />
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Pagination;
