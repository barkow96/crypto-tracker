import CustomDropdown, {
  CoinActions,
} from "@/components/_ChakraUI/CustomDropdown";
import CustomTd from "@/components/_ChakraUI/CustomTd";
import { initialCoinsList } from "@/dummy-data/portfolio-panel";
import { usePortfolioCoins } from "@/hooks/portfolio-panel/usePortfolioCoins";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import removeCoinService from "./services/removeCoinService";

type PortfolioTableProps = {
  portfolio: Portfolio | undefined;
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>;
};

const PortfolioTable: React.FC<PortfolioTableProps> = ({
  portfolio,
  setPortfolioList,
}) => {
  const { portfolioCoins, setPortfolioCoins } = usePortfolioCoins(
    portfolio,
    initialCoinsList
  );

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
          {portfolioCoins?.map((coin) => {
            const dropdownItems: CoinActions = [
              { name: "View transactions", handler: () => {} },
              { name: "Move asset", handler: () => {} },
              {
                name: "Remove",
                handler: () => {
                  removeCoinService(
                    portfolio?.id,
                    coin.symbol,
                    setPortfolioList,
                    setPortfolioCoins
                  );
                },
              },
            ];
            return (
              <Tr key={coin.symbol} textAlign="center">
                <CustomTd value={coin.symbol} />
                <CustomTd value={coin.quantity} />
                <CustomTd value={coin.avgBuyPrice} />
                <CustomTd value={coin.price} />
                <CustomTd value={coin.profit} />
                <CustomDropdown items={dropdownItems}>
                  <CustomTd value="..." />
                </CustomDropdown>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PortfolioTable;
