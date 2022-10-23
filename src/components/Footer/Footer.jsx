import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  WishListFillIcon,
} from "../../icons";

const Footer = () => {
  const currYear = () => new Date().getFullYear();
  return (
    <footer className="py-5 md:py-8 flex flex-col space-y-4 md:space-y-6 items-center justify-center font-krona bg-red-200 tracking-wider">
      <p className="text-xl lg:text-2xl  flex items-center">
        Made with
        <span className="mx-2 inline-block">
          <WishListFillIcon />
        </span>
        by Dushyant
      </p>
      <div className="flex space-x-6 items-center ">
        <TwitterIcon />
        <LinkedinIcon />
        <GithubIcon />
      </div>
      <p className="text-lg md:text-xl">© {currYear()} Hamsta</p>
    </footer>
  );
};

export default Footer;
