import React from "react";
import ProductDetailModules from "../client/modules/productdetail";
import UserModules from "../client/modules/products";
import AddProductModules from "../client/modules/addproduct";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const Main = () => (

  <div>
    <Switch>
      <Route exact path="/product/:id" component={ProductDetailModules} />
      <Route exact path="/product" component={UserModules} />
      <Route exact path="/add-product" component={AddProductModules} />
      <Route path="*" component={UserModules} />
    </Switch>
  </div>
);

export default Main;


