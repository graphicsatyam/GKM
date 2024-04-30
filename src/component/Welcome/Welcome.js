import React from "react";
import "./Welcome.css";
import ReadMore from "../ReadMore/ReadMore";
import {  Link } from "react-router-dom";

import Details from '../Details/Details';

const Welcome = () => {
  return (

    
    <div className="decorate">
      <div className="conatiner">
        <div className="left_part">
          <div className="tital"> 
            <h1> WELCOME TO OUR COMPANY </h1>
          </div>
         <ReadMore/>
         
</div>
          <div className="right_part" />
          {/* <div className="iimage">
            <img src="/images/img1.jpg" alt="" />
          </div>
         */}
      </div>

      <Details />
    </div>
  );
};

export default Welcome;
