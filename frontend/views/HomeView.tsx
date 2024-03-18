import HomeTable from "@/components/HomeTable/HomeTable";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function HomeView() {
  return (
    <main>
      <Box width="80%" margin="auto" marginTop="50px">
        <Heading as="h5" textAlign="center" fontSize="25px">
          Check the current prices, volumes and all you ever need...
        </Heading>
        <HomeTable />
      </Box>
    </main>
  );
}
