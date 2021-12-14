import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../components/authContext'

const PublicRouter = ({ children }) => {

    const { user } = useContext(AuthContext)

    return (
        user.logged ? <Navigate to="/home" /> : children
    )
}

export default PublicRouter