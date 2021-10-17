import React, { createContext, useState, useEffect, useCallback } from "react";
import { useHistory, Redirect } from "react-router";
import history from '../history'

import  { api }  from '../services/api'

const AuthContext = createContext()

function AuthProvider ({ children }) {

    const [ authenticated, setAuthenticated ] = useState(false)
    const [loading, setLoading] = useState(true)

    const history = useHistory()
    
    const AuthCallback = useCallback(() => {
            const HasToken = localStorage.getItem("token")
            if(HasToken && authenticated) {
            api.defaults.headers.Authorization = `Bearer ${HasToken}`  
            }
            setLoading(false)     
    },[])


    useEffect(() => {
       AuthCallback()
    }, [])



    


    return (
        <AuthContext.Provider value={ { authenticated, setAuthenticated, loading }}>
            { children }
        </AuthContext.Provider>
    )
    
}

export { AuthContext, AuthProvider }