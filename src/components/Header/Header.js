import React from "react";
import "./Header.css";
import logo from "../../logo.png";

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='' />
      <nav>
        <a href='/catagory'>Explore Catagory</a>
        <a href='/review'>Your Courses</a>
        <div className='search'>
          <input type='text' placeholder='Search courses . . .' />
          <button type='submit' className='btn btn-primary'>
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
