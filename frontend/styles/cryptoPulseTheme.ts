import { extendTheme } from "@chakra-ui/react";

const cryptoPulseTheme = extendTheme({
  styles: {
    global: {
      "*": { boxSizing: "border-box", padding: 0, margin: 0 },
      "html, body": { maxWidth: "100vw", overflowX: "hidden" },
      a: { color: "inherit", textDecoration: "none" },
    },
  },
});

export default cryptoPulseTheme;
