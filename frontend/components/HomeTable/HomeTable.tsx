import { Box, Table, Thead, Tbody, Th, Tr } from "@chakra-ui/react";
import HomeTableSettings from "./HomeTableSettings";
import HomeTableItem from "./HomeTableItem";
import { exampleCoins } from "@/dummy-data/home-table";
import { ChangeEvent, useState } from "react";
import { HomeTableItemProps, SearchedCoin } from "@/types/home-table";
import { useFilteredCoins } from "@/hooks/useFilteredCoins";
import { PAGINATION_INITIAL_PAGE, ROWS_NUMBER } from "@/constants/constants";
import Pagination from "./Pagination";

const HomeTable: React.FC = () => {
  const [coins, setCoins] = useState<HomeTableItemProps[]>(exampleCoins);
  const [searchedCoin, setSearchedCoin] = useState<SearchedCoin>(null);
  const [rowsQuantity, setRowsQuantity] = useState<number>(ROWS_NUMBER.MAX);
  const [currentPage, setCurrentPage] = useState<number>(
    PAGINATION_INITIAL_PAGE
  );
  const filteredCoins = useFilteredCoins(coins, searchedCoin);

  function searchCoinHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value == "") setSearchedCoin(null);
    else {
      setSearchedCoin(event.target.value);
      setCurrentPage(1);
    }
  }

  function selectRowsHandler(event: ChangeEvent<HTMLSelectElement>) {
    setRowsQuantity(parseInt(event.target.value));
    setCurrentPage(1);
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
          <Tr>
            <Th>#</Th>
            <Th>Coin</Th>
            <Th>Price</Th>
            <Th>Market Cap</Th>
            <Th>1h</Th>
            <Th>24h</Th>
            <Th>7d</Th>
            <Th>30d</Th>
            <Th>90d</Th>
            <Th>YTD</Th>
            <Th>Volume 24h</Th>
            <Th>Volume 7d</Th>
            <Th>Volume 30d</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredCoins.map((coin, index) => {
            if (
              index >= (currentPage - 1) * rowsQuantity &&
              index < currentPage * rowsQuantity
            )
              return <HomeTableItem key={index} {...coin} />;
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
