import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Login } from '../components/pages/login';
import { Home } from '../components/pages/home';
import { PrivateRoute } from '../routers/PrivateRoute';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PublicRoute } from './PublicRouter';

const AppRouter = () => {

    const { token } = useSelector(state => state.auth )

    return (
        <div came="bg-light">
            <Router>
                <Switch>
                    <PublicRoute exact path="/" isAuthenticated={token} component={Login} />
                    <PrivateRoute exact path="/home" isAuthToken={token} component={Home}/>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;