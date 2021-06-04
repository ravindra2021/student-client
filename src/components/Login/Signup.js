import React,{useState} from 'react';
import '../../components/Form/Form.css';
import banner from '../../Assets/Images/bearcat.jpg';
import Axios from 'axios';
import { useForm } from "react-hook-form";
import {useHistory } from "react-router-dom";

function Signup(){
  const[user,setUser]=useState('');
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const url = 'http://localhost:3001/addstudent';
  const onSubmit = (data, e) => {
    
  e.preventDefault();

   Axios.post(url,data)
   .then(res=>{    
    setUser(data.username);
    history.push({
      pathname:'/student-home/',
      state:data.username
     });
   })


  }
    
return(
        <div>
           
        <div className='form-container'>
          
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <div>
          <img className='form-img' src={banner}/>
          </div>
        </div>
       
        <div className='form-content-right'>
        <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
          <h1>
            Registration for New students
          </h1>
          

          <div className='form-inputs'>
          <div className ='form-label'>
            <label >Username</label></div>
            <input
              className='form-input'
              type='text'
              placeholder='Enter a username'
             
              {...register("username")}
              
            />
          </div>

          <div className='form-inputs'> 
          <div className ='form-label'>
            <label >Password</label></div>
            <input
              className='form-input'
              type='password'
              placeholder='Set your password'
              {...register("password")}
          
            />         
          </div>
          <div className='form-inputs'>
              <div className ='form-label'>
               <label>First Name</label>
               </div>
          <input
            className='form-input'
            type='text'
            placeholder='Enter your First Name'
            {...register("firstname")}
      
          />
        </div>

        <div className='form-inputs'>
        <div className ='form-label'>  
          <label >Last Name</label></div>
          <input
            className='form-input'
            type='text'
            placeholder='Enter your Last Name'
            {...register("lastname")}

           />
        </div>

          <div className='form-inputs'>
          <div className ='form-label'>
            <label>Email</label></div>
            <input
              className='form-input'
              type='email'
              placeholder='Enter your email'
              {...register("email")}

           />
          </div>
          <br/>
          <button className='form-input-btn' type='submit' >
            Register
          </button>
          <br/>
          <span className='form-input-login'>
             Have an account already? Login  <a href='http://localhost:3000/login'>here</a>
          </span>
        </form>
      </div>
      
    

        </div>
        </div>
        
      
      
       
    );
};
export default Signup;
