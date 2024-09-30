import React from 'react'


import Shooting from "../../assets/shooting.jpg"
import Team from "../../assets/team-building.jpg"
import Rope from "../../assets/rope_ladder.jpg"
import Rain from "../../assets/rain-dance.jpg"
import Swimming from "../../assets/swimming.jpg"
import RopeClimbing from "../../assets/rope-climbing.jpg"


import Banner from "../../assets/website/orange-pattern.jpg";


import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";



const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};


const ActivitesData = [
    {
        id: 1,
        img: Shooting,
        title: "Target Shooting",
        rating: 5.0,
        type: "Individual",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Team,
        title: "Rope Pulling",
        rating: 4.5,
        type: "Team",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Rope,
        title: "Rope Ladder",
        rating: 4.7,
        type: "Individual/Team",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Rain,
        title: "Rain Dance",
        rating: 4.4,
        type: "Individual",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Swimming,
        title: "Swimming Pool",
        rating: 4.5,
        type: "Individual",
        aosDelay: "800",
    },

    {
        id: 6,
        img: RopeClimbing,
        title: "Rope Climbing",
        rating: 4.5,
        type: "Individual",
        aosDelay: "1000",
    },

];





const Corporate = () => {
    return (
        <div>
            <div
                data-aos="zoom-in"
                className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
                style={BannerImg}
            >
                <div className="container backdrop-blur-sm py-10">
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
                            Activities For Coporate
                        </h1>
                    </div>
                </div>
            </div>

            {/* <Packages/> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">

                {ActivitesData.map((data) => (
                    <div data-aos="zoom-in" className='mb-16'>
                        <img
                            src={data.img}
                            alt=""
                            className="max-w-[350px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                        />
                    </div>
                ))}

            </div>


            <div
                data-aos="zoom-in"
                className="bg-gray-100 dark:bg-gray-800 text-white "
                style={BannerImg}
            >
                <div className="container backdrop-blur-sm py-10">
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-bold">
                            Corporate Plan Includes
                        </h1>

                    </div>



                </div>
            </div>


            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 grid-rows-4 place-items-center gap-7">

                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400" />
                    <p className='text-xl font-semi-bold'>Quality Products</p>
                </div>
                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400" />
                    <p className='text-xl font-semi-bold'>Fast Delivery</p>
                </div>
                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-400" />
                    <p className='text-xl font-semi-bold'>Easy Payment method</p>
                </div>
                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-400" />
                    <p className='text-xl font-semi-bold'>Get Offers</p>
                </div>

                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400" />
                    <p className='text-xl font-semi-bold'>Quality Products</p>
                </div>
                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400" />
                    <p className='text-xl font-semi-bold'>Fast Delivery</p>
                </div>
                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-400" />
                    <p className='text-xl font-semi-bold'>Easy Payment method</p>
                </div>
                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-400" />
                    <p className='text-xl font-semi-bold'>Get Offers</p>
                </div>

                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400" />
                    <p className='text-xl font-semi-bold'>Quality Products</p>
                </div>
                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400" />
                    <p className='text-xl font-semi-bold'>Fast Delivery</p>
                </div>
                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-400" />
                    <p className='text-xl font-semi-bold'>Easy Payment method</p>
                </div>
                <div data-aos="fade-up" className="flex justify-start items-start gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-400" />
                    <p className='text-xl font-semi-bold'>Get Offers</p>
                </div>


                <div className="col-span-1 row-span-1 md:col-span-4 md:row-span-5 place-self-center">
                    <button
                        className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white text-xl py-2 px-4 rounded-md"
                    >
                        Book Now
                    </button>
                </div>

            </div>




        </div>
    )
}

export default Corporate