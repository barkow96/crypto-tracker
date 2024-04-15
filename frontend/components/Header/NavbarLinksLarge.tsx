import { colors } from "@/constants/colors";
import { NavbarLinksProps } from "@/types/navbar";
import { Box, HStack } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavbarLinksLarge: React.FC<NavbarLinksProps> = ({ links }) => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const isSessionAvailable = sessionData ? true : false;

  const filteredLinks = links.filter((link) => {
    if (isSessionAvailable && link.onlyForLoggedIn) return true;
    else if (isSessionAvailable && !link.onlyForLoggedIn) return false;
    else if (!isSessionAvailable && link.onlyForLoggedIn) return false;
    else if (!isSessionAvailable && !link.onlyForLoggedIn) return true;
  });

  const largeMenuBoxStyles = {
    _hover: { transform: "scale(1.1)" },
    transition: "transform 0.15s",
    cursor: "pointer",
  };

  return (
    <HStack gap="25px" fontWeight="bold">
      {filteredLinks.map((link, index) => (
        <Box key={index} {...largeMenuBoxStyles}>
          <Link href={link.href}>{link.description}</Link>
        </Box>
      ))}
      {sessionData && (
        <Box
          {...largeMenuBoxStyles}
          color={colors.red}
          onClick={() => {
            signOut({ callbackUrl: "/", redirect: true });
          }}
        >
          sign out
        </Box>
      )}
    </HStack>
  );
};

export default NavbarLinksLarge;
