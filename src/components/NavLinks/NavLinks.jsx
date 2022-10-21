import React from "react";
import { NavLink } from "react-router-dom";
const navItems = [
  { text: "Home", link: "/" },
  { text: "Shop Now", link: "/shop" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];
const NavLinks = ({ type }) => {
  const classes = `flex ${
    type ? "flex-col space-y-3" : "flex-row space-x-10 "
  } `;

  return (
    <ul className={classes}>
      {navItems.map((item, index) => {
        console.log(index);
        return (
          <NavLink
            end
            to={item.link}
            key={index}
            className={({ isActive }) =>
              ` w-max border border-b-4 border-transparent pb-1 transition ease-in-out delay-150  hover:border-b-pink  tracking-wide text-lg ${
                isActive ? "text-pink border-b-pink" : ""
              } ${type ? "  hover:pl-2 " : ""}`
            }
          >
            {item.text}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavLinks;
