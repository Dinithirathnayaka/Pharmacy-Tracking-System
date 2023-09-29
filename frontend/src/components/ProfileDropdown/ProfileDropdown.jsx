import React, { useState, useEffect, useRef } from "react";
import DropdownCSS from "./ProfileDropdown.module.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const ProfileDropdown = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { logout } = useLogout();

  const dropdownRef = useRef(null);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const closeProfileDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  const handleLinkClick = (event) => {
    // Prevent the link click event from propagating up to the window
    event.stopPropagation();
    // Close the dropdown after a link is clicked
    closeProfileDropdown();
  };

  const handleLogoutClick = () => {
    logout();
    handleLinkClick();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeProfileDropdown();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={DropdownCSS["NavBarImgContainer"]} ref={dropdownRef}>
      <div className={DropdownCSS["NavBarImgWrapper"]}>
        <img
          src="/assets/images/person/1.jpg"
          alt=""
          className={DropdownCSS["NavBarImg"]}
          onClick={toggleProfileDropdown}
        />
        {isProfileDropdownOpen && (
          <div
            className={`shadow-lg ${DropdownCSS["ProfileDropdown"]}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>
              User Name <br />
              <span>email</span>
            </h3>
            <ul>
              <li>
                <AccountCircleIcon className={DropdownCSS["shareIcon"]} />
                <Link to="editprofile" onClick={handleLinkClick}>
                  Profile
                </Link>
              </li>
              <li>
                <SettingsIcon className={DropdownCSS["shareIcon"]} />
                <Link to="/" onClick={handleLinkClick}>
                  Settings
                </Link>
              </li>
              <li>
                <LogoutIcon className={DropdownCSS["shareIcon"]} />
                <Link to="/" onClick={handleLogoutClick}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
