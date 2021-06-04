import React, {useState}from 'react';
import Login from'./Login';
import Register from'./Register';

const Home=() => {
    const [Logged, setLogged] = React.useState(false);
    const switchLoggedTrue=()=>{
        setLogged(true);
    }
    const switchLoggedFalse=()=>{
        setLogged(false);
    }

  return (<div>
  <h2>This is Home Page component</h2>
  <h3>This shows Login/register page</h3>

    { Logged ? <Login /> :  <Register/> } 
 
    <br/>
    {!Logged ? <button onClick={switchLoggedTrue}>Login Here</button> : <button onClick={switchLoggedFalse}>New User? Register here</button>}
  
</div>
  )
}
export default Home;