import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, type }) => {
  return (
    <Link
      to="/products"
      className={`w-fit py-2 px-4 text-lg lg:text-2xl lg:py-3 lg:px-5 inline-block rounded-lg bg-pink text-white hover:text-white hover:bg-black ${
        type === "cart-btn" ? "lg:py-2 lg:px-3" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default Button;
