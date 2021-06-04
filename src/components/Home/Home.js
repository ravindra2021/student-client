import React from 'react';
import '../../components/Form/Form.css';
import {useHistory} from 'react-router-dom';


function Home(){
    const history = useHistory();
    return(
      <div>
       <h1>this is the home page</h1>
       <br/>
       <button type='button' onClick={()=>history.push('/login')}>Login</button>
       <br/>
       <button type='button' onClick={()=>history.push('/signup')}>Register</button> 
       </div>
    );
};
export default Home;
