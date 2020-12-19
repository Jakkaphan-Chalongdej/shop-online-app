import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "../../pages/contact";
import Home from "../../pages/Home";


import Header from "../layouts/Header";
// import PopProducts from "../PopProducts";
export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact={true} />
      <Route path="/contact" component={Contact} exact={true} />
      {/* <Route path="/" component={} exact={true} /> */}
      {/* <Route path="/PopProducts" component={} exact={true} /> */}
    </BrowserRouter>
  );
};
