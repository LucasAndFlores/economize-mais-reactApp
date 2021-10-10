import { createContext, useState, useEffect, useContext, Children } from "react";

import { api } from '../services/Api'

const AuthContext = createContext({})

export const AuthProvider = ({ childen }) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const storagedUserName = localStorage.getItem('user_name')
    const storagedToken = localStorage.getItem('token')
    const storagedUserId = localStorage.getItem('user_id')


    useEffect(() => {

        if (storagedToken && storagedUserId && storagedUserName) {
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }

        setTimeout(() => setLoading(false), 1000);
    },[])
    
    const fkUsuarioId = () => {
        return storagedUserId
    }

    return (
        <AuthContext.Provider value={{ loading, fkUsuarioId }}>
            { Children }
        </AuthContext.Provider>
    )
    
}