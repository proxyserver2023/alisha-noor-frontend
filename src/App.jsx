import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.facebook.com/profile.php?id=61573452815826"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>E-Commerce App</h1>
        </a>
        <nav>
          <ul>
            <li>
              <link to="/">Products</link>
            </li>
            <li>
              <link to="/cart">Cart</link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
