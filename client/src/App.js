import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Calendar from "./Components/Calendar";
import "./index.css";
import "./Components/Calendar.css"
import Login from './Components/Login';
import newAccount from './Components/NewAccount';
import Day from './Components/Day';
import newEvent from './Components/NewEvent';

class App extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link">Login</Link></li>
                        <li><Link to={'/newAccount'} className="nav-link">New Account</Link></li>
                        <li><Link to={'/calendar'} className="nav-link">Calendar</Link></li>
                        <li><Link to={'/day'} className="nav-link">Day</Link></li>
                        <li><Link to={'/newEvent'} className="nav-link">New Event</Link></li>
                    </ul>
                    </nav>
                    <hr />
                    <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/newAccount' component={newAccount} />
                    <Route exact path='/calendar' component={Calendar} />
                    <Route exact path='/day' component={Day} />
                    <Route path='/newEvent' component={newEvent} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;