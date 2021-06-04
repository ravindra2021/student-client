import React,{useState,useEffect} from 'react';
import '../../components/Form/Form.css';
import {useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Axios from 'axios';



const StudentHome=(props)=>{

    const[student,setStudent]=useState({
    
         'firstname':'',
         'lastname':'',
         'email':''

    });
    const location=useLocation();
    const username=location.state;
    const history = useHistory();


    const url='http://localhost:3001/student/'+username;
    useEffect(() => {
        
        console.log(url);
        Axios.get(url)
            .then(res=>{
                setStudent(
                    {'firstname':res.data.firstname,
                    'lastname':res.data.lastname,
                    'email':res.data.email
                }
                );            
            });
            
 },[location.state]);



 const handelLogout=()=>{
     location.state='';
     history.push('/login')

 }


    return(
       
        <div>
        {console.log(location.state)}
        <div className='form-container'>
            <div className="form-content-left"> 
            <button className='logout-btn' onClick={handelLogout}>Logout</button> 
            </div>
        
        <span className='close-btn'>×</span>
       {console.log(student)}
       <div className='details'>
           
           <h3>Student Information</h3>
           <h3></h3>
           <div className='details-line'>
               <div>First Name : </div> 
               <div>{student.firstname}</div></div>
           
               <div className='details-line'>
                   <div> Last Name :</div>
                   <div> {student.lastname}</div>        
                      </div>

           
                <div className='details-line'>
                   <div> email-id :</div>
                   <div> {student.email}</div>        
                      </div>
            
          
       </div>

        </div>
        </div>

    )
};
export default StudentHome;


