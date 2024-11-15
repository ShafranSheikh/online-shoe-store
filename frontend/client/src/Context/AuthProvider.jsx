import React, { createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(null);

     //check authentication on mount
    useEffect(()=>{
        const checkAuth = async () =>{
            try{
                const response = await axios.get("http://localhost:3000/api/auth/status", { withCredentials: true });
                setIsAuthenticated(response.data.isLoggedIn);
            }catch(error){
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    },[]);
    if (isAuthenticated === null) return <div>Loading...</div>;
    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);