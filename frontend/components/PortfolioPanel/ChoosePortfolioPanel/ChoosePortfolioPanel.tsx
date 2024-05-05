import { Box, Text } from "@chakra-ui/react";
import { ChoosePortfolioPanelProps } from "@/types/portfolio-panel/choose-portfolio-panel";
import ChoosePortfolioPanelItem from "./ChoosePortfolioPanelItem";
import { colors } from "@/constants/colors";

const ChoosePortfolioPanel: React.FC<ChoosePortfolioPanelProps> = ({
  portfolios,
  setPortfolios,
  selectPortfolioHandler,
  editPortfolioHandler,
}) => {
  return (
    <Box>
      <Text
        as="h6"
        textAlign="center"
        fontSize="20px"
        fontWeight="bold"
        backgroundColor={colors.red}
        color={colors.yellow}
        marginBottom="15px"
        borderRadius="5px"
        padding="2px"
      >
        Choose active portoflio
      </Text>
      {portfolios.map((portfolio) => (
        <ChoosePortfolioPanelItem
          key={portfolio.id}
          item={portfolio}
          setPortfolios={setPortfolios}
          selectPortfolioHandler={selectPortfolioHandler}
          editPortfolioHandler={editPortfolioHandler}
        />
      ))}
    </Box>
  );
};

export default ChoosePortfolioPanel;
