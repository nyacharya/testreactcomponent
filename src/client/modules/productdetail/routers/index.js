import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "../components/list";
import ListUser from "../../products";
import addProducts from "../../addproduct";

const UserRouter = () => (

  <div>
    <Switch>
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/edit-product/:id" component={addProducts} />
      <Route exact path="/" component={ListUser} />
      <Route path="*" component={ListUser} />
    </Switch>
  </div>
);

export default UserRouter;


