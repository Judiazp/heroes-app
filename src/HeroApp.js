import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const HeroApp = () => {
    return (
        <Router >
            <Route exact path="/" >
                <h1>Este es el login</h1>
            </Route>
            <Route path="/home">
                <h1>Esta es la home</h1>
            </Route>
        </Router>
    )
}

export default HeroApp;
