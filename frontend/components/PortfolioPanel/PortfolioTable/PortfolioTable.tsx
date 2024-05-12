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
import { useSession } from "next-auth/react";
import { constants } from "@/constants/constants";

const PortfolioTable: React.FC<ActivePortfolioProps> = ({
  activePortfolio,
  portfolios,
  setPortfolios,
}) => {
  const { data: sessionData, status: sessionStatus } = useSession();

  return (
    <Flex direction="column">
      <Box marginTop="15px">
        <AddTransactionModal
          handler={addTransactionService}
          portfolioId={activePortfolio.id}
          setPortolios={setPortfolios}
        >
          {activePortfolio ? (
            <Text>Add new transaction to: {activePortfolio.name}</Text>
          ) : (
            <Text>Add new transaction</Text>
          )}
        </AddTransactionModal>
      </Box>

      {activePortfolio !== undefined && activePortfolio.portfolio_coins && (
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
              {activePortfolio.portfolio_coins.map((coin) => {
                const dropdownItems: CoinActions = [
                  {
                    name: "View transactions",
                    JSX: (
                      <ViewTransactionsModal
                        coin={coin}
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
                      removeCoinService(
                        sessionData?.user.jwt,
                        coin,
                        activePortfolio?.id,
                        setPortfolios
                      );
                    },
                  },
                ];
                return (
                  <Tr key={coin.id} textAlign="center">
                    <CustomTd unstyled value={coin.symbol} />
                    <CustomTd unstyled value={coin.quantity} />
                    <CustomTd unstyled value={coin.avgBuyPrice} prefix="$" />
                    <CustomTd
                      unstyled
                      value={constants.common.BETA_PLACEHOLDER}
                    />
                    <CustomTd
                      unstyled
                      value={constants.common.BETA_PLACEHOLDER}
                    />
                    <CustomTd
                      value={
                        <CustomDropdown items={dropdownItems}>
                          ...
                        </CustomDropdown>
                      }
                    />
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
