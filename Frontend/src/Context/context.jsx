import React from "react";
import { createContext, useState, useEffect } from "react";

const context = createContext(null);
const ContextProvider = (props) =>{
    const [auth, setAuth] = useState(() => {
        // Load initial auth state from localStorage
        const storedAuth = localStorage.getItem('auth');
        return storedAuth === 'true'; // convert string to boolean
      });
      useEffect(() => {
        // Save auth state to localStorage on every change
        localStorage.setItem('auth', auth);
      }, [auth]);
return(
    <context.Provider value={{auth,setAuth }}>
        {props.children}
    </context.Provider>

)
}

export {ContextProvider,context};