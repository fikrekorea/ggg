
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavLink} from 'react-router-dom'
//import '../styles/sidebarstyles.css'
import '../styles/newsidenavbarstyles.css'

const SchoolSidebar = () => {
  return (
    

    
    <div className='d-flex'>
        <div>
        <nav className='sidenav'><h3>Welcome to School Page</h3>
              
        <ul className='nav nav-pills flex-column'>
        <li className='nav-item'>
                <Link to='SchoolProgram' className='cnameschoolcontent'>
                    <i className='fa-solid fa-graduation-cap'></i>
                        <span>School Programs</span>
                </Link>
            </li>
            <li className='nav-item' id="dropdown">
                <Link to='about' className='nav-link'>
                    <i className="fa-solid fa-school-flag"></i>
                        <span>Manage School</span>
                </Link>
                <ul>
                
                <li className='nav-item'>
                <Link to='ViewSchoolInfo' className='cnameschoolcontent'>
                    <i className="fa-solid fa-school-flag"></i>
                        <span>View School Information</span>
                </Link>
                </li>
                
                <li className='nav-item'>
                <Link to='EditSchoolInfo' className='cnameschoolcontent'>
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
                <Link to='RegisterStudent' className='cnameschoolcontent'>
                    <i className='fa-solid fa-graduation-cap'></i>
                        <span>Register Student</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='EditStudent' className='cnameschoolcontent'>
                    <i className='fa-solid fa-graduation-cap'></i>
                        <span>Edit Student</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='DeleteStudent' className='cnameschoolcontent'>
                    <i className='fa-solid fa-graduation-cap'></i>
                        <span>Delete Student</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='ViewStudent' className='cnameschoolcontent'>
                    <i className='fa-solid fa-graduation-cap'></i>
                        <span>View Student</span>
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
                <Link to='UploadVideo' className='cnameschoolcontent'>
                    <i className="fa-solid fa-upload"></i>
                        <span>Upload Video</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='ViewSchoolVideo' className='cnameschoolcontent'>
                    <i className="fa-solid fa-video"></i>
                        <span>View School Video </span>
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
                <Link to='CreateEvent' className='cnameschoolcontent'>
                    <i className="fa-solid fa-calendar-days"></i>
                        <span>Create Event</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='EditEvent' className='cnameschoolcontent'>
                    <i className="fa-solid fa-calendar-days"></i>
                        <span>Edit Event</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='ViewEvent' className='cnameschoolcontent'>
                    <i className="fa-solid fa-calendar-days"></i>
                        <span>View Event</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='ParticipateOnEvent' className='cnameschoolcontent'>
                    <i className="fa-solid fa-calendar-days"></i>
                        <span>Participate on Event</span>
                </Link>
            </li>
            </ul>
            </li>
            <li className='nav-item'>
                <Link to='ViewSponsor' className='cnameschoolcontent'>
                    <i className="fa-solid fa-money-check-dollar"></i>
                        <span>View Sponsors</span>
                </Link>
            </li>
           
        </ul>
        </nav>

        </div>
        <div className='cnameschoolcontentarea'>
        <div className='School'>
            <div className='schoolnav'>
                <Link to="/SchoolSidebar/CreateEvent"/>
                <Link to="/SchoolSidebar/EditEvent"/>
                <Link to="/SchoolSidebar/DeleteStudent"/>
                <Link to="/SchoolSidebar/RegisterStudent"/>
                <Link to="/SchoolSidebar/ViewSchoolInfo"/>
                <Link to="/SchoolSidebar/ViewEvent"/>
                <Link to="/SchoolSidebar/ViewStudent"/>
                <Link to="/SchoolSidebar/EditStudent"/>
                <Link to="/SchoolSidebar/EditSchoolInfo"/>
                <Link to="/SchoolSidebar/Viewsponsor"/>
                <Link to="/SchoolSidebar/SchoolProgram"/>
                <Link to="/SchoolSidebar/ViewSchoolInfo"/>
                <Link to="/SchoolSidebar/EditSchoolInfo"/>
                <Link to="/SchoolSidebar/RegisterStudent"/>
                <Link to="/SchoolSidebar/EditStudent"/>
                <Link to="/SchoolSidebar/ViewStudent"/>
                <Link to="/SchoolSidebar/UploadVideo"/>
                <Link to="/SchoolSidebar/ViewSchoolVideo"/>   
                <Link to="/SchoolSidebar/ViewSponsor"/>  
            </div>
        <Outlet/>
        </div>
        </div>
        </div>
   
    
  )
}

export default SchoolSidebar
