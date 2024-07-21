import React, { useState } from "react";
import logo from "../../assets/img/header-logo.svg";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);
  
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header">
            <img src={logo} alt="logo-img" />
            <div className="header--menu" onClick={() => setMenu(true)}>
              <IoMdMenu />
            </div>
            <div className="header--logo">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="img-logo"
              />
            </div>
            {menu && (
              <div className="header--mediaNav">
                <div
                  className="header--mediaNav__closebtn"
                  onClick={() => setMenu(false)}
                >
                  <IoCloseSharp />
                </div>
                <NavLink to={"/"} onClick={() => setMenu(false)}>
                  Home
                </NavLink>
                <NavLink to={"/popular"} onClick={() => setMenu(false)}>
                  Popular
                </NavLink>
                <NavLink to={"/topRated"} onClick={() => setMenu(false)}>
                  TopRated
                </NavLink>
              </div>
            )}
            <div className="header--nav">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/popular"}>Popular</NavLink>
              <NavLink to={"/topRated"}>TopRated</NavLink>
            </div>
            <div className="header--search">
              <input type="text" placeholder="search" />
              <img
                src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      {menu && <div className="bg" onClick={() => setMenu(false)}></div>}
    </>
  );
};

export default Header;
