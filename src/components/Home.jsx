import React, { useState} from 'react'
import "../assets/css/home.css"
import images from "../assets/images/index"

const Home = () => {
  return (
   <div className="main_container">
    <div className="data_container ">
      <div className="sir_image">
        <img src={images.sir_image} alt="" />
      </div>

      <div className="data">

        <p className='name data_text'>Dharmender Singh Yadav </p>
        <p className='post data_text'>Assistant Professor</p>
        <div className='phone single_data'>
          <img src= {images.phone} alt="" />
          <p className='phone data_text'>+91 94254-82653</p>
        </div>

        <div className='email single_data'>
          <img src= {images.email} alt="" />
          <p  className='email data_text'>---------@nitkkr.ac.in</p>
        </div>
  
      </div>


    </div>
    
   </div>
  )
}


 
export default Home
