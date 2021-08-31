import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './components/pages/login';
import { Home } from './components/pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';


const HeroApp = () => {
    return (
        <div className="bg-light">
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
            </Router>
        </div>
    )
}

export default HeroApp;
