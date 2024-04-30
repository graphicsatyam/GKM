import React from 'react';
import './Details.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap';

const Details = () => {
  return (
    <div className='cmplt'>
  
    {/* Our Vision and Our Mission  */}

   <div className="scroll">
   <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong> Our Mission : </strong> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong> GKM Power Project Pvt. Ltd. </strong> is to become a leading provider of sustainable and reliable power solutions, catering to the growing energy needs of India. We strive to achieve this by continuously innovating and adopting advanced technologies, while also maintaining a focus on environmental sustainability. Our goal is to positively impact the lives of our customers, stakeholders, and the community at large through our efficient and cost-effective power solutions. We are committed to delivering projects on time and with the utmost quality, while also upholding the highest standards of safety and ethical business practices. Our mission drives us to constantly push the boundaries and set new benchmarks in the power industry, making us a trusted and preferred partner for all energy needs.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Our Vision :</strong> 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      For <strong> GKM Power Project Pvt. Ltd. </strong> is to become a global leader in the power industry by providing sustainable and innovative solutions. We aim to utilize cutting-edge technology and expertise to deliver reliable and efficient power solutions to our clients. Our focus is on developing clean and renewable sources of energy to reduce our carbon footprint and contribute towards a greener planet. We also strive to create a positive impact on the communities we operate in, by providing employment opportunities and supporting social welfare initiatives. Through our dedication to excellence and commitment to sustainability, we envision GKM Power Project pvt ltd to be a renowned name in the power sector, making a significant contribution towards the energy needs of the world.
      </div>
    </div>
  </div>
  
  
</div>
   </div>




    </div>
  )
}

export default Details
