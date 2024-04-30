import React from 'react';
import './Gallery.css';

const Animation = () => {
  return (
    <div>
    <div className="heading">
        PRODUCTS GALLERY
    </div>
        <div class="logos">
      <div class="logos-slide">
            <div className="box_wrap">
                <div className="item">
                <img src="images/pg1.jpg" alt='' />
                </div>
                <div className="text_name">
                ABB Electric Motor
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/pg2.jpg" alt='' />
                </div>
                <div className="text_name">
                Jyoti VHS Motor 
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/pg3.jpg" alt='' />
                </div>
                <div className="text_name">
                Kirloskar Monoblock Pump
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/pg4.jpg" alt='' />
                </div>
                <div className="text_name">
                PBL Gear Box

                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/pg5.jpg" alt='' />
                </div>
                <div className="text_name">
                Kirloskar DC Motor 

                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/pg6.jpg" alt='' />
                </div>
                <div className="text_name">
                Electric Transformer
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/pg7.jpg" alt='' />
                </div>
                <div className="text_name">
                Vacuum Circuit Breaker 
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/pg8.jpg" alt='' />
                </div>
                <div className="text_name">
                Ring Main Unit
                </div>
            </div>
            
      </div>
    </div>
    </div>
  )
}

export default Animation