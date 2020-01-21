import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Add from "./Components/Add";
import Delete from "./Components/Delete";
import Update from "./Components/Update";
import City from "./Components/City";
import Cities from './Components/Cities'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>This is React Router App</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to={"/"}>City List </Link>{" "}
            </li>
            <li>
              <Link to={"/Add"}>Add</Link>
            </li>
            <li>
              <Link to={"/Update"}>Update</Link>
            </li>
            <li>
              <Link to={"/Delete"}>Delete</Link>
            </li>
          </ul>
        </nav>
        <hr></hr>
        <Switch>
          <Route exact path="/" component={Cities}></Route>
          <Route path="/Add" component={Add}></Route>54
          <Route path="/Update" component={Update}></Route>
          <Route path="/Delete" component={Delete}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
