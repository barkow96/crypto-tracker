import { Box } from "@chakra-ui/react";
import { VictoryPie } from "victory";

const PortfolioSummary: React.FC = () => {
  return (
    <Box border="1px">
      <VictoryPie />
    </Box>
  );
};

export default PortfolioSummary;
