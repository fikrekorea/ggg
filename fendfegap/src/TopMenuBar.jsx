import {Component} from "react";
import { NavLink } from "react-router-dom";
/*import ".Topnavbarstyles.css";*/

import {Link} from 'react-router-dom';
import {TopMenuBarItems} from './TopMenuBarItems'
import Logo from '../images/logc.png';

import { useState } from "react";

class TopMenuBar extends Component{    
    render(){
        return (
            <div className="hero">
                         
            <nav className="cnametopmenubar">
            <div>
            <NavLink className="Home" to="/"><img src={Logo} alt="Logo" className="cnameimglogo" /></NavLink>
             
            </div>
            <div>            
               <ul className="cnameultopmenubar">                
                    {TopMenuBarItems.map((item, index)=>{
                        return (
                           <li key={index}>
                                <NavLink className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</NavLink>
                           </li>                            
                        )
                    })}  
                </ul>
               </div> 
            </nav>
            </div>
        )
    }
}
export default TopMenuBar;