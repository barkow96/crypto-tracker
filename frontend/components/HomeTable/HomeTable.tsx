import { Box, Table, Thead, Tbody, Th, Tr } from "@chakra-ui/react";
import HomeTableSettings from "./HomeTableSettings";
import HomeTableItem from "./HomeTableItem";
import { exampleCoins } from "@/dummy-data/home-table";
import { ReactNode, useState } from "react";
import {
  HomeTableItemdata,
  HomeTableMetadata,
  SearchedCoin,
} from "@/types/home-table";
import { useFilteredCoins } from "@/hooks/useFilteredCoins";
import { PAGINATION_INITIAL_PAGE, ROWS_NUMBER } from "@/constants/constants";
import Pagination from "./Pagination";
import { TABLE_INITIAL_CONFIG } from "@/constants/table-initial";
import { searchCoinHandler } from "./homeTableServices/searchCoinHandler";
import { selectRowsHandler } from "./homeTableServices/selectRowsHandler";
import { sortHandler } from "./homeTableServices/sortHandler";

const HomeTable: React.FC = () => {
  const [tableMetadata, setTableMetadata] =
    useState<HomeTableMetadata>(TABLE_INITIAL_CONFIG);
  const [rowsQuantity, setRowsQuantity] = useState<number>(ROWS_NUMBER.MAX);
  const [currentPage, setCurrentPage] = useState<number>(
    PAGINATION_INITIAL_PAGE
  );

  const [coins, setCoins] = useState<HomeTableItemdata[]>(exampleCoins);
  const [searchedCoin, setSearchedCoin] = useState<SearchedCoin>(null);
  const { filteredCoins, setFilteredCoins } = useFilteredCoins(
    coins,
    searchedCoin
  );

  function pageChangeHandler(pageId: number) {
    setCurrentPage(pageId);
  }

  const tableHeaders: ReactNode[] = Object.keys(tableMetadata).map((key) => {
    if (tableMetadata[key].isActive)
      return (
        <Th
          key={key}
          cursor="pointer"
          onClick={() => {
            sortHandler(
              key,
              tableMetadata,
              setTableMetadata,
              setFilteredCoins,
              filteredCoins
            );
          }}
        >
          {tableMetadata[key].header}
        </Th>
      );
    else return null;
  });

  return (
    <Box>
      <HomeTableSettings
        searchCoinHandler={(event) => {
          searchCoinHandler(event, setSearchedCoin, setCurrentPage);
        }}
        selectRowsHandler={(event) => {
          selectRowsHandler(event, setRowsQuantity, setCurrentPage);
        }}
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
