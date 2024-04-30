import React from "react";
import "./AboutPic.css";

import {  Link } from "react-router-dom";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap";

const AboutPic = () => {
  return (
    <div>
      <div className="card_container">
        <div className="card_box">
          <div className="card">
            <img src="/images/m1.png" class="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Electric Motors</h5>
              <Link to = '/products' className="btn btn-primary">
                Read More
                </Link> 
            </div>
          </div>
        </div>

        <div className="card_box">
          <div className="card">
            <img src="/images/t4.png" class="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Electric Transformer</h5>
              <Link to = '/products' className="btn btn-primary">
                Read More
                </Link> 
            </div>
          </div>
        </div>

        <div className="card_box">
          <div className="card">
            <img src="/images/vcb1.png" class="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Vaccum Circuit Braker</h5>
              <Link to = '/products' className="btn btn-primary">
                Read More
                </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPic;
