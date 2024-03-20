import Header from "@/components/Header/Header";
import { Box } from "@chakra-ui/react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box height="100vh">
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
