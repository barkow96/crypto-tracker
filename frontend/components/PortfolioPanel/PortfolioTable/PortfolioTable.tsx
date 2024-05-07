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
  setPortfolios,
  portfolioTransactions,
  setPortfolioTransactions,
}) => {
  return (
    <Flex direction="column">
      <Box marginTop="15px">
        <AddTransactionModal handler={addTransactionService}>
          {activePortfolio ? (
            <Text>Add new transaction to: {activePortfolio.name}</Text>
          ) : (
            <Text>Add new transaction</Text>
          )}
        </AddTransactionModal>
      </Box>

      {activePortfolio !== undefined && activePortfolio.coins && (
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
              {activePortfolio.coins.map((coin) => {
                const dropdownItems: CoinActions = [
                  {
                    name: "View transactions",
                    JSX: (
                      <ViewTransactionsModal
                        coins={activePortfolio.coins}
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
                        handler={moveCoinService}
                        coin={coin}
                        activePortfolio={activePortfolio}
                        portfolios={portfolios}
                        setPortfolios={setPortfolios}
                      >
                        Move asset
                      </MoveAssetModal>
                    ),
                  },
                  {
                    name: "Remove",
                    handler: () => {
                      removeCoinService(activePortfolio?.id, coin.symbol);
                    },
                  },
                ];
                return (
                  <Tr key={coin.symbol} textAlign="center">
                    <CustomTd value={coin.symbol} />
                    <CustomTd value={coin.quantity} />
                    <CustomTd value={coin.avgBuyPrice} />
                    <CustomTd value={"BETA"} />
                    <CustomTd value={"BETA"} />
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
