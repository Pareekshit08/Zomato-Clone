import React from "react";
import { createContext, useState } from "react";

const context = createContext(null);
const contextProvider = (props) =>{
return(
    <context.Provider>
        {props.children}
    </context.Provider>

)
}