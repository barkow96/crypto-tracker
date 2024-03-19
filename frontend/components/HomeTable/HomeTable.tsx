import { Box, Table, Thead, Tbody, Th, Td, Tr } from "@chakra-ui/react";
import HomeTableSettings from "./HomeTableSettings";
import HomeTableItem from "./HomeTableItem";
import { coins } from "@/dummy-data/home-table";

const HomeTable: React.FC = () => {
  return (
    <Box>
      <HomeTableSettings />
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
          {coins.map((coin, index) => (
            <HomeTableItem key={index} {...coin} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default HomeTable;
