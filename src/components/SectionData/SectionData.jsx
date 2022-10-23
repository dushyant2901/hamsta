import React from "react";
import ProductCard from "../ProductCard";

const SectionData = ({ data }) => {
  return (
    <div className="flex flex-wrap  items-center justify-center py-3">
      {data.map((item) => {
        return <ProductCard item={item} />;
      })}
    </div>
  );
};

export default SectionData;
