import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = () => {
    return (
        !localStorage.getItem("userUid") ? <Outlet /> : <Navigate to="/blog" />
    )
}

export default AuthRoute