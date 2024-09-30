import React from "react";
import { FaStar } from "react-icons/fa6";


import Shooting from "../../assets/shooting.jpg"
import Team from "../../assets/team-building.jpg"
import Rope from "../../assets/rope_ladder.jpg"
import Rain from "../../assets/rain-dance.jpg"
import Swimming from "../../assets/swimming.jpg"



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
];

const Activites = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-5xl font-bold text-primary">
            Available Activites
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ActivitesData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 mt-5"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[300px] w-[200px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.type}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activites;
