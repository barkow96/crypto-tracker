import { Box, Heading } from "@chakra-ui/react";

const PageContentLayout: React.FC<{
  children: React.ReactNode;
  heading?: string;
}> = ({ children, heading }) => {
  return (
    <Box width="80%" margin="auto" marginTop="50px">
      {heading && (
        <Heading as="h5" textAlign="center" fontSize="25px">
          {heading}
        </Heading>
      )}
      {children}
    </Box>
  );
};

export default PageContentLayout;
