import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "../../productdetail/components/list";
import addProducts from "../components/adddata";
import ListUsers from "../../products";

const UserRouter = () => (

  <div>
    <Switch>
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/edit-product/:id" component={addProducts} />
      <Route exact path="/add-product" component={addProducts} />
      <Route exact path="/products" component = {ListUsers} />
      <Route path="*" component={addProducts} />
    </Switch>
  </div>
);

export default UserRouter;


