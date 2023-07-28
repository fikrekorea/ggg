import React from 'react'
/*import i2 from '../images/i2.png';*/
/*import logicon from '../images/logicon.png';

/*import Loginlinks from './Loginlinks';*/
/*import Home from './Home';*/
/*import '../schoolstyle.css';*/
const RegisterStudent = () => {
  return (
    <section className='section'>
        <h2>Student Registration Form</h2>
     <div className='twoform'>
        <div>
 <form className="form1" action="">

 <input type="text" name="pw" className="box" placeholder="Enter Student ID"/>
  <input type="text" name="un" className="box" placeholder="Enter Student First Name"/>
  <input type="text" name="un" className="box" placeholder="Enter Student Last Name"/>
 
  <select className='box'>
    <option>
        Select Student Grade Level (1-12,College,University)
    </option>
    
  </select>
  <input type="date" name="un" className="box" placeholder="Enter Student Date of Birth"/>
  
  </form>
  </div>


<div>
  <form className='form2' action=''>
    <select className='box'>
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
  <select className='box'>
    <option>
       Process Payment
    </option>    
  </select>
  <input type="text" name="pw" class="box" placeholder="Enter Username"/>
  <input type="password" name="pw" class="box" placeholder="Enter Password"/>
  <input type="password" name="pw" class="box" placeholder="Confirm Password"/>
  
  <input type="submit" value="Register Student" id="submit" /> <div className="menu"> 
    
        
  </div> 
</form>
</div>
</div>
</section>
  )
}

export default RegisterStudent