import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinksData } from "../../data/navbar";

const NavLinks = ({ type }) => {
  const classes = `flex ${
    type ? "flex-col space-y-3" : "flex-row space-x-10 "
  } `;

  return (
    <ul className={classes}>
      {NavLinksData.map((item, index) => {
        console.log(index);
        return (
          <NavLink
            end
            to={item.link}
            key={index}
            className={({ isActive }) =>
              ` w-max border border-b-4 border-transparent pb-1 transition-all  hover:border-b-pink  tracking-wide text-lg lg:text-2xl ${
                isActive ? "text-pink border-b-pink" : ""
              } ${type ? "  hover:pl-2 " : ""}`
            }
            // TODO: close sidebar on clicking on any link.
          >
            {item.text}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavLinks;
