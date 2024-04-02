import HomeTable from "@/components/HomeTable/HomeTable";
import HomeViewFallback from "@/components/HomeTable/HomeViewFallback";
import { HomeTableItems } from "@/types/home-table/item";
import { Box, Heading } from "@chakra-ui/react";

const HomeView: React.FC<HomeTableItems> = ({ data, metaData, error }) => {
  return (
    <main>
      <Box width="80%" margin="auto" marginTop="50px">
        <Heading as="h5" textAlign="center" fontSize="25px">
          Check the current prices, volumes and all you ever need...
        </Heading>

        {error ||
          (!data && (
            <HomeViewFallback
              isDataLoaded={data ? true : false}
              error={error}
            />
          ))}
        {data && metaData && <HomeTable data={data} metaData={metaData} />}
      </Box>
    </main>
  );
};

export default HomeView;
