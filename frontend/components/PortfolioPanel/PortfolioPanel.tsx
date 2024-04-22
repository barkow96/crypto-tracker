import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import ChoosePortfolioPanel from "./ChoosePortfolioPanel/ChoosePortfolioPanel";
import PortfolioSummary from "./PortfolioSummary/PortfolioSummary";
import PortfolioTable from "./PortfolioTable/PortfolioTable";
import { useState } from "react";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import {
  initialCoinsList,
  initialPortfolioList,
  initialTransactions,
} from "@/dummy-data/portfolio-panel";
import selectPortfolioService from "./ChoosePortfolioPanel/services/selectPortfolioService";
import addPortfolioService from "./ChoosePortfolioPanel/services/addPortfolioService";
import editPortfolioService from "./ChoosePortfolioPanel/services/editPortfolioService";
import { useActivePortfolio } from "@/hooks/portfolio-panel/useActivePortfolio";
import { usePortfolioCoins } from "@/hooks/portfolio-panel/usePortfolioCoins";
import { usePortfolioTransactions } from "@/hooks/portfolio-panel/usePortfolioTransactions";

const PortfolioPanel: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [portfolioList, setPortfolioList] =
    useState<Portfolio[]>(initialPortfolioList);
  const { activePortfolio } = useActivePortfolio(portfolioList);
  const { portfolioCoins, setPortfolioCoins } = usePortfolioCoins(
    activePortfolio,
    initialCoinsList
  );
  const { portfolioTransactions, setPortfolioTransactions } =
    usePortfolioTransactions(portfolioCoins, initialTransactions);

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
        {/* <PortfolioSummary activePortfolio={activePortfolio} /> */}
        <PortfolioTable
          activePortfolio={activePortfolio}
          portfolios={portfolioList}
          setPortfolioList={setPortfolioList}
          portfolioCoins={portfolioCoins}
          setPortfolioCoins={setPortfolioCoins}
          portfolioTransactions={portfolioTransactions}
          setPortfolioTransactions={setPortfolioTransactions}
        />
      </Box>
    </Flex>
  );
};

export default PortfolioPanel;
