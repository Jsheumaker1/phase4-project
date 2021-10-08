import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Home from "./Home"

function Account ({login, setCurrentUser}) {


    const handleUserLogOut = (e) => {
        e.preventDefault();
    fetch('http://localhost:3000/login', {
        method: "DELETE"  
    })
        .then(res=>res.json())
        .then(loggedOutUser =>{
            setCurrentUser({})
            login(false)
        })
    };


    
    return (

    <Home handleUserLogOut = {this.handleUserLogOut} />

    )            
}

export default Account
