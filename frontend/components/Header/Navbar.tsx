import { colors } from "@/constants/colors";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import NavbarLinksSmall from "./NavbarLinksSmall";
import NavbarLinksLarge from "./NavbarLinksLarge";

const Navbar: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const infoBoxStyles = {
    width: "120px",
    px: "15px",
    borderRight: `2px solid ${colors.dark}`,
  };
  const links = [
    { href: "/auth", description: "login/signup" },
    { href: "/portfolio", description: "portfolio" },
    { href: "/watchlist", description: "watchlist" },
    { href: "/tools", description: "tools" },
  ];

  return (
    <Flex
      justify="space-between"
      px="20px"
      py="10px"
      fontSize="14px"
      backgroundColor={colors.yellow}
    >
      <Flex wrap="wrap" maxWidth="75%" gap="5px">
        <Box {...infoBoxStyles}>
          Market Cap: <Box>$2.60T</Box>
        </Box>
        <Box {...infoBoxStyles}>
          BTC Dominance: <Box>51.9%</Box>
        </Box>
        <Box {...infoBoxStyles}>
          ETH Dominance: <Box>16.8%</Box>
        </Box>
        <Box {...infoBoxStyles}>
          Halving: <Box>33D</Box>
        </Box>
      </Flex>
      {isLargeScreen && <NavbarLinksLarge links={links} />}
      {!isLargeScreen && <NavbarLinksSmall links={links} />}
    </Flex>
  );
};

export default Navbar;
