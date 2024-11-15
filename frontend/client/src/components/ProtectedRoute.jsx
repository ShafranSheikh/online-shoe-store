import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const ProtectedRoute = () =>{
    const { isAuthenticated } = useAuth();
    console.log("ProtectedRoute isAuthenticated:", isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;