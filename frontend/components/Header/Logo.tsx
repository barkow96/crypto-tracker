import { colors } from "@/constants/colors";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Box backgroundColor={colors.darkbluish[900]}>
      <Heading
        as="h1"
        textAlign="center"
        fontSize="50px"
        letterSpacing="5px"
        transition="0.3s"
        _hover={{ transform: "scale(1.02)" }}
      >
        <Link href="/">
          <span style={{ color: colors.darkbluish[100] }}>Crypto</span>
          <span style={{ fontStyle: "italic", color: colors.reddish[600] }}>
            Pulse
          </span>
        </Link>
      </Heading>
      <Heading
        as="h3"
        textAlign="center"
        fontSize="20px"
        letterSpacing="2px"
        padding="10px"
        color={colors.reddish[600]}
      >
        your cryptocurrencies tracker
      </Heading>
    </Box>
  );
};

export default Logo;
