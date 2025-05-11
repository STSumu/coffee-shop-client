import React from 'react';
import Hero from './Hero';
import About from './About';
import FollowUs from './FollowUs';
import Products from './Products';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <About></About>
           <Products></Products>
           <FollowUs></FollowUs> 
        </div>
    );
};

export default Home;