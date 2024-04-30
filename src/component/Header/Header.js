import React, { useState } from "react";
import "./Header.css";
import { GoSidebarExpand } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";



  const Header = () => {
    // Now Here we use React Hooks
    const [menuOpened, setmenuOpened] = useState(false);
    // const HeaderShadow = useHeaderShadow();
    
    const getMenuStyles = (menuOpened) => {
      if (document.documentElement.clientWidth <= 640) {
        // console.log("outside of sidebar reached")
        return { right: !menuOpened && "-100%" };
      }
    };
  return (
<>
    <div className="cnt_dtl"> 
        <div className="mail"> <CiMail className="mail-icon" /> pkgoyal@gkmpower.com </div>
        <div className="greet">Welcome to GKM Power Project PVT LTD. </div>
        <div className="phn"> <IoIosCall className="phn-icon" /> +91 9811080335 </div>
     </div>

    <div className="wrapper">
      <div className="logo">
        <img src="images/logo.png" alt=""/>
      </div>
      <div className="list">
        <ul
          style={getMenuStyles(menuOpened)}
          className="menu"
          >
          <li> <Link to = "/"> HOME </Link> </li>
          <li>  <Link to ="/about"> ABOUT US </Link> </li>
          <li> <Link to ="/products"> PRODUCTS </Link></li>
          <li> <Link to="/contact"> CONTACT US </Link> </li>
         </ul>
         <div    
            className="menuIcon"
            onClick={() => setmenuOpened((prev) => !prev)}
          >
            <GoSidebarExpand size={30} /> 
          </div>
      </div>
    </div>
    </>
  );
};

export default Header;
