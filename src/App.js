import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Head.jsx";
import Home from "./components/Home.jsx";
import NavList from "./components/Nav_List.jsx";
import DataSection from "./components/Data_Section.jsx";
import Footer from "./components/Footer.jsx";
import NavTest from "./components/Nav_test.jsx";


function App() {
  return (

    <Router>

       <Navbar />
       <div className="NavList"> <NavList  /> </div>
       
       {/* <NavTest /> */}

            <div className='app_container'>
              <Home />
           </div>

            <div className="data_section_container">
                <Sidebar />
                <DataSection />
            </div>

        <Routes>
            {/* <Route path="/" element= {<Footer/>} /> */}
        </Routes>

      <Footer />

  </Router>
  );
}

export default App;
