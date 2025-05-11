import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import img from '../assets/images/404/404.gif'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className='container mx-auto flex flex-col justify-center items-center px-4 lg:px-40 py-10'>
                <Link to="/">
        <h3 className="flex items-center text-[#374151] text-shadow-lg text-shadow-[#374151]/50">
          <FaArrowLeft></FaArrowLeft>Back to Home
        </h3>
      </Link>
                <img className='object-contain w-full' src={img} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;