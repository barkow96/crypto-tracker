import { colors } from "@/constants/colors";
import { constants } from "@/constants/constants";
import { PortfolioCoin } from "@/types/portfolio-panel/portfolio-table";
import { Box, Flex, Text } from "@chakra-ui/react";
import { VictoryPie, VictoryTheme } from "victory";

type PortfolioSummaryProps = {
  portfolioCoins: PortfolioCoin[] | undefined;
};

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({
  portfolioCoins,
}) => {
  const buyValue = portfolioCoins?.reduce(
    (sum, coin) => sum + coin.avgBuyPrice * coin.quantity,
    0
  );

  return (
    <Box>
      {portfolioCoins && portfolioCoins.length > 0 ? (
        <Flex>
          <Box width="70%">
            <Text textAlign="center" fontWeight="bold">
              FIGURE1: Coin share in portfolio
            </Text>
            <VictoryPie
              data={portfolioCoins.map((coin) => ({
                x: coin.symbol,
                y: coin.avgBuyPrice * coin.quantity,
              }))}
              style={{
                data: { stroke: colors.reddish[900], strokeWidth: 3 },
                labels: { fontWeight: "bold" },
              }}
              theme={VictoryTheme.material}
              width={600}
            />
          </Box>
          <Box width="30%" textAlign="right">
            <Box>
              Portfolio buy value: <Text fontWeight="bold">${buyValue}</Text>
            </Box>
            <Box>
              Portfolio live value:
              <Text fontWeight="bold">{constants.common.BETA_PLACEHOLDER}</Text>
            </Box>
            <Box>
              Best performer:
              <Text fontWeight="bold">{constants.common.BETA_PLACEHOLDER}</Text>
            </Box>
            <Box>
              Worst performer:
              <Text fontWeight="bold">{constants.common.BETA_PLACEHOLDER}</Text>
            </Box>
          </Box>
        </Flex>
      ) : (
        <Text textAlign="center" color={colors.reddish[600]}>
          No coins in this portfolio yet.
        </Text>
      )}
    </Box>
  );
};

export default PortfolioSummary;
