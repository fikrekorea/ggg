import React from 'react'
/*import i2 from '../images/i2.png';
import logicon from '../images/logicon.png';

import Loginlinks from './Loginlinks';
import Home from './Home';
import '../schoolstyle.css';*/
const editevent = () => {
  return (
    <section className='section'>
        <h2>Edit Event Form</h2>
  <form className='form' action=''>
  <input type="text" name="eventnametxt" className="box" placeholder="Enter Event Name"/>
  <input type="date" name="eventdate" className="box" placeholder='date of event'/>
    <select>
    <option> - - Student Project - -  </option>   
    <option value="Agriculture">Agriculture</option>
    <option>Art</option>
    <option>Engineering</option>
    <option>Science</option>
    <option>Technology</option> 
  </select>
 <input type="file"/>
  <input type="submit" value="Upload Video" id="submit" /> <div className="menu"> 
           
  </div> 
</form>

</section>
  )
}

export default editevent