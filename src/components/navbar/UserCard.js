import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Transition from "../../utils/Transition";

function UserCard({ accountName, avatar, role }) {
  return (
    <div className=" flex items-center pb-2">
      <span className="w-8 h-8 rounded-full overflow-hidden" width="32" height="32">
        <img className="w-100" src={avatar || "/images/profiles/profile1.png"} alt="User" />
      </span>
      <div className=" px-3 ">
        <div className="font-medium text-gray-300">{accountName}</div>
        <div className="text-xs text-gray-500 italic">{role}</div>
      </div>
    </div>
  );
}

export default UserCard;
