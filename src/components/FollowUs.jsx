import img1 from '../assets/images/cups/Rectangle 9.png'
import img2 from '../assets/images/cups/Rectangle 10.png'
import img3 from '../assets/images/cups/Rectangle 11.png'
import img4 from '../assets/images/cups/Rectangle 12.png'
import img5 from '../assets/images/cups/Rectangle 13.png'
import img6 from '../assets/images/cups/Rectangle 14.png'
import img7 from '../assets/images/cups/Rectangle 15.png'
import img8 from '../assets/images/cups/Rectangle 16.png'

const FollowUs = () => {
    return (
        <div className='container mx-auto px-4 lg:px-50 my-30 flex flex-col'>
            <div className='text-center'>
                <p className='opacity-50'>Follow us Now</p>
            <h2 className='text-[#331A15] text-shadow-lg text-shadow-[#331A15]/70 text-2xl md:text-4xl my-4'>Follow on Instagram</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4'>
                <img src={img1} alt="" className="w-full" />
                <img src={img2} alt="" className="w-full" />
                <img src={img3} alt="" className="w-full" />
                <img src={img4} alt="" className="w-full" />
                <img src={img5} alt="" className="w-full" />
                <img src={img6} alt="" className="w-full" />
                <img src={img7} alt="" className="w-full" />
                <img src={img8} alt="" className="w-full" />
            </div>
        </div>
    );
};

export default FollowUs;