import { HomeViewFallbackProps } from "@/types/home-table/table";
import { Text } from "@chakra-ui/react";

const HomeViewFallback: React.FC<HomeViewFallbackProps> = ({
  isDataLoaded,
  error,
}) => {
  if (error)
    return (
      <Text as="p" mt="15px" fontSize="20px">
        {error}
      </Text>
    );
  else if (!isDataLoaded)
    return (
      <Text as="p" mt="15px" fontSize="20px">
        Loading the data from server. Please wait...
      </Text>
    );
};

export default HomeViewFallback;
