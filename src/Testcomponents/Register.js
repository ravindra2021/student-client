import React from 'react';

import {useHistory} from 'react-router-dom';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

function Register(props){
    const history = useHistory();
    const handleSubmit=()=>{
      
      history.push('/About')

    };
    
    return(
        <div>
        <h1>This is Register page</h1>
        <br/>
        <label>username</label>
        <input type={Text} placeholder='enter username'></input> <br/>
        <label>FirstName</label>
        <input type={Text} placeholder='enter FirstName'></input> <br/>
        <label>LastName</label>
        <input type={Text} placeholder='enter LastName'></input> <br/>
        <br/>
        {}
        <button onClick={handleSubmit}>Submit</button>

      
        </div>
        
    )
}
export default Register;
