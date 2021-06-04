import React,{useState} from 'react';
import '../../components/Form/Form.css';
import banner from '../../Assets/Images/bearcat.jpg';
import Axios from 'axios';
import { useForm } from "react-hook-form";
import {useHistory } from "react-router-dom";



const Login=(props)=>{
  const[user,setUser]=useState('');
 const history = useHistory();
  const { register, handleSubmit, errors } = useForm();


const url = 'http://ec2-52-14-39-59.us-east-2.compute.amazonaws.com:3001/authentication';
  
const onSubmit = (data, e) => {
  e.preventDefault();
  console.log(data);
   Axios.post(url,data)
   .then(res=>{
     console.log(res);
     if(res.status==200){
      console.log("Student logged-in successfully");
      setUser(data.username);
     }
     console.log(data);
    history.push({
      pathname:'/student-home/',
      state:data.username
    });
   });
  


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
            Login for existing students
          </h1>
          

          <div className='form-inputs'>
          <div className ='form-label'>
            <label >Username</label></div>
            <input
              className='form-input'
              type='text'
              placeholder='Enter your username'
              {...register("username")}
              
            />
          </div>

          <div className='form-inputs'>
          <div className ='form-label'>
            <label >Password</label></div>  
            <input
              className='form-input'
              type='password'
              placeholder='Enter your password'
              {...register("password")}
          
            />         
          </div> 
          <br/>
          <button className='form-input-btn' type='submit'>
            Login
          </button>
          <br/>
          <span className='form-input-login'>
            New user? please Sign-up  <a href='http://ec2-52-14-39-59.us-east-2.compute.amazonaws.com:5000/signup'>here</a>
          </span>
        </form>
      </div>
      
      
        </div>
        </div>
     
       
    );
};
export default Login;




 
         
        
     
