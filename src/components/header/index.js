import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Header = () => {
  return (
    <div className=" min-h-screen overflow-hidden box-border">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-full sm:w-6/12 pt-16 px-4">
          <span className="w-6/12">
            <img className="w-full" src="/images/cb1.JPEG" alt="" />
          </span>
        </div>
      </div>
      <h3 className="text-center text-xl font-bold my-0 py-0">
        REGISTER FOR 2022
        <br />
        SPELLING BEE COMPETITION
      </h3>
      <p className="text-xs text-gray-800 mx-4 text-justify">
        The Spelling Bee is a competition designed to inculcate the basic imperatives of effective communication, ultimately impacting improved spelling skills, development of poise, increase students’ vocabulary, pronunciation and accurate word
        usage.
      </p>
      <p className="text-xs text-gray-800 mx-4 text-justify">
        The programme emphasizes the importance of communication because being erudite begins with communication, and communication entails the transaction of ideas, using words and symbols as a fundamental platform.
      </p>
      <h6></h6>
      <p className="text-xs text-gray-800 mx-4 text-justify">
        <span className="font-bold">The awards are Trophy, Medals, Scholarship funds and the top 3 winners in each of the junior and senior category.</span> The awards are Trophy, Medals, Scholarship funds and the top 3 winners in each of the junior
        and senior category at the national final will represent Nigeria at the Intercontinental Spelling Bee Competition ICSB in Dubai. The Spelling Bee mission is promoting literacy and developing communication skills in our future leaders at the
        early stages of their life!
      </p>
      <div className="flex justify-center items-center gap-4 px-4">
        <Link to={ROUTES.INDIVIDUAL_REG} className="text-center text-gray-700 border border-gray-500 text-xl p-2 sm:p-4 hover:text-yellowgreen font-semibold">
          INDIVIDUAL REGISTRATION
        </Link>
        <Link to={ROUTES.MULTIPLE_REG} className="text-center text-gray-700 border border-gray-500 text-xl p-2 sm:p-4 hover:text-yellowgreen font-semibold">
          MULTIPLE REGISTRATION
        </Link>
      </div>
    </div>
  );
};

export default Header;
