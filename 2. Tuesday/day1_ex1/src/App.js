import React from "react";
//import "./styles/style1.css"
import "./styles/style2.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,

} from "react-router-dom";

import upper, { text1, text2, text3 } from "./file1";
import object, {males, females} from "./file2";
import {MultiWelcome} from "./file3";

const { firstName, email } = object;
const allPersons = [...males, ...females];
const allPersons2 = [...males, "Kurt", "Helle", ...females, "Tina"];


export default function BasicExample({ overskrift, id }) {

  return (
    <div>
      <h2>{overskrift}</h2>
      <h2>{id}</h2>
      <Router>
        <div>
          <Header />
          <hr />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home id={id} />
              </Route>
              <Route path="/exercise1">
                <Exercise1 />
              </Route>
              <Route path="/exercise2">
                <Exercise2 />
              </Route>
              <Route path="/exercise3">
                <Exercise3 />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/exercise1">Exercise 1</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/exercise2">Exercise 2</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/exercise3">Exercise 3</NavLink>
      </li>
    </ul>
  )
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

function Exercise1() {
  return (
    <div>
      <h2>Ex 1</h2>
      <p>{upper("Uppercase me now")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>
  );
}

function Exercise2() {
  return (
    <div>
      <h2>Ex 2</h2>
      <p>{firstName}</p>
      <p>{email}</p>
    </div>
  );
}

function Exercise3() {
  return (
    <div>
      <h2>Ex 3</h2>
      <MultiWelcome />
    </div>
  )
}


