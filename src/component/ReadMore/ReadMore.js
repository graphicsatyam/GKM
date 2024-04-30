import React, { useState } from 'react';

function ReadMore() {
  const [showFullText, setShowFullText] = useState(false);
  
  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <p>
        {showFullText ?
          "Dedicated to total customer satisfaction through customer-centric business approach, we, GKM Power Projects Pvt. Ltd. are offering specific quality products at competitive prices. Established in the year 1999, we are known as the foremost trader and supplier of wide range of Industrial Transformers, Totally Enclosed Fan Cooled, TEFC Motor, MMP Capacitors, TEFC SC Motors etc. We procure these from the most reliable vendors who are renowned for their high quality offerings. Our procurement team & other staff have more than 15 years of experience in the business. As one of the prominent companies, we are motivated by our philosophy that guides the actions of each of our team members to leave a positive impact on the society and bring joy to the customers. Our company is led by a dynamic person, Mr. Pankaj Goyal (Director) whose presence inspires us to always put in our best efforts. In his leadership, our company has established business relationship with many reputed companies in India. In collaboration with these companies, we offer power equipment and execute power projects in many parts of the world." :
          "Dedicated to total customer satisfaction through customer-centric business approach, we, GKM Power Projects Pvt. Ltd. are offering specific quality products at competitive prices. Established in the year 1999, we are known as the foremost trader and supplier of wide range of Industrial Transformers, Totally Enclosed Fan Cooled, TEFC Motor, MMP Capacitors, TEFC SC Motors etc. "
        }
      </p>
      <button onClick={toggleReadMore}>
        {showFullText ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMore;
