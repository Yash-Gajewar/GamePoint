import React from "react";
import { FaStar } from "react-icons/fa";
import Corporate from "../../assets/corporate.jpg"
import Family from "../../assets/family.jpg"
import School from "../../assets/school.jpg"
import Vacation from "../../assets/vacation.jpg"
import Tent from "../../assets/tent.jpg"
import Weekend from "../../assets/weekend.jpg"

const PackagesData = [
  {
    id: 1,
    img: Corporate,
    link: "/corporate",
    title: "Corporate",
    description:
      "Take your collegaus out of their cubicles.",

  },
  {
    id: 2,
    img: Family,
    link: "/family",
    title: "Family",
    description:
      "Haven Fun with your Family and Friends.",
  },
  {
    id: 3,
    img: School,
    link: "/school",
    title: "School",
    description:
      "Designed for Kids and Teens.",
  },

  {
    id: 4,
    img: Tent,
    link: "/stayaway",
    title: "Stay Away",
    description:
      "Stay more than a day.",

  },


  {
    id: 5,
    img: Vacation,
    link: "/vacation",
    title: "Vacation Time",
    description:
      "Enjoy Your Vacation with Us.",
  },


  {
    id: 6,
    img: Weekend,
    link: "/weekend",
    title: "Long Weekend",
    description:
      "Spend Your Long Weekend with Us.",
  }


];


const Packages = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="flex justify-center items-center text-left"></div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {PackagesData.map((data) => (
            <div
              data-aos="zoom-in"
              className="mt-24 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              onClick={() => window.location.replace(data.link)}
            >
              {/* image section */}
              <div className="h-[50px] w-[250]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500 dark:text-white" />
                  <FaStar className="text-yellow-500 dark:text-white" />
                  <FaStar className="text-yellow-500 dark:text-white" />
                  <FaStar className="text-yellow-500 dark:text-white" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
