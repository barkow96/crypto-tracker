import { colors } from "@/constants/colors";
import { Box, Heading } from "@chakra-ui/react";

const Logo: React.FC = () => {
  return (
    <Box backgroundColor={colors.red}>
      <Heading as="h1" textAlign="center" fontSize="50px" letterSpacing="5px">
        Crypto
        <span style={{ fontStyle: "italic", color: colors.yellow }}>Pulse</span>
      </Heading>
      <Heading
        as="h3"
        textAlign="center"
        fontSize="20px"
        letterSpacing="2px"
        padding="10px"
        color={colors.bright}
      >
        your cryptocurrencies tracker
      </Heading>
    </Box>
  );
};

export default Logo;
