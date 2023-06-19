import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./styles.css";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#30ACFF",
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App></App>
  </ChakraProvider>,
  document.getElementById("root")
);
