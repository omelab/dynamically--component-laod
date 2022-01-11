import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalProvider from "./context/ModalProvider";
import App from "./App";
import Expenses from "./module/SupplyChain";
import Invoices from "./module/Accounts";

const rootElement = document.getElementById("root");
render(
  <ModalProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  </ModalProvider>,
  rootElement
);
