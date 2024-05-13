import { Box, Text } from "@chakra-ui/react";
import ChoosePortfolioPanelItem from "./ChoosePortfolioPanelItem";
import { colors } from "@/constants/colors";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { SelectPortfolioService } from "./services/selectPortfolioService";
import { EditPortfolioService } from "./services/editPortfolioService";

type ChoosePortfolioPanelProps = {
  portfolios: Portfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[] | undefined>>;
  selectPortfolioHandler: SelectPortfolioService;
  editPortfolioHandler: EditPortfolioService;
};

const ChoosePortfolioPanel: React.FC<ChoosePortfolioPanelProps> = ({
  portfolios,
  setPortfolios,
  selectPortfolioHandler,
  editPortfolioHandler,
}) => {
  return (
    <Box borderBottom={{ width: "2px", style: "solid" }}>
      <Text
        as="h6"
        textAlign="center"
        fontSize="20px"
        fontWeight="bold"
        backgroundColor={colors.reddish[300]}
        color={colors.darkbluish[950]}
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
