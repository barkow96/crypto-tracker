import CustomDropdown from "@/components/_ChakraUI/CustomDropdown";
import CustomTd from "@/components/_ChakraUI/CustomTd";
import { initialCoinsList } from "@/dummy-data/portfolio-panel";
import { usePortfolioCoins } from "@/hooks/portfolio-panel/usePortfolioCoins";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

const PortfolioTable: React.FC<{ portfolio?: Portfolio }> = ({ portfolio }) => {
  const { portfolioCoins } = usePortfolioCoins(portfolio, initialCoinsList);
  console.log("Dane na temat coinsów: ", portfolioCoins);

  const dropdownItems = [
    { name: "View transactions", handler: () => {} },
    { name: "Move asset", handler: () => {} },
    { name: "Remove", handler: () => {} },
  ];

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>coin</Th>
            <Th>quantity</Th>
            <Th>average buy price</Th>
            <Th>price</Th>
            <Th>profits</Th>
            <Th>actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {portfolioCoins?.map((coin) => (
            <Tr>
              <CustomTd key={coin.symbol} value={coin.symbol} />
              <CustomTd key={coin.symbol} value={coin.quantity} />
              <CustomTd key={coin.symbol} value={coin.avgBuyPrice} />
              <CustomTd key={coin.symbol} value={coin.price} />
              <CustomTd key={coin.symbol} value={coin.profit} />
              <CustomDropdown items={dropdownItems}>
                <CustomTd key={coin.symbol} value="..." />
              </CustomDropdown>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PortfolioTable;
