import React from 'react'
import CoustomHook from '../hooks/CoustomHook'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const { loggedin, checkingStatus } = CoustomHook()

    if (checkingStatus) {
        return (
            <h1>Loading...</h1>
        )
    }


    return loggedin ? <Outlet /> : <Navigate to="/login" />

}

export default PrivateRoute
