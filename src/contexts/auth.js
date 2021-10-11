import React, { createContext, useState, useEffect } from "react";

import  { api }  from '../services/api'

const AuthContext = createContext()

function AuthProvider ({ children }) {

    const [ authenticated, setAuthenticated ] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const HasToken = localStorage.getItem("token")
        if(HasToken) {
        api.defaults.headers.Authorization = `Bearer ${HasToken}`  
        setAuthenticated(true)
        }
        setLoading(false)
    }, [])



    


    return (
        <AuthContext.Provider value={ { authenticated, setAuthenticated, loading }}>
            { children }
        </AuthContext.Provider>
    )
    
}

export { AuthContext, AuthProvider }