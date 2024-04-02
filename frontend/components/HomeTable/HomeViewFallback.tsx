import { HomeViewFallbackProps } from "@/types/home-table/table";
import { Text } from "@chakra-ui/react";

const HomeViewFallback: React.FC<HomeViewFallbackProps> = ({
  isDataLoaded,
  error,
}) => {
  if (error)
    return (
      <Text>
        Unfortunatelly an error occured during fetching data from server. :(
      </Text>
    );
  else if (!isDataLoaded)
    return <Text>Loading the data from server. Please wait...</Text>;
};

export default HomeViewFallback;
