import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home'
import Login from "./login/Login";
import Register from "./register/Register";
import Product from "./product/Product";
import CategoryProducts from "./categoryProducts/CategoryProducts";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/categories/:id/products">
        <CategoryProducts />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
    </Switch>
  )
}

export default Routes