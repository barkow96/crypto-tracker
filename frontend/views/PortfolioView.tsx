import ChoosePortfolioPanel from "@/components/PortfolioPanel/ChoosePortfolioPanel";
import PortfolioSummary from "@/components/PortfolioPanel/PortfolioSummary";
import PortfolioTable from "@/components/PortfolioPanel/PortfolioTable";
import PageContentLayout from "@/containers/PageContentLayout";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

const PortfolioView: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <main>
      <PageContentLayout heading="Check your wallet - your purchases, sales, holdings...">
        <Flex flexWrap="wrap" marginTop="20px">
          <Box width={isLargeScreen ? "25%" : "100%"}>
            <ChoosePortfolioPanel />
          </Box>
          <Box width={isLargeScreen ? "75%" : "100%"}>
            <PortfolioSummary />
            <PortfolioTable />
          </Box>
        </Flex>
      </PageContentLayout>
    </main>
  );
};

export default PortfolioView;
