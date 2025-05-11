import React from "react";
import img from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-full" style={{backgroundImage:`url(${img})`}}>
      <div className="navbar-start">

      </div>
      <a className="btn btn-ghost text-xl navbar-center text-white"><img className="w-16 h-16" src={logo}></img>Emporium exprsseo</a>
      <div className="navbar-end">

      </div>
    </div>
  );
};

export default Navbar;
