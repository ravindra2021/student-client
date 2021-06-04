import React from 'react';
import '../../components/Form/Form.css';

function FormSignupDetails(){
    return(
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
    )
}
export default FormSignupDetails;


