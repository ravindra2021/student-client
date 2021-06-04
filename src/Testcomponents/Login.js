import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';


import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

function Login(props){
  
    const history = useHistory();
    const handleSubmit=()=>{
     
      history.push('/About')

    };
   
    return(
        <div>
        <h1>This is Login page</h1>
        <br/>
        <label>username</label>
        <input type={Text} placeholder='enter username'></input>
        <br/>
        <button onClick={handleSubmit}>Login</button>
         <br/>
       
        </div>
    )
}
export default Login;
