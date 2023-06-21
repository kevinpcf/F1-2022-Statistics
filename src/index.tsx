import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./styles.css";
import App from "./App";
import AggiungiCircuito from "./AggiungiCircuito";
import AggiungiPilota from "./AggiungiPilota";
import AggiornaCircuito from "./AggiornaCircuito";
import AggiornaPilota from "./AggiornaPilota";

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
        <Route path="/aggiungi-circuito" element={<AggiungiCircuito />} />
        <Route path="/aggiungi-pilota" element={<AggiungiPilota />} />
        <Route
          path="/aggiorna-circuito/:param1"
          element={<AggiornaCircuito />}
        />
        <Route path="/aggiorna-pilota/:param1" element={<AggiornaPilota />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
