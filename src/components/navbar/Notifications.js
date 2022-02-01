import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../utils/Transition";

function Notifications({ icon, menu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) {
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
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ${dropdownOpen && "bg-gray-200"}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        {icon()}
        {menu.length ? <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div> : <span></span>}
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-12 right-0 w-60 xs:min-w-80  bg-green-dark border border-neutral-500 py-1.5 rounded shadow-lg overflow-hidden mt-1 bg-transparent"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
          <div className="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4">Notifications</div>
          {menu.length ? (
            <ul>
              {/* eslint-disable-next-line array-callback-return */}
              {menu.map((item, index) => {
                switch (item.type) {
                  case 0:
                    return (
                      <li className="border-b border-gray-200 last:border-0">
                        <Link className="block py-2 px-4 hover:bg-green-dark hover:opacity-50 hover:text-white" to={item.to} onClick={() => setDropdownOpen(!dropdownOpen)}>
                          <span className="block text-sm mb-2">
                            📣 <span className="font-medium text-gray-400 ">Edit your information in a swipe</span> {item.displayText}
                          </span>
                          <span className="block text-xs font-medium text-gray-400">{item.date}</span>
                        </Link>
                      </li>
                    );
                  case 1:
                    return (
                      <li key={index} className="border-b border-gray-200 last:border-0">
                        <Link className="block py-2 px-4 hover:bg-green-dark hover:opacity-40 hover:text-white" to={item.to} onClick={() => setDropdownOpen(!dropdownOpen)}>
                          <span className="block text-sm mb-2">
                            🚀
                            <span className="font-medium text-gray-400">Say goodbye to paper receipts!</span> {item.displayText}
                          </span>
                          <span className="block text-xs font-medium text-gray-400">{item.date}</span>
                        </Link>
                      </li>
                    );
                  default:
                    break;
                }
              })}
            </ul>
          ) : (
            <div className="text-xs text-gray-400 pt-1.5 pb-2 px-4">You have no nofication</div>
          )}
        </div>
      </Transition>
    </div>
  );
}

export default Notifications;
