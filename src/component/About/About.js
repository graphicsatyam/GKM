import React from 'react';
import './About.css';
import Certificate from '../Cerificate/Certificate';
// import Details from '../Details/Details';
import AboutNew from '../AboutNew/AboutNew';
import Introduction from '../Introduction/Introduction';


const About = () => {
  return (

    <div className='cover'>
       <div className="paragraph"> 
       Our range includes various brands like ABB, CROMPTON, SIEMENS, KIRLOSKAR with 100% quality tested Electric AC Motors, Industrial Power Cables, Transformers, Vaccum Circuit Braker and many more... <br></br>

        </div>

        <div className="all-img">
          <img src="images/p1.jpg" alt="" />
          <img src="images/p2.jpg" alt="" />
          <img src="images/p3.jpg" alt="" />
        </div> <br></br>

        <Introduction/>
        <AboutNew/>
        <Certificate/>
        {/* <Details /> */}
        

       
        
        
    </div>    
    
  )
}

export default About;
