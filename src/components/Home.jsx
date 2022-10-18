import React from "react";
import Profile from "../assets/profile.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Developer{" "}
          </h2>
          <p className="py-4 max-w-md text-gray-400">
            I have a 3 Months experience building and designing software.
            Currently, i love to work on web application using technology like
            React, Tailwind, Git, Firebase.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer capitalize"
            >
              portfolio{" "}
              <span className="group-hover:rotate-90 duration-300 pl-1 pr-0">
                <BsArrowRightShort size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Profile}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full xs:mb-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
