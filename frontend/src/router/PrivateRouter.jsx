import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../auth/Content"

const PrivateRoute = () => {
    const { token } = useContext(AuthContext)
    if(!token) {
        return <Navigate to='/login' />
    }
    return token
        ? <Outlet />
        : <Navigate to='/login' />
}
export default PrivateRoute;