import { colors } from "@/constants/colors";
import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const infoBoxStyles = { px: "15px", borderRight: `2px solid ${colors.dark}` };
  const largeMenuBoxStyles = {
    _hover: { transform: "scale(1.1)" },
    transition: "transform 0.15s",
  };

  return (
    <HStack
      backgroundColor={colors.yellow}
      justify="space-between"
      px="20px"
      py="10px"
    >
      <HStack>
        <Box {...infoBoxStyles}>Market Cap: $2.60T</Box>
        <Box {...infoBoxStyles}>BTC Dominance: 51.9%</Box>
        <Box {...infoBoxStyles}>ETH Dominance: 16.8%</Box>
        <Box {...infoBoxStyles}>Halving: 33D</Box>
      </HStack>
      <HStack gap="25px" fontWeight="bold">
        <Box {...largeMenuBoxStyles}>
          <Link href="/auth">login/signup</Link>
        </Box>
        <Box {...largeMenuBoxStyles}>
          <Link href="/portfolio">portfolio</Link>
        </Box>
        <Box {...largeMenuBoxStyles}>
          <Link href="/watchlist">watchlist</Link>
        </Box>
        <Box {...largeMenuBoxStyles}>
          <Link href="/tools">tools</Link>
        </Box>
      </HStack>
    </HStack>
  );
};

export default Navbar;
