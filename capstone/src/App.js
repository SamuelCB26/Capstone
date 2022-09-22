import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import Cards from './Cards';

const App = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <h1 class="display-4">ColourPal</h1>
    <nav>
    <Link to="/">Home</Link> |{" "}
    <Link to="/Contact">Contact</Link>
  </nav>
  <Cards />
  <Outlet />
  </div>
  </div>
  )
};

export default App;
