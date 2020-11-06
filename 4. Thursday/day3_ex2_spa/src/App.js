import logo from './logo.svg';
import './App.css';
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Prompt,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { useState } from 'react';
import {Home, LoggedIn, Jokes, ScrapeParallel, ScrapeSequential} from "./Components";
import apiFacade from './apiFacade';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('');

  const logout = () => {
    apiFacade.logout()
    setLoggedIn(false)
  }
  const login = (user, pass) => {
    apiFacade.login(user, pass)
      .then(res => {
        setLoggedIn(true)
        setError('');
      })
      .catch(err => {
        setError("Couldn't log you in, see error in console for further information");
        console.log(err);
      })
  }
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <div>
            {!loggedIn ? (<Home login={login} />) :
            (<div>
              <LoggedIn />
              <button onClick={logout}>Logout</button>
            </div>)}
            
            {error}
          </div>
        </Route>
        <Route path="/jokes">
          <Jokes />
        </Route>
        <Route path="/scrape">
          <h2>Scrape goes here!</h2>
          <ScrapeSequential />
          <ScrapeParallel />
        </Route>
      </Switch>
    </div>

  );
}

function Header() {
  return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink exact activeClassName="active" to="/jokes">Jokes</NavLink></li>
        <li><NavLink exact activeClassName="active" to="/scrape">Scrape</NavLink></li>
      </ul>
    </div>
  )
}

export default App;
