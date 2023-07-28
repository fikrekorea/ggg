import React from 'react'
import SchoolSidebar from './SchoolSidebar'
/*import i2 from '../images/i2.png';
import logicon from '../images/logicon.png';

import Loginlinks from './Loginlinks';
import Home from './Home';
import '../schoolstyle.css';*/
const createevent = () => {
  return (
    <>
    <section className='section'>
        <h2>Event Creation Form</h2>
  <form className='form' action=''>
  <input type="text" name="eventnametxt" className="box" placeholder="Enter Event Name"/>
  <input type="date" name="eventdate" className="box" placeholder='date of event'/>
    <select className='box'>
    <option> - - Student Project - -  </option>   
    <option> Student Entereprise Program </option>
		<option> Technology and Engineering </option>
		<option>Kidpreneuer program </option> 
		<option>Financial literacy program </option>
		<option>Career counseling program </option>
    
  </select>
 <input type="file" className='box'/>
  <input type="submit" value="Upload Video" id="submit" /> <div className="menu"> 
           
  </div> 
</form>

</section>
</>
  )
}

export default createevent