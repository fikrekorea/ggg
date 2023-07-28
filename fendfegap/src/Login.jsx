import React, { useState } from 'react'
import axios from 'axios'
//import './styles.css'
//import '../src/styles/jsxloginstyles.css'
import '../styles/jsxloginstyles.css'
import { useNavigate } from 'react-router-dom'
//import logicon from './images/login.jpg'
import logicon from '../images/login.jpg'
import Home from './Home'
import Contact from './Contact'
import SchoolSidebar from './SchoolSidebar'
import NewSideBar from './NewSideBar'

function Login()  {
    const [values, setValues] = useState({
        username:'',
        password:'',
    })

const navigate = useNavigate()

const [error, setError] = useState('')

const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8081/login',values)
    .then(res=>{
        if(res.data.Status==='Success'){
                navigate('/SchoolSidebar');
        }    else {
                setError(res.data.Error);
        }        
    })
    .catch(err => console.log(err));
}
  return (
    <div>   
        <h2 className='second'>Login</h2>     
        <form onSubmit={handleSubmit} className='cnameform'>            
            <div className='cnameLoginPage'>               
                <div className='cnameLoginForm'>
                <img className="mg" src={logicon} alt="logc"/>
                    <div className='text-danger'>
                        {error && error}
                    </div>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type="text" name="un" className="box" placeholder="Enter your Username"  
                                     onChange={e=>setValues({...values, username:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="pw" className="box" placeholder="Enter your Password"
                        onChange={e=>setValues({...values,password:e.target.value})}/>
                    </div>
                    <div>
                        <button id='submit' type='submit' className='btn' >Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
export default Login


/*import React,{useState} from 'react'
import logicon from '../images/logicon.png'
import axios from 'axios'
import '../styles/jsxloginstyles.css'
import {useNavigate} from 'react-router-dom'

function Login() {

    const [values, setValues] = useState({
        username:'',
        password:'',
    })
    const navigate = useNavigate()

    const [error, setError] = useState('')
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/login',values)
        .then(res=>{
            if(res.data.Status==='Success'){
                    navigate('/login');
            }    else {
                    setError(res.data.Error);
            }        
        })
        .catch(err => console.log(err));
    }

  return (
    <div>
        <h2>Login Form</h2>
<form onSubmit={handleSubmit} className='form'>
            
            <div className='cnameLoginPage'>
               
                <div className='cnameLoginForm'>
                <img className="mg" src={logicon} alt="logc"/>
                    <div className='text-danger'>
                    {error && error}
                    </div>
                    <div>
                        <label htmlFor='username'>Username : </label>
                        <input type="text" name="un" className="box" placeholder="Enter your Username" autoComplete='off' onChange={e=>setValues({...values, username:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password : </label>
                        <input type="password" name="pw" className="box" placeholder="Enter your Password" onChange={e=>setValues({...values,password:e.target.value})}/>
                    </div>
                    <div>
                        <button id='submit' type='submit' className='btn' >Login</button>
                    </div>

                </div>
            </div>
        </form>

    </div>
  )
}

export default Login
*/