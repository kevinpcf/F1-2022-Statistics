import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./styles.css";
import App from "./App";
import Ciao from "./Ciao";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#30ACFF",
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ciao" element={<Ciao />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
