import React from "react";
//import "./styles/style1.css"
import "./styles/style2.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
 
} from "react-router-dom";
 
 
export default function BasicExample({ overskrift, id }) {
 
  return (
    <div>
      <h2>{overskrift}</h2>
      <h2>{id}</h2>
      <Router>
        <div>
          <ul className="header">
            <li>
              <NavLink exact activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
          <hr />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home id={id} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
 
 
//The old way of using props
function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <p>This is home</p>
      <p>{props.id}</p>
    </div>
  );
}
 
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
 
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
 

