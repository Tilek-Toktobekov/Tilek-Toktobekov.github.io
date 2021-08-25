import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorites from "./components/Favorite/Favorites";
import Home from "./components/Home/Home";
import ProductContextProvider from "./context/ProductContext";

const Routes = () => {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </ProductContextProvider>
  );
};

export default Routes;
