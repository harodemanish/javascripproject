
import React from "react";
import { useState,useEffect } from "react";

export default function EventBinding(){

    const[userName,setUserName] = useState();

    function handleUserName(e){
        // this is the subscriber and subcriber  will tel what action to perform
        //and collect the value form text box and assign this user

    // to collect the value from the text box we need event handler 
setUserName(e.target.value);
    }

    return(

        <div className=" container-fluid">
        
        <dl>
        
        <dt>User Name</dt>
        <dd><input type="text" value={userName}  onChange={handleUserName}></input></dd>
        </dl>
        <h1>{userName}</h1>
        </div>

    )
}