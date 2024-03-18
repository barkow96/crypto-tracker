import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavbarLinksProps } from "@/types/navbar";
import Link from "next/link";
import { colors } from "@/constants/colors";

const NavbarLinksSmall: React.FC<NavbarLinksProps> = ({ links }) => {
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
        {links.map((link, index) => (
          <MenuItem key={index}>
            <Link href={link.href}>{link.description}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavbarLinksSmall;
