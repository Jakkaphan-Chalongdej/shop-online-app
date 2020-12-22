import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../../pages/contact";
import Home from "../../pages/Home";
import allProduct from "../../pages/AllProduct";
import content from "../../pages/Allstore";
import Header from "../layouts/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/allproducts" component={allProduct} exact={true} />
        <Route path="/allstore" component={content} exact={true} />
      </Switch>
      
    </BrowserRouter>
  );
}
