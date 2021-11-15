import { h } from "preact";
import { Router } from "preact-router";
import Header from "./header";

// Code-splitting is automated for `routes` directory
import Dashboard from "../routes/dashboard";
import Investing from "../routes/investing";
import Cars from "../routes/cars";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Dashboard path="/" />
      <Cars path="/cars/" />
      <Investing path="/investing/" />
    </Router>
  </div>
);

export default App;
