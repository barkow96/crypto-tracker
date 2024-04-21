import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import ChoosePortfolioPanel from "./ChoosePortfolioPanel/ChoosePortfolioPanel";
import PortfolioSummary from "./PortfolioSummary";
import PortfolioTable from "./PortfolioTable/PortfolioTable";
import { useState } from "react";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { initialPortfolioList } from "@/dummy-data/portfolio-panel";
import selectPortfolioService from "./ChoosePortfolioPanel/services/selectPortfolioService";
import addPortfolioService from "./ChoosePortfolioPanel/services/addPortfolioService";
import editPortfolioService from "./ChoosePortfolioPanel/services/editPortfolioService";
import { useActivePortfolio } from "@/hooks/portfolio-panel/useActivePortfolio";

const PortfolioPanel: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [portfolioList, setPortfolioList] =
    useState<Portfolio[]>(initialPortfolioList);
  const { activePortfolio } = useActivePortfolio(portfolioList);

  return (
    <Flex flexWrap="wrap" gap="20px" marginTop="20px">
      <Box width={isLargeScreen ? "25%" : "100%"}>
        <ChoosePortfolioPanel
          portfolios={portfolioList}
          setPortfolios={setPortfolioList}
          selectPortfolioHandler={selectPortfolioService}
          addPortfolioHandler={addPortfolioService}
          editPortfolioHandler={editPortfolioService}
        />
      </Box>
      <Box width={isLargeScreen ? "70%" : "100%"}>
        <PortfolioSummary />
        <PortfolioTable
          activePortfolio={activePortfolio}
          portfolios={portfolioList}
          setPortfolioList={setPortfolioList}
        />
      </Box>
    </Flex>
  );
};

export default PortfolioPanel;
