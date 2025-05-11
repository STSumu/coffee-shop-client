import React from 'react';
import img1 from '../assets/images/icons/1.png'
import img2 from '../assets/images/icons/2.png'
import img3 from '../assets/images/icons/3.png'
import img4 from '../assets/images/icons/4.png'
const About = () => {
    return (
        <div className='bg-[#ECEAE3] py-14'>
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-4 md:px-10 lg:px-50 text-[#331A15]'>
                 <div >
                    <img src={img1} alt="" />
                    <h4 className='text-3xl my-2'>Awesome Aroma</h4>
                    <p className='text-xs'>You will definitely be a fan of the design & aroma of your coffee</p>
                 </div>
                 <div >
                    <img src={img2} alt="" />
                    <h4 className='text-3xl my-2'>High Quality</h4>
                    <p className='text-xs'>We served the coffee to you maintaining the best quality</p>
                 </div>
                 <div >
                    <img src={img3} alt="" />
                    <h4 className='text-3xl my-2'>Pure Grades</h4>
                    <p className='text-xs'>The coffee is made of the green coffee beans which you will love</p>
                 </div>
                 <div >
                    <img src={img4} alt="" />
                    <h4 className='text-3xl my-2'>Proper Roasting</h4>
                    <p className='text-xs'>Your coffee is brewed by first roasting the green coffee beanse</p>
                 </div>
            </div>
        </div>
    );
};

export default About;