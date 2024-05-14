import { colors } from "@/constants/colors";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import NavbarLinksSmall from "./NavbarLinksSmall";
import NavbarLinksLarge from "./NavbarLinksLarge";
import { constants } from "@/constants/constants";

const Navbar: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const infoBoxStyles = {
    width: "120px",
    px: "15px",
    borderRight: `2px solid ${colors.darkbluish[600]}`,
  };

  const links = [
    { href: "/auth", description: "login/signup", onlyForLoggedIn: false },
    { href: "/portfolio", description: "portfolio", onlyForLoggedIn: true },
    { href: "/watchlist", description: "watchlist", onlyForLoggedIn: true },
    { href: "/tools", description: "tools", onlyForLoggedIn: false },
  ];

  return (
    <Flex
      justify="space-between"
      px="20px"
      py="10px"
      fontSize="14px"
      backgroundColor={colors.darkbluish[700]}
      color={colors.darkbluish[100]}
    >
      <Flex wrap="wrap" textAlign="center" maxWidth="75%" gap="5px">
        <Box {...infoBoxStyles}>
          Market Cap: <Box>{constants.common.BETA_PLACEHOLDER}</Box>
        </Box>
        <Box {...infoBoxStyles}>
          BTC Dominance: <Box>{constants.common.BETA_PLACEHOLDER}</Box>
        </Box>
        <Box {...infoBoxStyles}>
          ETH Dominance: <Box>{constants.common.BETA_PLACEHOLDER}</Box>
        </Box>
        <Box {...infoBoxStyles}>
          Halving: <Box>{constants.common.BETA_PLACEHOLDER}</Box>
        </Box>
      </Flex>
      {isLargeScreen && <NavbarLinksLarge links={links} />}
      {!isLargeScreen && <NavbarLinksSmall links={links} />}
    </Flex>
  );
};

export default Navbar;
