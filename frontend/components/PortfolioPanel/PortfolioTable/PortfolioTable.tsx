import CustomDropdown from "@/components/_ChakraUI/CustomDropdown";
import CustomTd from "@/components/_ChakraUI/CustomTd";
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import removeCoinService from "./services/removeCoinService";
import {
  ActivePortfolioProps,
  CoinActions,
} from "@/types/portfolio-panel/portfolio-table";
import MoveAssetModal from "./MoveAssetModal";
import moveCoinService from "./services/moveCoinService";
import ViewTransactionsModal from "./ViewTransactionsModal";
import AddTransactionModal from "./AddTransactionModal";
import addTransactionService from "./services/addTransactionService";

const PortfolioTable: React.FC<ActivePortfolioProps> = ({
  activePortfolio,
  portfolios,
  setPortfolioList,
  portfolioCoins,
  setPortfolioCoins,
  portfolioTransactions,
  setPortfolioTransactions,
}) => {
  return (
    <Flex direction="column">
      <Box marginTop="15px">
        <AddTransactionModal
          handler={addTransactionService}
          setPortfolioCoins={setPortfolioCoins}
          setPortfolioTransactions={setPortfolioTransactions}
        >
          {activePortfolio ? (
            <Text>Add new transaction to: {activePortfolio.name}</Text>
          ) : (
            <Text>Add new transaction</Text>
          )}
        </AddTransactionModal>
      </Box>

      {portfolioCoins && portfolioCoins.length > 0 && (
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
                  {
                    name: "View transactions",
                    JSX: (
                      <ViewTransactionsModal
                        coins={portfolioCoins}
                        transactions={portfolioTransactions}
                        coinName={coin.symbol}
                        portfolioName={activePortfolio?.name}
                      >
                        View transactions
                      </ViewTransactionsModal>
                    ),
                  },
                  {
                    name: "Move asset",
                    JSX: (
                      <MoveAssetModal
                        activePortfolio={activePortfolio}
                        portfolios={portfolios}
                        setPortfolioList={setPortfolioList}
                        handler={moveCoinService}
                        coinName={coin.symbol}
                      >
                        Move asset
                      </MoveAssetModal>
                    ),
                  },
                  {
                    name: "Remove",
                    handler: () => {
                      removeCoinService(
                        activePortfolio?.id,
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
      )}
    </Flex>
  );
};

export default PortfolioTable;