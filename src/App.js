import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import Home from "./jwt_auth/Home"
import Login from "./jwt_auth/Login";
import Head from "./jwt_auth/Head";
import Register from "./jwt_auth/Head";

///import ProductDetails from "./containers/ProductDetails";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <Router>
      <div className="App">
        <h2>JWT Authentication using JSON fake server</h2>
        <Switch>
          <Route exact path="/">
            <Head logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Home logoutUser={logoutUser} />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>

          <Header />
          <Route path="/" exact component={Home} />
            <Route path="/" exact component={ProductListing} />
          {/*  <Route path="/product/:productId" component={ProductDetails} /> */}
            <Route>404 Not Found!</Route>
        </Switch>
      </div>   
    </Router>

  );
}

export default App;

