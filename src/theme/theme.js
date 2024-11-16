import { extendTheme } from "@chakra-ui/react";
import Styles from "./styles";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  Styles,
  config,
});

export default theme;
