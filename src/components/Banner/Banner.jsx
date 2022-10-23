import React from "react";
import { Button } from "../Shared";

const Banner = () => {
  return (
    <section className="w-full relative md:h-[600px] h-96 flex items-center">
      <article className="object-contain absolute top-0 bottom-0 left-0 right-0 -z-10">
        <img src="image/banner-3.jpg" className="w-full h-full" />
      </article>
      <article className="ml-5 md:ml-20 lg:ml-48 ">
        <span className="text-pink text-3xl lg:text-4xl">Sale Offer</span>
        <br />{" "}
        <span className="text-5xl my-2 lg:my-4 inline-block font-bold">
          NEW FASHION <br /> SUMMER SALE{" "}
        </span>
        <br />
        <span className="text-slate-500 font-semibold text-xl lg:text-2xl">
          starting at <span className="text-3xl lg:text-4xl">$ 29.99</span> SHOP
          NOW
        </span>
        <div className="mt-5 lg:mt-6">
          <Button text="Shop Now" type="banner-btn" />
        </div>
      </article>
    </section>
  );
};

export default Banner;
// TODO: slideshow of promotional banner using stick or swiper
