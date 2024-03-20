import { NavbarLinksProps } from "@/types/navbar";
import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";

const NavbarLinksLarge: React.FC<NavbarLinksProps> = ({ links }) => {
  const largeMenuBoxStyles = {
    _hover: { transform: "scale(1.1)" },
    transition: "transform 0.15s",
  };

  return (
    <HStack gap="25px" fontWeight="bold">
      {links.map((link, index) => (
        <Box key={index} {...largeMenuBoxStyles}>
          <Link href={link.href}>{link.description}</Link>
        </Box>
      ))}
    </HStack>
  );
};

export default NavbarLinksLarge;
