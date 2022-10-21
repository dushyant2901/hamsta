import React from "react";
import { CloseIcon } from "../../icons";
import NavLinks from "../NavLinks";

const Sidebar = ({ setSideBarOpen }) => {
  return (
    <div className="w-2/4 absolute top-0 bottom-0 left-0 flex flex-col  md:hidden p-4 bg-slate-50">
      <div className="sidebar-top mb-5" onClick={() => setSideBarOpen(false)}>
        <CloseIcon />
      </div>
      <NavLinks type="sidebar" />
    </div>
  );
};

export default Sidebar;
