import React from 'react';
import "../assets/css/nav_test.css"

class NavTest extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="#home">Home</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown 1</button>
          <div className="dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <div className="dropdown">
              <button className="dropbtn">Nested Dropdown 1</button>
              <div className="dropdown-content">
                <a href="#">Subitem 1</a>
                <a href="#">Subitem 2</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Nested Dropdown 2</button>
              <div className="dropdown-content">
                <a href="#">Subitem A</a>
                <a href="#">Subitem B</a>
              </div>
            </div>
          </div>
        </div>
        <a href="#about">About</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown 2</button>
          <div className="dropdown-content">
            <a href="#">Item 3</a>
            <a href="#">Item 4</a>
            <div className="dropdown">
              <button className="dropbtn">Nested Dropdown 3</button>
              <div className="dropdown-content">
                <a href="#">Subitem 3</a>
                <a href="#">Subitem 4</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Nested Dropdown 4</button>
              <div className="dropdown-content">
                <a href="#">Subitem C</a>
                <a href="#">Subitem D</a>
              </div>
            </div>
          </div>
        </div>
        <a href="#services">Services</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown 3</button>
          <div className="dropdown-content">
            <a href="#">Item 5</a>
            <a href="#">Item 6</a>
            <div className="dropdown">
              <button className="dropbtn">Nested Dropdown 5</button>
              <div className="dropdown-content">
                <a href="#">Subitem 5</a>
                <a href="#">Subitem 6</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Nested Dropdown 6</button>
              <div className="dropdown-content">
                <a href="#">Subitem E</a>
                <a href="#">Subitem F</a>
              </div>
            </div>
          </div>
        </div>
        <a href="#portfolio">Portfolio</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown 4</button>
          <div className="dropdown-content">
            <a href="#">Item 7</a>
            <a href="#">Item 8</a>
            <div className="dropdown">
              <button className="dropbtn">Nested Dropdown 7</button>
              <div className="dropdown-content">
                <a href="#">Subitem 7</a>
                <a href="#">Subitem 8</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Nested Dropdown 8</button>
              <div className="dropdown-content">
                <a href="#">Subitem G</a>
                <a href="#">Subitem H</a>
              </div>
            </div>
          </div>
        </div>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default NavTest;
