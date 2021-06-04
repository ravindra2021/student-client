import React from 'react';
import '../../components/Form/Form.css';
import {useHistory} from 'react-router-dom';

function FormSignup(){
  const history = useHistory();
  const handleSubmit=()=>{
   
    history.push('/student-home')

  };
    return(
        <div className='form-content-right'>
        <form className='form' noValidate>
          <h1>
            Registration for New students
          </h1>
          

          <div className='form-inputs'>
          <div className ='form-label'>
            <label >Username</label></div>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder='Enter a username'
              
            />
          </div>

          <div className='form-inputs'> 
          <div className ='form-label'>
            <label >Password</label></div>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Set your password'
          
            />         
          </div>
          <br/>
          <button className='form-input-btn' type='button' onClick={handleSubmit}>
            Continue
          </button>
          <br/>
          <span className='form-input-login'>
             Have an account already? Login  <a href='#'>here</a>
          </span>
        </form>
      </div>
    )
}
export default FormSignup;


