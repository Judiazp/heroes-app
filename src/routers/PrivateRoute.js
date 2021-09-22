import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { AuthContext } from "../context/auth/auth"

export const PrivateRoute = ({component: Component, ...rest }) => {

    const {authToken} = useContext(AuthContext)

    return (
        <Route {...rest} >
            {!authToken ? <Redirect to="/" /> : <Component /> }
        </Route>
    )
}
