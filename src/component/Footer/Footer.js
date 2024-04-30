import React from 'react';
import './Footer.css';
import { MdLocationPin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className='footer'>
     <div className="conatiner">
          <div className="left"> 
              <div className="tital"> Contact Details :</div>
              <div className="para"> <MdLocationPin className='loc-icon' />  1st Floor, 47 Shardnand Marg Near Ajmeri Gate,Delhi - 110006, India    </div>
              <div className="director">
              <CgProfile className='dir-icon'/> Director : Pankaj Kumar Goyal </div>
              <div className="tital">
              GKM Power Projects Pvt Ltd.
              </div>
          </div>
          <div className="right"> 
            <div className="tital"> Quick Links : </div>
            <div className="link">
              <ul>
                <li> <Link to='/'> Home Page </Link></li>
                <li> <Link to = '/about'> About Us </Link> </li>
                <li> <Link to = '/products'> Product </Link> </li>
                <li> <Link to = '/contact'> Contact Us </Link></li>
              </ul>
            </div>
          </div>
        </div>

      

    </div>
  );
}

export default Footer;
