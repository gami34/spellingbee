import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Header = () => {
  return (
    <div className=" min-h-screen overflow-hidden box-border">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-full sm:w-6/12 pt-16 px-4">
          <span className="w-6/12">
            <img className="w-10/12" src="/images/cb2.JPEG" alt="" />
          </span>
          <span className="w-6/12">
            <img className="w-full" src="/images/cb1.JPEG" alt="" />
          </span>
        </div>
      </div>
      <h3 className="text-center text-xl font-bold my-0 py-0">
        REGISTER FOR 2022
        <br />
        NAPPS SPELLING BEE COMPETITION
      </h3>
      <p className="text-xs text-gray-800 mx-4 text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt dignissimos minima molestiae asperiores error. Beatae, velit voluptatibus natus quidem ducimus a exercitationem harum eligendi quos sit expedita hic repudiandae? Nesciunt
        commodi dolorum, perspiciatis quos ipsam nemo? Enim natus sed delectus modi aperiam ullam impedit, quod laborum, quia, nisi cumque fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi perspiciatis vel ullam velit voluptatibus
        voluptates cumque libero aperiam doloribus,
      </p>
      <h6></h6>
      <p className="text-xs text-gray-800 mx-4 text-justify">
        <span className="font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
        <br /> Incidunt dignissimos minima molestiae asperiores error. Beatae, velit voluptatibus natus quidem ducimus a exercitationem harum eligendi quos sit expedita hic repudiandae? Nesciunt commodi dolorum, perspiciatis quos ipsam nemo?
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
