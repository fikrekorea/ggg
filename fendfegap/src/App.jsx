
import { useState } from 'react'
import Login from './Login'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import TopMenuBar from './TopMenuBar'
import Home from './Home'
import '../styles/homepagestyles.css'
import '../styles/flexlayoutstyles.css'
import Services from './Services'
import Contact from './Contact'
import SchoolSidebar from './SchoolSidebar'
import Footer from './Footer'
import About from './About'
import HomeVideos from './HomeVideos'
import NewSideBar from './NewSideBar'
import ViewSchoolInfo from './ViewSchoolInfo'
import EditSchoolInfo from './EditSchoolInfo'
import RegisterStudent from './RegisterStudent'
import EditStudent from './EditStudent'
import DeleteStudent from './DeleteStudent'
import ViewStudent from './ViewStudent'
import CreateEvent from './CreateEvent'
import EditEvent from './EditEvent'
import PageNotFound from './PageNotFound'
import SchoolProgram from './SchoolProgram'
import UploadVideo from './UploadVideo'
import ViewSchoolVideo from './ViewSchoolVideo'
import ViewEvent from './ViewEvent'
import ViewSponsor from './ViewSponsor'

function App() {
  return (
    <BrowserRouter>
        <div className='container'>
            <div className='header'>
                <TopMenuBar/>
            </div>
            <div className='main-body'>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Services' element={<Services/>}/>
                    <Route path='/HomeVideos' element={<HomeVideos/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route  path='/SchoolSidebar' element={<SchoolSidebar/>}>  
                        <Route path='EditEvent' element={<EditEvent/>}/>  
                        <Route path='CreateEvent' element={<CreateEvent/>}/>                      
                        <Route path='DeleteStudent' element={<DeleteStudent/>}/> 
                        <Route path='SchoolProgram' element={<SchoolProgram/>}/>
                        <Route path='ViewSchoolInfo' element={<ViewSchoolInfo/>}/>
                        <Route path='EditSchoolInfo' element={<EditSchoolInfo/>}/>
                        <Route path='RegisterStudent' element={<RegisterStudent/>}/>
                        <Route path='EditStudent' element={<EditStudent/>}/>
                        <Route path='ViewStudent' element={<ViewStudent/>}/>
                        <Route path='UploadVideo' element={<UploadVideo/>}/>
                        <Route path='ViewSchoolVideo' element={<ViewSchoolVideo/>}/>
                        <Route path='ViewEvent' element={<ViewEvent/>}/>
                        <Route path='ViewSponsor' element={<ViewSponsor/>}/>
                    </Route>
                    <Route path='/Login' element={<Login/>}></Route>
                    <Route path='*' element={<PageNotFound/>}></Route>
                </Routes>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    </BrowserRouter>
  )
}

export default App