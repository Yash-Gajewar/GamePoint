import React from "react";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


import Packages from "../Packages/Packages";

import Lottie from "lottie-react";

import FingerPointingRight from "../../assets/finger-pointing-right.json";



const Banner = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center py-12 sm:py-0 ">

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div className="bg-primary/10 dark:bg-black dark:text-white duration-200 p-7 flex flex-col justify-center gap-6 sm:pt-0 rounded-md">
            <h1 data-aos="fade-up" className="mt-5 text-3xl sm:text-4xl font-bold text-center justify-center">
              Why Game Point?
            </h1>
            <p
              data-aos="fade-up"
              className="text-m font-bold dark:text-white text-gray-500 tracking-wide leading-5"
            >
              Here at Game Point, Age is just a number. We have a wide range of games and activities. We have a team of professionals who are always ready to help you.
            </p>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4 font-bold text-l">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400" />
                <p>100% Safety Ensured</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 font-bold text-l">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400" />
                <p>No Age Restriction</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 font-bold text-l">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-400" />
                <p>Individual Games</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 font-bold text-l">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-400" />
                <p>Team Building Activites</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-primary">
                Look at our various packages
              </h1>

              <Lottie animationData={FingerPointingRight} data-aos="fade-up" className="w-24 h-24" />
            </div>


          </div>

          <Packages />

        </div>
      </div>
    </div>
  );
};

export default Banner;
