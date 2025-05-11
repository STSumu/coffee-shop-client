import React from "react";
import img from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-full" style={{backgroundImage:`url(${img})`}}>
      <div className="navbar-start">
          <Link to='/users'><button className="btn">Users</button></Link>
      </div>
      <a className="btn btn-ghost text-xl navbar-center text-white"><img className="w-16 h-16" src={logo}></img>Emporium exprsseo</a>
      <div className="navbar-end">
          <Link to='/auth/signIn'><button className="btn">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
