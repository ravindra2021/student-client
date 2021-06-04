import React,{useState} from 'react';
import '../../components/Form/Form.css';

import {useHistory} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


const FormLogin=()=>{
  
  const history=useHistory;

// const onLoginValidate=(e)=>{
//   console.log("entered into onLoginValidate");
//   history.push('/StudentHome'); 
// };
    return(
        <div className='form-content-right'>
        <form className='form' noValidate>
          <h1>
            Login for existing students
          </h1>
          

          <div className='form-inputs'>
          <div className ='form-label'>
            <label >Username</label></div>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder='Enter your username'
              
            />
          </div>

          <div className='form-inputs'>
          <div className ='form-label'>
            <label >Password</label></div>  
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
          
            />         
          </div>
          <br/>
          <button className='form-input-btn' type='submit' onClick={()=>history.push('/FromSignup')}>
            Login
          </button>
          <br/>
          <span className='form-input-login'>
            New user? please Sign-up  <a href='http://localhost:3000/signup'>here</a>
          </span>
        </form>
      </div>
    )
};
export default FormLogin;


