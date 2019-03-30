import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import clicker from "./pages/clicker";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={clicker} />
      </div>
    </Router>
  );
}

export default App;
