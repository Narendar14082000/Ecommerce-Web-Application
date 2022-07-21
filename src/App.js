// import './App.css';
// import React,{Component} from 'react';
// import Navbar from './component/Navbar';
// import Home from './component/Home';
// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Home/>
//     </>
//   );
// }

// export default App;
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import {  Route,Switch } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
