import React from 'react'
import Madiba from '../images/a31.jpg'
const About = () => {
  return (
    <div>
     <h2 className='second'>About</h2>
    <h2 className='third'>
    We are knowledge and technology-based company established to serve humanity by: 
       
    </h2>
      <ul>
    <div className='cnamedivtestimonial'>
      <li className='cnameaboutcontent'>
      <div>
        <h3>Empowering the school to have students entrepreneurial mindset domains: opportunity recognition; creativity and innovation; risk and uncertainty management; critical thinking and problem-solving; communication and collaboration; and future orientation.</h3>
      </div>
      </li>
      <li className='cnameaboutcontent'>
      <div>
      <h3>Development of necessary knowledge for being effective in start-up , scale up and establish  value-based company program.</h3>
      </div>
      </li>
      <li className='cnameaboutcontent'>
      <div>
      <h3>Provides technology that makes faster, more efficient and reliable communication with customers and partners.</h3>
      </div>
      </li>
    </div>
    </ul>
   {/* <img src={Madiba} alt='madiba'/> */}
    </div>
  )
}

export default About