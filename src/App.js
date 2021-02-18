import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OrderDetail from "./Pages/OrderDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/order/:id">
          <OrderDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
