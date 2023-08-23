import React, { useState, useEffect, useRef } from "react";
import DropdownCSS from "./ProfileDropdown.module.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

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
            className={DropdownCSS["ProfileDropdown"]}
            onClick={(e) => e.stopPropagation()}
          >
            <Link to="editprofile" onClick={handleLinkClick}>
              Profile
            </Link>
            <Link to="/" onClick={handleLinkClick}>
              Settings
            </Link>
            <Link to="/" onClick={handleLogoutClick}>
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
