import React from "react";
import { Switch, Route } from "react-router-dom";
import ListUsers from "../components/list";
import ProductDetail from "../../productdetail";
import addProducts from "../../addproduct";
const UserRouter = () => (

  <div>
    <Switch>
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/edit-product/:id" component={addProducts} />
      <Route exact path="/add-product" component={ addProducts } />
      <Route exact path="/product" component={ListUsers} />
      <Route path="*" component={ListUsers} />
    </Switch>
  </div>
);

export default UserRouter;
