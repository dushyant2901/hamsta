import React from "react";
import ProductCard from "../ProductCard";

const SectionData = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-evenly items-center space-y-6 space-x-3 py-3">
      {data.map((item) => {
        return <ProductCard item={item} />;
      })}
    </div>
  );
};

export default SectionData;
