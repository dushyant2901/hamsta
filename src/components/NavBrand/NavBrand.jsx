import React from "react";
import { Link } from "react-router-dom";
const NavBrand = () => {
  return (
    <div className="nav-brand text-2xl lg:text-4xl font-medium cursor-pointer tracking-widest flex items-center">
      <Link to="/">
        <span className="text-red-400 ">H</span>AMSTA
      </Link>
    </div>
  );
};

export default NavBrand;
