import { Box, Table, Thead, Tbody, Th, Td, Tr } from "@chakra-ui/react";
import HomeTableSettings from "./HomeTableSettings";
import HomeTableItem from "./HomeTableItem";

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
            <Th>1h</Th>
            <Th>24h</Th>
            <Th>7d</Th>
            <Th>24h Volume</Th>
            <Th>Market Cap</Th>
          </Tr>
        </Thead>
      </Table>
      <HomeTableItem />
      <HomeTableItem />
      <HomeTableItem />
      <HomeTableItem />
      <HomeTableItem />
    </Box>
  );
};

export default HomeTable;
