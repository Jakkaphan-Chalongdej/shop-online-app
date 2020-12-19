import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/Footer";

import NavbarRoute from "./components/route/Route";


function App() {
  return (
    <>
      <NavbarRoute />

      <Footer />
    </>
  );
}

export default App;
