import React from 'react';
import "../assets/css/navbar.css"
import images from "../assets/images/index"

const NavBar = () => {
  return (

   <div className="nav">
     <div className="nav_top">
    </div>

    <div className="nav_top2">
        <div className="logo">
            <img src= {images.logo} alt="" />
        </div>

        <div className="dept">
            Department of Electroincs
        </div>
        <div className="college">
            National Institute of Techonology Kurukshetra
        </div>

    </div>

<p className="line_br"></p>

   </div>
  );
};

export default NavBar;
