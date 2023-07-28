import React from 'react'
{/*import i2 from '../images/i2.png';
import logicon from '../images/logicon.png';

import Loginlinks from './Loginlinks';
import Home from './Home';
import '../schoolstyle.css';
*/}
const uploadvideo = () => {
  return (
    <section className='section'>
        <h2>Upload Video Page</h2>
  <form className='form' action=''>
  <select>
  <option> - - Student Project - - </option>   
    <option> Agricultural Engineers </option>
    <option> Art </option> 
    <option> Aerospace Engineers(k-12) </option>
    <option> Biomedical Engineers(K-12) </option>    
    <option> Chemical and Biological Engineers </option>
    <option> Civil Engineering </option>        
    <option> Electrical Engineers </option>    
    <option> Engineering </option> 
    <option> Environmental Engineering </option>    
    <option> Financial Literacy </option>
    <option> Mechanical Engineers </option>    
    <option> Student Entereprise Program </option>
    <option> Software Engineers </option>
  </select>
 <input type="file"/>
  <input type="submit" value="Upload Video" id="submit" /> <div className="menu"> 
           
  </div> 
</form>

</section>
  )
}

export default uploadvideo