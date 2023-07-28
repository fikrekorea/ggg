import React from 'react'

import Cutt from './videos/cutt.mp4';

import Mysqll from './videos/mysql.mp4';
const videos = () => {
  return (
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
  )
}

export default videos;
