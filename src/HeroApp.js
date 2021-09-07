import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from './components/pages/login';
import { Home } from './components/pages/home';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthContext } from './context/auth/auth';
import 'bootstrap/dist/css/bootstrap.min.css';


const HeroApp = () => {
    const initialState = JSON.parse(localStorage.getItem("acces-token"))
    const [authToken, setAuthToken] = useState(initialState)

    const setToken = (data) => {
        localStorage.setItem("acces-token", JSON.stringify(data));
        setAuthToken(data)
    }

    const removeToken = () => {
        localStorage.removeItem("acces-token")
        setAuthToken(null)
    } 

    return (
        <div className="bg-light">
            <AuthContext.Provider value={{
                authToken,
                setAuthToken: setToken,
                removeToken
            }}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <PrivateRoute exact path="/home" component={Home}/>
                    </Switch>
                    { authToken ? <Redirect to="/home" /> : <Redirect to="/" /> }
                </Router>
            </AuthContext.Provider>
        </div>
    )
}

export default HeroApp;