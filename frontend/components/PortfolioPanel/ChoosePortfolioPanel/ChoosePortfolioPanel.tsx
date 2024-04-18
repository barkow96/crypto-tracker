import { Box, Text } from "@chakra-ui/react";
import { ChoosePortfolioPanelProps } from "@/types/portfolio-panel/choose-portfolio-panel";
import ChoosePortfolioPanelItem from "./ChoosePortfolioPanelItem";
import { colors } from "@/constants/colors";
import { AddIcon } from "@chakra-ui/icons";
import addPortfolioService from "./services/addPortfolioService";
import editPortfolioService from "./services/editPortfolioService";

const ChoosePortfolioPanel: React.FC<ChoosePortfolioPanelProps> = ({
  portfolios,
  setPortfolios,
  selectPortfolioHandler,
}) => {
  console.log("Nowe portfolia!: ", portfolios);
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
          addPortfolioHandler={addPortfolioService}
          editPortfolioHandler={editPortfolioService}
        />
      ))}
      <Box
        color={colors.red}
        fontWeight="bold"
        cursor="pointer"
        _hover={{ transform: "scale(1.02)", transition: "0.3" }}
      >
        <AddIcon sx={{ marginRight: "15px" }} />
        Add new portfolio
      </Box>
    </Box>
  );
};

export default ChoosePortfolioPanel;
