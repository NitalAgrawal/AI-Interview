// like user can go to the home page only if it is  loggedin  if it is not then first it will redirected to the login page 
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'

const protected = ( {children} ) => {

    const { loading,user } = useAuth()
    
 
    if(loading){
        return (<main><h1>Loading...</h1></main>)
    }

    if(!user){
         return <Navigate to={'/login'} />
    }
  return children
}

export default protected 