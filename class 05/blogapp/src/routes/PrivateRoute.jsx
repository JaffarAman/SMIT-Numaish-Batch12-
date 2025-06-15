import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    // get user
    return (
        localStorage.getItem("userUid") ? <Outlet /> : <Navigate to={"/"} />
    )
}

export default PrivateRoute