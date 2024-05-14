import { colors } from "@/constants/colors";
import { PortfolioCoin } from "@/types/portfolio-panel/portfolio-table";
import { Box, Text } from "@chakra-ui/react";
import { VictoryPie, VictoryTheme } from "victory";

type PortfolioSummaryProps = {
  portfolioCoins: PortfolioCoin[] | undefined;
};

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({
  portfolioCoins,
}) => {
  return (
    <Box>
      {portfolioCoins && portfolioCoins.length > 0 ? (
        <>
          <Text textAlign="center" fontWeight="bold">
            FIGURE1: Coins share in portfolio
          </Text>
          <VictoryPie
            data={portfolioCoins.map((coin) => ({
              x: coin.symbol,
              y: coin.avgBuyPrice * coin.quantity,
            }))}
            theme={VictoryTheme.material}
            width={1000}
          />
        </>
      ) : (
        <Text textAlign="center" color={colors.red}>
          No coins in this portfolio yet.
        </Text>
      )}
    </Box>
  );
};

export default PortfolioSummary;
