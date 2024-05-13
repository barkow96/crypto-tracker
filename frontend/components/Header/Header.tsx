import { Box } from "@chakra-ui/react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const shadowStyles = {
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 16px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  return (
    <header>
      <Box sx={shadowStyles}>
        <Logo />
        <Navbar />
      </Box>
    </header>
  );
};

export default Header;
