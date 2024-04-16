import { Box, Heading, Text } from "@chakra-ui/react";

const PortfolioView: React.FC = () => {
  return (
    <main>
      <Box width="80%" margin="auto" marginTop="50px">
        <Heading as="h5" textAlign="center" fontSize="25px">
          Check your wallet - your purchases, sales, holdings...
        </Heading>
        <Text>Hello from Portfolio Page!</Text>
      </Box>
    </main>
  );
};

export default PortfolioView;
