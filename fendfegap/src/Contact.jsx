import React from 'react'
import logicon from '../images/login.jpg';
import '../styles/flexloginstyles.css';
/*import Topnavbar from './Topnavbar';*/
import Madiba from '../images/a31.jpg'
const contact = () => {
  return (
<div>
<h2 className='second'>Contact</h2>
    <section className='section'>
       
   
 <form className="form" action="">
  <input type="text" name="un" className="box" placeholder="Enter your First Name"/>
  <input type="email" name="pw" className="box" placeholder="Enter your Email"/>
  <textarea className='box' placeholder='Enter your Comment'>

  </textarea>
  <input type="submit" value="Submit" id="submit" /> 
  
</form>
</section>

   
</div>
  )
}

export default contact