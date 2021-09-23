import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../components/pages/login';
import { Home } from '../components/pages/home';
import { PrivateRoute } from '../routers/PrivateRoute';
import { AuthContext } from '../context/auth/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRouter = () => {

    const initialState = JSON.parse(localStorage.getItem("acces-token"))
    const [authToken, setAuthToken] = useState(initialState)
    const [openModal, setOpenModal] = useState(false)
    const [error, setError] = useState(false)

    const setToken = (data) => {
        localStorage.setItem("acces-token", JSON.stringify(data));
        setAuthToken(data)
    }

    const removeToken = () => {
        localStorage.removeItem("acces-token")
        setAuthToken(null)
    } 

    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <div className="bg-light">
            <AuthContext.Provider value={{
                authToken,
                setAuthToken: setToken,
                removeToken,
                toggleModal,
                openModal,
                error,
                setError
            }}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <PrivateRoute exact path="/home" isAuthToken={authToken} component={Home}/>
                    </Switch>
                    { authToken ? <Redirect to="/home" /> : <Redirect to="/" /> }
                </Router>
            </AuthContext.Provider>
        </div>
    )
}

export default AppRouter;