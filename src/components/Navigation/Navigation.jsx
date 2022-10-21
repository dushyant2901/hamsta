import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
const Navigation = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <Navbar setSideBarOpen={setSideBarOpen} />
      {sideBarOpen && <Sidebar setSideBarOpen={setSideBarOpen} />}
    </>
  );
};

export default Navigation;
