import React from "react";
import { CloseIcon } from "../../icons";
import NavLinks from "../NavLinks";

const Sidebar = ({ setSideBarOpen }) => {
  // TODO: smooth transition while opening and closing of sidebar.
  return (
    <aside className="w-2/4 fixed top-0 bottom-0 left-0 flex flex-col  md:hidden p-4 bg-slate-50 z-30 shadow-lg">
      <div
        className=" mb-5  hover:rotate-180 transition-all w-fit"
        onClick={() => setSideBarOpen(false)}
      >
        <CloseIcon />
      </div>
      <NavLinks type="sidebar" />
    </aside>
  );
};

export default Sidebar;
