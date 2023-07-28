import React from 'react'
/*import i2 from '../images/i2.png';*/
/*import logicon from '../images/logicon.png';

/*import Loginlinks from './Loginlinks';*/
/*import Home from './Home';*/
/*import '../schoolstyle.css';*/
const EditStudent = () => {
  return (
    <section className='section'>
        <h2>Edit Student Information</h2>
     <div className='twoform'>
        <div>
 <form className="form1" action="">

 <input type="text" name="pw" className="box" placeholder="Enter Student ID"/>
  <input type="text" name="un" className="box" placeholder="Enter Student First Name"/>
  <input type="text" name="un" className="box" placeholder="Enter Student Last Name"/>
 
  <select className='box'>
    <option>- - Student Grade Level - - </option>
    <option> Nursery  </option>
    <option>  Grade 1  </option>
    <option> Grade 2  </option>
    <option>  Grade 3  </option>
    <option>  Grade 4  </option>
    <option> Grade 5  </option>
    <option> Grade 6 </option>
    <option> Grade 7 </option>
    <option>  Grade 8  </option>
    <option> Grade 9 </option>
    <option> Grade 10  </option>
    <option>Grade 11 </option>
    <option>Grade 12  </option>
    <option>College or University </option>
  </select>
  <input type="date" name="un" className="box" placeholder="Enter Student Date of Birth"/>
  
  </form>
  </div>


<div>
  <form className='form2' action=''>
    <select className='box'>
    <option> - - Student Project - - </option>   
    <option>  Agriculture</option> 
    <option> Art</option> 
    <option> Engineering</option> 
    <option> Aerospace Engineers(k-12)</option>
<option>Biomedical Engineers(K-12)</option>
<option>Civil Engineering</option>
<option>Environmental Engineering</option>
<option>Chemical and Biological Engineers</option>
<option>Mechanical Engineers</option>
<option>Agricultural Engineers</option>
<option>Electrical Engineers</option>
<option>Software Engineers</option>

<option>Financial Literacy</option>
<option>Student Entereprise Program</option>
  </select>
  <select className='box'>
    <option>
       Process Payment
    </option>    
  </select>
  <input type="text" name="pw" className="box" placeholder="Enter Username"/>
  <input type="password" name="pw" className="box" placeholder="Enter Password"/>
  <input type="password" name="pw" className="box" placeholder="Confirm Password"/>
  
  <input type="submit" value="Register Student" id="submit" /> <div className="menu"> 
    
        
  </div> 
</form>
</div>
</div>
</section>
  )
}

export default EditStudent