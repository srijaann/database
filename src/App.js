import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cities from './Components/Cities'
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Data base connection </h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to={"/"}>City List </Link>{" "}
            </li>
            {/* <li>
              <Link to={"/Add"}>Add</Link>
            </li>
            <li>
              <Link to={"/Update"}>Update</Link>
            </li>
            <li>
              <Link to={"/Delete"}>Delete</Link>
            </li> */}
          </ul>
        </nav>
        <hr></hr>
        <Switch>
          <Route exact path="/" component={Cities}></Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
