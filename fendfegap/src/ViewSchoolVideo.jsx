import React from 'react'

import Cutt from '../videos/cutt.mp4';

import Mysqll from '../videos/mysql.mp4';
//import Topnavbar from './Topnavbar';
const viewvideo = () => {
  return (
    <div>
   <h2>View Videos Page</h2>  
    <div>        
        <video width="250" height="300" controls>
            <source src={Mysqll} type="video/mp4"/>
        </video>
        &nbsp;&nbsp;&nbsp;
        
        <video width="250" height="300" controls>
            <source src={Cutt} type="video/mp4"/>
        </video>
        &nbsp;&nbsp;&nbsp;
        <video width="250" height="300" controls>
            <source src={Mysqll} type="video/mp4"/>
        </video>
        &nbsp;&nbsp;&nbsp;
        <video width="250" height="300" controls>
            <source src={Cutt} type="video/mp4"/>
        </video>
    </div>
    </div>
  )
 
}

export default viewvideo;
