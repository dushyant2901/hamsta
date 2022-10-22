import React from "react";
import { BsGithub } from "react-icons/bs";
const GithubIcon = () => {
  return (
    <div className="md:w-8 w-7 h-7 md:h-8 hover:text-pink hover:-translate-y-1 transition-all">
      <BsGithub className="w-full h-full" />
    </div>
  );
};

export default GithubIcon;
