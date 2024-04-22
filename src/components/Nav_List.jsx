import React from 'react';
import "../assets/css/navList.css"
import images from "../assets/images/index"


const NavList = () => {
  return (

   <div className="nav_List_top">
   
   <ul>
        <li><a href="#">About Us <img src= {images.down_arrow} className = " down_arrow_image" alt="" /></a>
            <ul className='submenu'>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
            </ul>
          </li>
        <li><a href="#">Announcements
           <img src= {images.down_arrow} className = " down_arrow_image" alt="" />
        </a>
            <ul className='submenu'>
              <li><a href="#">a</a></li>
              <li><a href="#">b</a></li>
              <li><a href="#">c</a></li>
            </ul>
        </li>


        <li><a href="#">Academics
          <img src= {images.down_arrow} className = " down_arrow_image" alt="" />
        </a>
            <ul className='submenu'>
              <li><a href="#">A</a></li>
              <li><a href="#">B</a></li>
              <li><a href="#">C-</a></li>
            </ul>
        </li>

        <li><a href="#">People</a></li>
        <li><a href="#">Activities</a></li>
        <li><a href="#">Highlights</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">Miscellaneous</a></li>
      </ul>


   </div>
  );
};

export default NavList;
