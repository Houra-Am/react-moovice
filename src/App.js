import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Popular from "./components/Popular";
import PopularBattle from "./components/PopularBattle";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import Error404 from "./components/Error404";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
              Home
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item active'>
                  <Link className='nav-link' to='/weekly'>
                    Weekly <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/weeklyBattle'>
                    Weekly Battle
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/popular'>
                    Popular
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/popularBattle'>
                    Popular Battle
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/favorites'>
                    Favorites
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/weekly' component={Weekly} />
            <Route path='/weeklyBattle' component={WeeklyBattle} />
            <Route path='/popular' component={Popular} />
            <Route path='/popularBattle' component={PopularBattle} />
            <Route path='/favorites' component={Favorites} />
            <Route path='*' component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//c72ac9cf5197a1f66ad0d776f5568bc2
