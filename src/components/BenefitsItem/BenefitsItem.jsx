import React from "react";

const BenefitsItem = ({ icon, title, text }) => (
  <div className="flex flex-1 ">
    <div className="relative mr-4">
      <div className="absolute bg-pink h-10 rounded-full top-0 w-10 -z-10 lg:h-12 lg:w-12"></div>

      {icon}
    </div>
    <div>
      <h5 className="font-krona text-base sm:text-lg md:text-xl">{title}</h5>
      <p className="text-sm text-gray-500 sm:text-base md:text-base">{text}</p>
    </div>
  </div>
);

export default BenefitsItem;
