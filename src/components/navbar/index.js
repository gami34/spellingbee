import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 bg-white border-b border-yellowgreen drop-shadow-lg shadow-yellowgreen z-30 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16 -mb-px">
          {/* nav: Left side */}
          <div className="flex w-6/12 lg:w-3/12 items-center">
            <Link className="w-full flex gap-4 justify-start text-green-dark hover:text-yellowgreen items-center" to={ROUTES.HOME}>
              <img src="/images/cb1.JPEG" className=" h-8 xs:h-10" alt="chess battlefield logo" />
              <span className="font-bold text-lg hover:text-yellowgreen">Spelling Bee</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
