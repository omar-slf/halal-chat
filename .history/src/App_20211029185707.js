import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppBody>
        <Switch>
          <Route exact path="/">
          </Route>
        </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.