import React, { createContext, useState, useEffect, useCallback } from "react";
import { useHistory, Redirect } from "react-router";
import history from '../history'

import  { api }  from '../services/api'

const AuthContext = createContext()

function AuthProvider ({ children }) {

    const [ authenticated, setAuthenticated ] = useState(false)
    const [loading, setLoading] = useState(true)

    const HasToken = localStorage.getItem("token")
    
    const AuthCallback = useCallback(() => {
            if(HasToken) {
            api.defaults.headers.Authorization = `Bearer ${HasToken}`  
            }

            setTimeout(() => setLoading(false), 1000 ) 
            console.log("Loop fica infinito ?") 
    },[HasToken])


    useEffect(() => {
       AuthCallback()
    }, [AuthCallback])



    


    return (
        <AuthContext.Provider value={ { authenticated, setAuthenticated, loading }}>
            { children }
        </AuthContext.Provider>
    )
    
}

export { AuthContext, AuthProvider }