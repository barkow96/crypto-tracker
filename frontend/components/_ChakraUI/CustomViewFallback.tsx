import { Text } from "@chakra-ui/react";

type CustomViewFallback = {
  isDataLoaded: boolean;
  error: string | null | undefined;
  children: React.ReactNode;
};

const CustomViewFallback: React.FC<CustomViewFallback> = ({
  isDataLoaded,
  error,
  children,
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
        {children}
      </Text>
    );
};

export default CustomViewFallback;
