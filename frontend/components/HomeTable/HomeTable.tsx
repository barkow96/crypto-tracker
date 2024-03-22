import { Box, Table, Thead, Tbody, Th, Tr } from "@chakra-ui/react";
import HomeTableSettings from "./HomeTableSettings";
import HomeTableItem from "./HomeTableItem";
import { exampleCoins } from "@/dummy-data/home-table";
import { ChangeEvent, ReactNode, useState } from "react";
import {
  HomeTableItemdata,
  HomeTableMetadata,
  SearchedCoin,
} from "@/types/home-table";
import { useFilteredCoins } from "@/hooks/useFilteredCoins";
import { PAGINATION_INITIAL_PAGE, ROWS_NUMBER } from "@/constants/constants";
import Pagination from "./Pagination";
import { TABLE_INITIAL_CONFIG } from "@/constants/table-initial";

const HomeTable: React.FC = () => {
  const [tableMetadata, setTableMetadata] =
    useState<HomeTableMetadata>(TABLE_INITIAL_CONFIG);
  const [coins, setCoins] = useState<HomeTableItemdata[]>(exampleCoins);
  const [searchedCoin, setSearchedCoin] = useState<SearchedCoin>(null);
  const [rowsQuantity, setRowsQuantity] = useState<number>(ROWS_NUMBER.MAX);
  const [currentPage, setCurrentPage] = useState<number>(
    PAGINATION_INITIAL_PAGE
  );
  const filteredCoins = useFilteredCoins(coins, searchedCoin);

  const tableHeaders: ReactNode[] = Object.keys(tableMetadata).map((key) => {
    if (tableMetadata[key].isActive)
      return <Th key={key}>{tableMetadata[key].header}</Th>;
    else return null;
  });

  function searchCoinHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value == "") setSearchedCoin(null);
    else {
      setSearchedCoin(event.target.value);
      setCurrentPage(PAGINATION_INITIAL_PAGE);
    }
  }

  function selectRowsHandler(event: ChangeEvent<HTMLSelectElement>) {
    setRowsQuantity(parseInt(event.target.value));
    setCurrentPage(PAGINATION_INITIAL_PAGE);
  }

  function pageChangeHandler(pageId: number) {
    setCurrentPage(pageId);
  }

  return (
    <Box>
      <HomeTableSettings
        searchCoinHandler={searchCoinHandler}
        selectRowsHandler={selectRowsHandler}
      />
      <Table>
        <Thead>
          <Tr>{tableHeaders}</Tr>
        </Thead>
        <Tbody>
          {filteredCoins.map((coin, index) => {
            if (
              index >= (currentPage - 1) * rowsQuantity &&
              index < currentPage * rowsQuantity
            )
              return (
                <HomeTableItem
                  key={index}
                  data={{ ...coin }}
                  settings={tableMetadata}
                />
              );
            else return null;
          })}
        </Tbody>
      </Table>
      <Pagination
        totalPages={Math.ceil(filteredCoins.length / rowsQuantity)}
        pageChangeHandler={pageChangeHandler}
      />
    </Box>
  );
};

export default HomeTable;
