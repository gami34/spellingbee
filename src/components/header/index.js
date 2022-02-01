import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" relative custom-bg h-screen overflow-hidden min-h-80">
      <ul className="flex absolute m-0 bottom-0 right-0 left-0 h-14 sm:h-16 bg-green-dark  shadow-green-dark text-white">
        <li className="w-3/12">
          <Link to="/dashboard/play" className="text-xs xs:text-base xs:hover:text-lg hover:text-yellow-400 hover:bg-green  w-full h-full flex justify-center items-center">
            Chess Class
          </Link>
        </li>
        <li className="w-6/12 border-r border-l border-gray-500">
          <Link to="/dashboard/play" className=" text-lg hover:text-xl sm:text-xl sm:hover:text-2xl hover:text-yellow-400 w-full h-full flex justify-center items-center text-yellow-400 ">
            Play Now
          </Link>
        </li>
        <li className="w-3/12">
          <Link to="/dashboard/play" className=" text-xs xs:text-base xs:hover:text-lg  hover:text-yellow-400   hover:bg-green  w-full h-full flex justify-center items-center">
            Games
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
