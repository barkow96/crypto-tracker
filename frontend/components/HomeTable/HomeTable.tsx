import { Box, Table, Thead, Tbody, Th, Tr } from "@chakra-ui/react";
import HomeTableSettings from "./HomeTableSettings";
import HomeTableItem from "./HomeTableItem";
import { coins } from "@/dummy-data/home-table";
import { ChangeEvent, useEffect, useState } from "react";
import { SearchedCoin } from "@/types/home-table";
import { useFilteredCoins } from "@/hooks/useFilteredCoins";

const HomeTable: React.FC = () => {
  const [searchedCoin, setSearchedCoin] = useState<SearchedCoin>(null);
  const filteredCoins = useFilteredCoins(coins, searchedCoin);

  function searchCoinHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value == "") setSearchedCoin(null);
    else setSearchedCoin(event.target.value);
  }

  return (
    <Box>
      <HomeTableSettings searchCoinHandler={searchCoinHandler} />
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
          {filteredCoins.map((coin, index) => (
            <HomeTableItem key={index} {...coin} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default HomeTable;
