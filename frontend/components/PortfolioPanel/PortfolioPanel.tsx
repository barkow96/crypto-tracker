import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import ChoosePortfolioPanel from "./ChoosePortfolioPanel/ChoosePortfolioPanel";
import PortfolioSummary from "./PortfolioSummary/PortfolioSummary";
import PortfolioTable from "./PortfolioTable/PortfolioTable";
import { useState } from "react";
import {
  Portfolio,
  PortfolioItems,
} from "@/types/portfolio-panel/choose-portfolio-panel";
import { initialTransactions } from "@/dummy-data/portfolio-panel";
import selectPortfolioService from "./ChoosePortfolioPanel/services/selectPortfolioService";
import addPortfolioService from "./ChoosePortfolioPanel/services/addPortfolioService";
import editPortfolioService from "./ChoosePortfolioPanel/services/editPortfolioService";
import { useActivePortfolio } from "@/hooks/portfolio-panel/useActivePortfolio";
import { usePortfolioTransactions } from "@/hooks/portfolio-panel/usePortfolioTransactions";

const PortfolioPanel: React.FC<PortfolioItems> = ({ data, metaData }) => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [portfolioList, setPortfolioList] = useState<Portfolio[] | undefined>(
    data?.portfolios
  );
  const { activePortfolio } = useActivePortfolio(portfolioList);
  const [portfolioCoins, setPortfolioCoins] = useState(activePortfolio?.coins);
  const { portfolioTransactions, setPortfolioTransactions } =
    usePortfolioTransactions(portfolioCoins, initialTransactions);

  if (!portfolioList || !activePortfolio) return;
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
        <PortfolioSummary portfolioCoins={activePortfolio.coins} />
        <PortfolioTable
          activePortfolio={activePortfolio}
          portfolios={portfolioList}
          portfolioTransactions={portfolioTransactions}
          setPortfolioTransactions={setPortfolioTransactions}
        />
      </Box>
    </Flex>
  );
};

export default PortfolioPanel;
