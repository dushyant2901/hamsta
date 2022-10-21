import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "../NavLinks";
import { Hamburger } from "../../icons";
import { NavActionsData } from "../../data/navbar";
import NavBrand from "../NavBrand";
const Navbar = ({ setSideBarOpen }) => {
  return (
    <nav className=" ">
      <div className=" px-4 py-3 container mx-auto flex items-center justify-between ">
        <div className="flex space-x-4 items-center font-krona">
          <div
            className="open block md:hidden "
            onClick={() => setSideBarOpen(true)}
          >
            <Hamburger />
          </div>
          <NavBrand />
        </div>
        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="action-items flex  space-x-4 items-center ">
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
