import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "../NavLinks";
import { Hamburger } from "../../icons";
import { NavActionsData } from "../../data/navbar";
import NavBrand from "../NavBrand";
const Navbar = ({ setSideBarOpen }) => {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-20 bg-white shadow-lg">
      <div className=" px-2 sm:px-3 md:px-4 py-3 lg:px-7 xl:px-12 flex items-center justify-between ">
        <div className="flex space-x-4 md:space-x-0 items-center font-krona">
          <div
            className="open block md:hidden hover:rotate-90 transition-all"
            onClick={() => setSideBarOpen(true)}
          >
            <Hamburger />
          </div>
          <NavBrand />
        </div>
        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="action-items flex  space-x-4 lg:space-x-6 items-center ">
          {NavActionsData.map((item) => {
            return (
              <Link to={item.link}>
                <div className=" flex flex-col  items-center justify-center ">
                  <span>{item.icon} </span>
                  <span className="text-xs tracking-wide pt-1 hidden lg:block lg:text-base">
                    {item.text}{" "}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
