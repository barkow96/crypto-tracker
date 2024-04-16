import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavbarLinksProps } from "@/types/navbar";
import Link from "next/link";
import { colors } from "@/constants/colors";
import { signOut, useSession } from "next-auth/react";

const NavbarLinksSmall: React.FC<NavbarLinksProps> = ({ links }) => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const isSessionAvailable = sessionData ? true : false;

  const filteredLinks = links.filter((link) => {
    if (isSessionAvailable && link.onlyForLoggedIn) return true;
    else if (isSessionAvailable && !link.onlyForLoggedIn) return false;
    else if (!isSessionAvailable && link.onlyForLoggedIn) return false;
    else if (!isSessionAvailable && !link.onlyForLoggedIn) return true;
  });

  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="2px"
        _hover={{ bg: colors.bright }}
        _expanded={{ bg: colors.red }}
        _focus={{ outline: 0, boxShadow: "outline" }}
      >
        <HamburgerIcon />
      </MenuButton>
      <MenuList>
        {filteredLinks.map((link, index) => (
          <MenuItem key={index}>
            <Link href={link.href}>{link.description}</Link>
          </MenuItem>
        ))}
        {sessionData && (
          <MenuItem
            color={colors.red}
            onClick={() => {
              signOut({ callbackUrl: "/", redirect: true });
            }}
          >
            log out
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default NavbarLinksSmall;
