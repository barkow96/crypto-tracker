import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import ChoosePortfolioPanel from "./ChoosePortfolioPanel/ChoosePortfolioPanel";
import PortfolioSummary from "./PortfolioSummary";
import PortfolioTable from "./PortfolioTable";
import { useState } from "react";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { initialPortfolioList } from "@/dummy-data/portfolio-panel";
import selectPortfolioService from "./ChoosePortfolioPanel/SelectPortfolioService";

const PortfolioPanel: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [portfolioList, setPortfolioList] =
    useState<Portfolio[]>(initialPortfolioList);

  return (
    <Flex flexWrap="wrap" marginTop="20px">
      <Box width={isLargeScreen ? "25%" : "100%"}>
        <ChoosePortfolioPanel
          portfolios={portfolioList}
          setPortfolios={setPortfolioList}
          selectPortfolioHandler={selectPortfolioService}
        />
      </Box>
      <Box width={isLargeScreen ? "75%" : "100%"}>
        <PortfolioSummary />
        <PortfolioTable />
      </Box>
    </Flex>
  );
};

export default PortfolioPanel;
