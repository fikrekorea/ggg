

import React from 'react'
import { Link } from 'react-router-dom'
//import './styles/sidebarstyles.css'

const NewSideBar = () => {
  return (
    <div className='d-flex'>
        <nav className='sidenav'>
        <a href='d-flex align-items-center'>
            <i className='fa-solid fa-user-plus'></i>
            <span>School Name</span>
        </a>
        
        <ul className='nav nav-pills flex-column'>
            <li className='nav-item' id="dropdown">
                <Link to='about' className='nav-link'>
                    <i className="fa-solid fa-school-flag"></i>
                        <span>Manage School</span>
                </Link>
                <ul>
                <li className='nav-item'>
                <Link to='/services' className='nav-link'>
                    <i className="fa-solid fa-school-flag"></i>
                        <span>View School Information</span>
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='about' className='nav-link'>
                    <i className="fa-solid fa-school-flag"></i>
                        <span>Edit School Information</span>
                </Link>
                </li>
                </ul>
            </li>
            <li className='nav-item'>
                <Link to='login' className='nav-link'>
                    <i className='fa-solid fa-graduation-cap'></i>
                        <span>Manage Student</span>
                </Link>
            <ul>
            <li className='nav-item'>
                <Link to='login' className='nav-link'>
                    <i className='fa-solid fa-graduation-cap'></i>
                        <span>Register Student</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='login' className='nav-link'>
                    <i className='fa-solid fa-graduation-cap'></i>
                        <span>Edit Student</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='login' className='nav-link'>
                    <i className='fa-solid fa-graduation-cap'></i>
                        <span>Delete Student</span>
                </Link>
            </li>
            </ul>
            </li>
            <li className='nav-item'>
                <Link to='a' className='nav-link'>
                    <i className="fa-solid fa-video"></i>
                        <span>Manage Video</span>
                </Link>
            <ul>
            <li className='nav-item'>
                <Link to='b' className='nav-link'>
                    <i className="fa-solid fa-upload"></i>
                        <span>Upload Video</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='c' className='nav-link'>
                    <i className="fa-solid fa-video"></i>
                        <span>View Video</span>
                </Link>
            </li>
            </ul>
            </li>
            <li className='nav-item'>
                <Link to='c' className='nav-link'>
                    <i className="fa-solid fa-calendar-days"></i>
                        <span>Manage Event</span>
                </Link>
            <ul>
            <li className='nav-item'>
                <Link to='c' className='nav-link'>
                    <i className="fa-solid fa-calendar-days"></i>
                        <span>Create Event</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='c' className='nav-link'>
                    <i className="fa-solid fa-calendar-days"></i>
                        <span>Edit Event</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='b' className='nav-link'>
                    <i className="fa-solid fa-calendar-days"></i>
                        <span>View Event</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='a' className='nav-link'>
                    <i className="fa-solid fa-calendar-days"></i>
                        <span>Participate on Event</span>
                </Link>
            </li>
            </ul>
            </li>
            <li className='nav-item'>
                <Link to='a' className='nav-link'>
                    <i className="fa-solid fa-money-check-dollar"></i>
                        <span>View Sponsors</span>
                </Link>
            </li>
           
        </ul>
        </nav>
        
    </div>
  )
}

export default NewSideBar


/*
import React from 'react'

const NewSideBar = () => {
  return (
    <div>NewSideBar</div>
  )
}

export default NewSideBar
*/