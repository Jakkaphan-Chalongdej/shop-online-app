import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../../pages/contact";
import Home from "../../pages/Home";
import allProduct from "../../pages/AllProduct";
import content from "../../pages/Allstore";
import Header from "../layouts/Header";
import cart from "../../pages/Cart/index.js";
import Sale from "../../pages/Sale/index";
export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/allproducts" component={allProduct} exact={true} />
        <Route path="/allstore" component={content} exact={true} />
        <Route path="/cart" component={cart} exact={true} />
        <Route path="/sale" component={Sale} exact={true} />
      </Switch>
      
    </BrowserRouter>
  );
}
