import { Redirect, Route } from "react-router-dom"

export const PrivateRoute = ({component: Component, isAuthToken, ...rest }) => {

    return (
        <Route {...rest} >
            {!isAuthToken ? <Redirect to="/" /> : <Component /> }
        </Route>
    )
}
