import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Transition from "../../utils/Transition";

function UserMenu({ accountName, avatar, role, menu }) {
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
    <div className="relative hidden sm:inline-flex">
      <button ref={trigger} className="inline-flex justify-center items-center group hover:text-yellow-500" aria-haspopup="true" onClick={() => setDropdownOpen(!dropdownOpen)} aria-expanded={dropdownOpen}>
        <span className="w-8 h-8 rounded-full overflow-hidden" width="32" height="32">
          <img className="w-100" src={avatar || "/images/profiles/profile1.png"} alt="User" />
        </span>
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium text-gray-300 group-hover:text-yellow-500">{accountName}</span>
          <svg className="w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-300 group-hover:text-yellow-500" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-12 right-0 min-w-44 bg-green-dark border border-neutral-500 py-1.5 rounded shadow-lg overflow-hidden mt-1 bg-transparent"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
            <div className="font-medium text-gray-300">{accountName}</div>
            <div className="text-xs text-gray-500 italic">{role}</div>
          </div>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <NavLink className="font-medium text-sm text-gray-300 hover:text-yellow-300 flex items-center py-1 px-3" to={item.to} onClick={() => setDropdownOpen(!dropdownOpen)}>
                  {item.displayText}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default UserMenu;
