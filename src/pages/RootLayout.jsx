import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main className="mt-14 md:mt-[61px] lg:mt-[84px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
