import { Box, Table, Thead, Tbody, Th, Tr } from "@chakra-ui/react";
import HomeTableSettings from "./HomeTableSettings";
import HomeTableItem from "./HomeTableItem";
import { exampleCoins } from "@/dummy-data/home-table";
import { ReactNode, useState } from "react";
import { useFilteredCoins } from "@/hooks/useFilteredCoins";
import { PAGINATION_INITIAL_PAGE, ROWS_NUMBER } from "@/constants/constants";
import Pagination from "./Pagination";
import { TABLE_INITIAL_CONFIG } from "@/constants/table-initial";
import searchCoinService from "./homeTableServices/searchCoinService";
import selectRowsService from "./homeTableServices/selectRowsService";
import sortService from "./homeTableServices/sortService";
import { usePages } from "@/hooks/usePages";
import { SearchedCoin } from "@/types/home-table/table";

const HomeTable: React.FC = () => {
  const [coins, setCoins] = useState(exampleCoins);
  const [searchedCoin, setSearchedCoin] = useState<SearchedCoin>(null);
  const { filteredCoins, setFilteredCoins } = useFilteredCoins(
    coins,
    searchedCoin
  );
  const [tableMetadata, setTableMetadata] = useState(TABLE_INITIAL_CONFIG);
  const [rowsQuantity, setRowsQuantity] = useState(ROWS_NUMBER.MAX);
  const { currentPage, setCurrentPage } = usePages(
    PAGINATION_INITIAL_PAGE,
    Math.ceil(filteredCoins.length / rowsQuantity)
  );

  const tableHeaders: ReactNode[] = Object.keys(tableMetadata).map((key) => {
    if (tableMetadata[key].isActive)
      return (
        <Th
          key={key}
          cursor="pointer"
          onClick={() => {
            sortService(
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
        tableMetadata={tableMetadata}
        setTableMetadata={setTableMetadata}
        searchCoinHandler={(event) => {
          searchCoinService(event, setSearchedCoin, setCurrentPage);
        }}
        selectRowsHandler={(event) => {
          selectRowsService(event, setRowsQuantity, setCurrentPage);
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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
};

export default HomeTable;
