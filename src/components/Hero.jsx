import React from "react";
import bg from "../assets/images/more/3.png";
const Hero = () => {
  return (
      <div
        className="hero min-h-96 lg:min-h-screen justify-end"
        style={{
          backgroundImage:
            `url(${bg})`,
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-neutral-content">
          <div className="w-1/2 ml-60">
            <h1 className="mb-5 text-2xl lg:text-5xl">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5 text-sm">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#E3B577] border-0 shadow-none hover:bg-transparent hover:text-white hover:border hover:border-white">Learn more</button>
          </div>
        </div>
      </div>
  );
};

export default Hero;
