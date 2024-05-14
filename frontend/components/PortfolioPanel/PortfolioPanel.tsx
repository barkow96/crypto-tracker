import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import ChoosePortfolioPanel from "./ChoosePortfolioPanel/ChoosePortfolioPanel";
import PortfolioSummary from "./PortfolioSummary/PortfolioSummary";
import PortfolioTable from "./PortfolioTable/PortfolioTable";
import { useState } from "react";
import {
  Portfolio,
  PortfolioItems,
} from "@/types/portfolio-panel/choose-portfolio-panel";
import selectPortfolioService from "./ChoosePortfolioPanel/services/selectPortfolioService";
import addPortfolioService from "./ChoosePortfolioPanel/services/addPortfolioService";
import editPortfolioService from "./ChoosePortfolioPanel/services/editPortfolioService";
import { useActivePortfolio } from "@/hooks/portfolio-panel/useActivePortfolio";
import { colors } from "@/constants/colors";
import { AddIcon } from "@chakra-ui/icons";
import { useSession } from "next-auth/react";

const PortfolioPanel: React.FC<PortfolioItems> = ({ data, metaData }) => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const [portfolioList, setPortfolioList] = useState<Portfolio[] | undefined>(
    data?.portfolios
  );
  const { activePortfolio } = useActivePortfolio(portfolioList);

  const addPortfolioButton = (
    <Box
      onClick={addPortfolioService.bind(
        null,
        sessionData?.user.jwt,
        setPortfolioList
      )}
      color={colors.reddish[900]}
      fontWeight="bold"
      cursor="pointer"
    >
      <AddIcon sx={{ marginRight: "15px" }} />
      Add new portfolio
    </Box>
  );

  if (!portfolioList || !activePortfolio)
    return (
      <Box textAlign="center" marginTop="20px">
        <Text>You have no portfolios yet.</Text>
        {addPortfolioButton}
      </Box>
    );

  return (
    <Flex flexWrap="wrap" gap="20px" marginTop="20px">
      <Box width={isLargeScreen ? "25%" : "100%"}>
        <ChoosePortfolioPanel
          portfolios={portfolioList}
          setPortfolios={setPortfolioList}
          selectPortfolioHandler={selectPortfolioService}
          editPortfolioHandler={editPortfolioService}
        />
        {addPortfolioButton}
      </Box>
      <Box width={isLargeScreen ? "70%" : "100%"}>
        <PortfolioSummary portfolioCoins={activePortfolio.portfolio_coins} />
        <PortfolioTable
          activePortfolio={activePortfolio}
          portfolios={portfolioList}
          setPortfolios={setPortfolioList}
        />
      </Box>
    </Flex>
  );
};

export default PortfolioPanel;
