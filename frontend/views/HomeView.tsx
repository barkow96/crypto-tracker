import { Box, Text } from "@chakra-ui/react";

export default function HomeView() {
  return (
    <main>
      <Box>
        <Text as="h1" textAlign="center" letterSpacing="5px" fontSize="50px">
          Crypto
          <span style={{ fontStyle: "italic", color: "yellow" }}>Pulse</span>
        </Text>
        <Text as="h3" textAlign="center">
          your cryptocurrencies tracker
        </Text>
      </Box>
    </main>
  );
}
