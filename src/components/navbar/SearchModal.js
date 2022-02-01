import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../utils/Transition.js";

function SearchModal({ icon, menu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const searchContent = useRef(null);
  const searchInput = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || searchContent.current.contains(target) || trigger.current.contains(target)) {
        return;
      }
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex ml-3">
      {/* Button */}
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ml-3 ${dropdownOpen && "bg-gray-200"}`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-controls="search-modal"
      >
        <span className="sr-only">Search</span>
        {icon()}
      </button>
      <Transition
        className="origin-top-right z-10 absolute right-0 top-12 min-w-60 xs:min-w-80  -mr-10 xs:-mr-0 bg-green-dark border border-neutral-500 py-1.5 rounded shadow-lg overflow-hidden mt-1 bg-transparent"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div className=" overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg" ref={searchContent}>
          {/* Search form */}
          <form className="border-b border-gray-200">
            <div className="relative">
              <label htmlFor="modal-search" className="sr-only">
                Search
              </label>
              <input
                id="modal-search"
                className="w-full border-0 focus:border-0  focus:bg-transparent placeholder-gray-400 appearance-none py-3 pl-10 pr-4 bg-transparent text-gray-200"
                type="search"
                placeholder="Search Anything…"
                ref={searchInput}
                autoComplete="off"
              />
              <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg className="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </div>
          </form>
          <div className="py-4 px-2" onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
            {/* Recent searches */}
            <div className="mb-3 last:mb-0">
              <div className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">Recent searches</div>
              <ul className="text-sm">
                {menu
                  .filter((item) => item.type === 0)
                  .map((item, index) => (
                    <li key={index}>
                      <Link className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group" to={item.to} onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3" viewBox="0 0 16 16">
                          <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                        </svg>
                        <span>{item.displayText}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            {/* Recent pages */}
            <div className="mb-3 last:mb-0">
              <div className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">Recent pages</div>
              <ul className="text-sm">
                {menu
                  .filter((item) => item.type === 1)
                  .map((item, index) => (
                    <li key={index}>
                      <Link className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-green-dark rounded group" to={item.to} onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3" viewBox="0 0 16 16">
                          <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                        </svg>
                        <span>
                          <span className="font-medium text-gray-800 group-hover:text-white">Messages</span>
                          {item.displayText}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default SearchModal;
