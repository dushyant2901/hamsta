import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h2 className="text-3xl lg:text-4xl text-center capitalize text-slate-500 font-bold">
        {title}
      </h2>
      <div className="h-1 w-20 lg:w-24 bg-pink rounded-xl mt-2 mx-auto"></div>
    </>
  );
};

export default SectionTitle;
