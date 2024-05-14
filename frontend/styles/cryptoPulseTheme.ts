import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const cryptoPulseTheme = extendTheme({
  styles: {
    global: {
      "*": { boxSizing: "border-box", padding: 0, margin: 0 },
      "html, body": {
        maxWidth: "100vw",
        overflowX: "hidden",
        fontFamily: "",
      },
      a: { color: "inherit", textDecoration: "none" },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default cryptoPulseTheme;
