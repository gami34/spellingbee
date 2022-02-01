import React, { useRef, useState } from "react";
import Transition from "../../utils/Transition";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import Help from "./Help";
import Notifications from "./Notifications";
import SearchModal from "./SearchModal";
import { useSelector } from "react-redux";

import { helpSubsvg0, helpSubsvg1, helpSubsvg2, helpIcon, notificationIcon, searchIcon } from "../svgs";
import UserCard from "./UserCard";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdown = useRef(null);
  const { role, avatar, accountName } = useSelector((state) => state.user);
  const userMenu = [
    { displayText: " Settings", to: "/settings" },
    { displayText: " Feedback", to: "/feedback" },
    { displayText: "Sign Out", to: "/signout" },
  ];
  const helpMenu = [
    { displayText: "Documentation", to: "/documentation", icon: helpSubsvg0 },
    { displayText: "Support Site", to: "/support", icon: helpSubsvg1 },
    { displayText: "Contact us", to: "/contactus", icon: helpSubsvg2 },
  ];

  const notificationMenu = [
    { displayText: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.", to: "#", date: "Feb 12, 2021", type: 0 },
    { displayText: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.", to: "#", date: "Feb 9, 2021", type: 0 },
    { displayText: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.", to: "#", date: "Jan 24, 2020", type: 1 },
  ];
  const searchMenu = [
    { displayText: "Form Builder - 23 hours on-demand video", to: "#", type: 0 },
    { displayText: "Access Mosaic on mobile and TV", to: "#", type: 0 },
    { displayText: "Product Update - Q4 2021", to: "#", type: 0 },
    { displayText: "Master Digital Marketing Strategy course", to: "#", type: 0 },
    { displayText: "Dedicated forms for products", to: "#", type: 0 },
    { displayText: "Product Update - Q4 2021", to: "#", type: 0 },
    { displayText: " - Conversation / … / Mike Mills", to: "#", type: 1 },
    { displayText: " - Conversation / … / Eva Patrick", to: "#", type: 1 },
  ];

  return (
    <nav className=" absolute top-0 left-0 right-0 bg-green-dark border-b border-neutral-500 drop-shadow-lg z-30 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* nav: Left side */}
          <div className="flex w-6/12 lg:w-3/12 items-center">
            <button onBlur={() => setDropdownOpen(false)} className="text-gray-500 hover:text-gray-600 lg:hidden mr-4" aria-controls="sidebar" aria-expanded={dropdownOpen} onClick={() => setDropdownOpen(!dropdownOpen)}>
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current mt-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" fill="#f0f0f0" />
                <rect x="4" y="11" width="16" height="2" fill="#f0f0f0" />
                <rect x="4" y="17" width="16" height="2" fill="#f0f0f0" />
              </svg>
            </button>
            <img src="/images/cb1.png" className=" h-8 xs:h-10" alt="chess battlefield logo" />
          </div>
          <div className="hidden lg:flex w-6/12  justify-center items-center">
            <ul className="flex items-center m-0">
              <li className=" text-white">
                <NavLink className="font-medium text-sm text-white hover:text-yellow-400 flex items-center  mx-3" to="/" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-yellow-400 flex items-center  mx-3" to="/news" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  News
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-yellow-400 flex items-center  mx-3" to="/community" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Community
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-yellow-400 flex items-center  mx-3" to="/contactus" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-yellow-400 flex items-center  mx-3" to="/donate" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
          {/* nav: Right side */}
          <div className="flex items-center w-6/12 lg:w-3/12 justify-end ">
            <SearchModal icon={searchIcon} menu={searchMenu} />
            <Notifications icon={notificationIcon} menu={notificationMenu} />
            <Help icon={helpIcon} menu={helpMenu} />
            {/*  Divider */}
            <hr className="w-px h-6 bg-gray-200 mx-3 hidden sm:inline-flex" />
            <UserMenu avatar={avatar} accountName={accountName} role={role} menu={userMenu} />
          </div>
        </div>
        <Transition
          className="origin-top-right clear-both z-10 absolute top-full left-1 border border-neutral-500  rounded shadow-lg ml-4 sm:ml-6 lg:ml-8 py-1.5 overflow-hidden mt-1 min-w-60 xs:min-w-80  bg-transparent"
          show={dropdownOpen}
          enter="transition ease-out duration-200 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
            <ul className="border-b sm:border-0 border-gray-400">
              <li className="border-b border-gray-400 sm:hidden">
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <UserCard accountName={accountName} role={role} avatar={avatar} />
                </NavLink>
              </li>

              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/news" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  News
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/community" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Community
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/aboutus" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/donate" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Donate
                </NavLink>
              </li>
            </ul>
            <ul className="border-b border-gray-400 sm:hidden">
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/documentation" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Documentation
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/support" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Support Site
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/contactus" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <ul className="sm:hidden">
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/settings" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium text-sm text-white hover:text-gray-400 flex items-center py-1 px-3 w-1/2" to="/signout" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </nav>
  );
}

export default Navbar;
