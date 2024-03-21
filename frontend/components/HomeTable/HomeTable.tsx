import { Box, Table, Thead, Tbody, Th, Tr } from "@chakra-ui/react";
import HomeTableSettings from "./HomeTableSettings";
import HomeTableItem from "./HomeTableItem";
import { coins } from "@/dummy-data/home-table";
import { ChangeEvent, useEffect, useState } from "react";
import { HomeTableItemProps, SearchedCoin } from "@/types/home-table";
import { DELAY_SEARCH_FOR_COIN } from "@/constants/constants";

const HomeTable: React.FC = () => {
  const [filteredCoins, setFilteredCoins] =
    useState<HomeTableItemProps[]>(coins);
  const [searchedCoin, setSearchedCoin] = useState<SearchedCoin>(null);

  function searchCoinHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value == "") setSearchedCoin(null);
    else setSearchedCoin(event.target.value);
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      if (!searchedCoin) {
        setFilteredCoins(coins);
        return;
      }
      const newCoinsList = coins.filter((coin) => {
        if (!searchedCoin) return false;
        return (
          coin.name.toLowerCase().includes(searchedCoin.toLowerCase()) ||
          coin.ticker.toLowerCase().includes(searchedCoin.toLowerCase())
        );
      });
      setFilteredCoins(newCoinsList);
    }, DELAY_SEARCH_FOR_COIN);

    return () => clearTimeout(delay);
  }, [searchedCoin]);

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
