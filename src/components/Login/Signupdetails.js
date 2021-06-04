import React,{useState} from 'react';
import '../../components/Form/Form.css';
import FormLogin from '../Form/FormLogin';
import FormSignup from '../Form/FormSignup';
import FormSignupDetails from '../Form/FormSignupDetails';
import StudentHome from '../StudentHome/StudentHome';
import banner from '../../Assets/Images/bearcat.jpg';

import {withRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect,useRouteMatch } from "react-router-dom";

function Signup(){
  const [showLogin,setShowLogin]=React.useState(false);
  
  const { path,url} = useRouteMatch();
  const switchtodetails=()=>{
    setShowLogin(true);
}
const switchSh=()=>{
  setShowLogin(false);
}
    return(
     
   
        <div>
           
        <div className='form-container'>
          
        <span className='close-btn'>×</span>
       
        <div className='form-content-right'>
        <form className='form' noValidate>
          <h1>
            nice ! please enter your details.
          </h1>
          <div className='form-inputs'>
              <div className ='form-label'>
               <label>First Name</label>
               </div>
          <input
            className='form-input'
            type='text'
            name='first-name'
            placeholder='Enter your First Name'
      
          />
        </div>

        <div className='form-inputs'>
        <div className ='form-label'>  
          <label >Last Name</label></div>
          <input
            className='form-input'
            type='text'
            name='last-name'
            placeholder='Enter your Last Name'
           />
        </div>

          <div className='form-inputs'>
          <div className ='form-label'>
            <label>Email</label></div>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
           />
          </div>
                   
          <button className='form-input-btn' type='submit'>
           Register
          </button>
          <br/>
          <span className='form-input-login'>
            Existing user? Login  <a href='#'>here</a>
          </span>
        </form>
      </div>
      
    

        </div>
        </div>
        
      
      
       
    );
};
export default Signup;
