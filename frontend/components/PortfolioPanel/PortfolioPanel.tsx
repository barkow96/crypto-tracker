import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import ChoosePortfolioPanel from "./ChoosePortfolioPanel";
import PortfolioSummary from "./PortfolioSummary";
import PortfolioTable from "./PortfolioTable";

const PortfolioPanel: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex flexWrap="wrap" marginTop="20px">
      <Box width={isLargeScreen ? "25%" : "100%"}>
        <ChoosePortfolioPanel />
      </Box>
      <Box width={isLargeScreen ? "75%" : "100%"}>
        <PortfolioSummary />
        <PortfolioTable />
      </Box>
    </Flex>
  );
};

export default PortfolioPanel;
