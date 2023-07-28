import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Gallary from './Gallary'
import About from './About'
import Contact from './Contact'
import Logo from '../images/logc.png'


import '../mystyle.css'
const StyledNavbar = () => {
  return (
    <div>
    <nav className='navbar'>
      <div className='container'>
        
        <div className='logo'>
          <img className='logo' src={Logo} alt='logo'/>
        </div>
        <div className='nav-elements'>
        <ul>
        <li><NavLink to='/' className={({isActive})=>{return {color:isActive?'red':'grey'}}}>Home</NavLink></li>
        <li><NavLink to='Manageschool' className={({isActive})=>isActive?'Link active':'Link'}>Manage School</NavLink></li>
        <li><NavLink to='Managestudent' className={({isActive})=>isActive?'Link active':'Link'}>Manage Student</NavLink></li>
        <li><NavLink to='Uploadvideo' className={({isActive})=>isActive?'Link active':'Link'}>Upload Video</NavLink></li>
        <li><NavLink to='Viewvideo' className={({isActive})=>isActive?'Link active':'Link'}>View Video</NavLink></li>
        <li><NavLink to='Createevent' className={({isActive})=>isActive?'Link active':'Link'}>Create Event</NavLink></li>
        <li><NavLink to='Participateonevent' className={({isActive})=>isActive?'Link active':'Link'}>Participate on Event</NavLink></li>
        <li><NavLink to='Viewsponsor' className={({isActive})=>isActive?'Link active':'Link'}>View Sponsor</NavLink></li>
        <li><NavLink to='Login' className={({isActive})=>isActive?'Link active':'Link'}>Login</NavLink></li>
        </ul>        
      </div>
      {/*}
      <div className='nav-elements'>
        <ul>
        <li><NavLink to='/' className={({isActive})=>{return {color:isActive?'red':'grey'}}}>Home</NavLink></li>
        <li><NavLink to='About' className={({isActive})=>isActive?'Link active':'Link'}>About</NavLink></li>
        <li><NavLink to='Contact' className={({isActive})=>isActive?'Link active':'Link'}>Contact</NavLink></li>
        <li><NavLink to='Services' className={({isActive})=>isActive?'Link active':'Link'}>Services</NavLink></li>
        <li><NavLink to='Gallary' className={({isActive})=>isActive?'Link active':'Link'}>Gallary</NavLink></li>
        <li><NavLink to='Login' className={({isActive})=>isActive?'Link active':'Link'}>Login</NavLink></li>
        </ul>        
      </div>
      */}
      </div>
      
    </nav>
    {/*
    <div className='side-nav-elements'>
   
       <ul>
        <li><NavLink to='About' className={({isActive})=>{return {color:isActive?'red':'grey'}}}>Dashboard</NavLink></li>
        <li><NavLink to='/Regstud' className={({isActive})=>isActive?'Link active':'Link'}>Register Student</NavLink></li>
        <li><NavLink to='school/som' className={({isActive})=>isActive?'Link active':'Link'}>Manage School</NavLink></li>
        <li><NavLink to='school/regstud' className={({isActive})=>isActive?'Link active':'Link'}>Upload Video</NavLink></li>
        <li><NavLink to='School/Viewvideo' className={({isActive})=>isActive?'Link active':'Link'}>View Video</NavLink></li>
        <li><NavLink to='School/Createevent' className={({isActive})=>isActive?'Link active':'Link'}>Create Event</NavLink></li>
        <li><NavLink to='School/Participateonevent' className={({isActive})=>isActive?'Link active':'Link'}>Participate on Event</NavLink></li>
        <li><NavLink to='School/viewsponsor' className={({isActive})=>isActive?'Link active':'Link'}>View Sponsor</NavLink></li>
        </ul>         
      </div>
      */}
      </div>
  )
}

export default StyledNavbar