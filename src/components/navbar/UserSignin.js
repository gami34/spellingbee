import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

function UserSignin({ icon, menu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  return (
    <div className="relative inline-flex ml-3">
      <span className="sr-only">Sign in</span>
      <Link to={ROUTES.SIGNIN}>Sign In</Link>
    </div>
  );
}

export default UserSignin;
