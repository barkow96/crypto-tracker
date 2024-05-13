import { Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavbarLinksProps } from "@/types/navbar";
import Link from "next/link";
import { colors } from "@/constants/colors";
import { signOut, useSession } from "next-auth/react";
import CustomMenuButton from "../_ChakraUI/CustomMenuButton";

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
      <CustomMenuButton
        paddingX={4}
        paddingY={2}
        isBorderUsed
        isExpandedUsed
        isFocusUsed
        isHoverUsed
      >
        <HamburgerIcon />
      </CustomMenuButton>
      <MenuList>
        {filteredLinks.map((link, index) => (
          <MenuItem key={index} color={colors.reddish[600]}>
            <Link href={link.href}>{link.description}</Link>
          </MenuItem>
        ))}
        {sessionData && (
          <MenuItem
            color={colors.reddish[600]}
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
