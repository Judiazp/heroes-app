import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../components/pages/login';
import { Home } from '../components/pages/home';
import { PrivateRoute } from '../routers/PrivateRoute';
import { AuthContext } from '../context/auth/auth';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRouter = () => {

    
    // const initialState = JSON.parse(localStorage.getItem("acces-token"))

    // const setToken = (data) => {
    //     localStorage.setItem("acces-token", JSON.stringify(data));
    // }

    const removeToken = () => {
        localStorage.removeItem("acces-token")
    } 

    const { token } = useSelector(state => state.auth )

    return (
        <div came="bg-light">
            <AuthContext.Provider value={{
                removeToken,
            }}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <PrivateRoute exact path="/home" isAuthToken={token} component={Home}/>
                    </Switch>
                    { token ? <Redirect to="/home" /> : <Redirect to="/" /> }
                </Router>
            </AuthContext.Provider>
        </div>
    )
}

export default AppRouter;