import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import All from "../routes/all";
import Profile from "../routes/profile";
import FourPercentCalc from "../routes/four-percent";
import Car from "../routes/car";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <All path="/" />
      <Car path="/car/" />
      <FourPercentCalc path="/four-percent/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
    </Router>
  </div>
);

export default App;
