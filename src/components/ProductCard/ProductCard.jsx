import React from "react";
import { CartFillIcon, WishListIcon } from "../../icons";
const ProductCard = ({ item }) => {
  return (
    <article className="w-[80%] xs:w-[45%] sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-1/6 flex flex-col  justify-center items-center  rounded-xl  hover:shadow-xl group relative mx-2 my-3 md:mx-4 md:my-5 lg:mx-3 lg:my-4  border-[1px] border-pink sm:hover:scale-105 hover:scale-[1.025] transition-all overflow-hidden ">
      <div className="w-full object-cover   rounded-xl overflow-hidden">
        <img
          src="image/testimage.jpg"
          className="w-full h-full group-hover:hidden "
        />
        <img
          src="image/testimage2.jpg"
          className="w-full h-full hidden group-hover:block"
        />
        {/* TODO: second image on hover */}
      </div>

      <div className="invisible absolute top-3 left-3 bottom-0   w-fit group-hover:visible  ">
        <WishListIcon />
      </div>
      <div className="pb-4 px-3  sm:px-3 flex flex-col items-center relative">
        <div>
          <p className="text-pink text-lg lg:text-xl">Shirt</p>
          <p className="text-md my-1 lg:text-lg font-krona">
            MEN Yarn Fleece Full-Zip Jacket
          </p>
          <div className="flex items-center justify-between ">
            <p className="text-xl lg:text-xl mt-1 text-dark-grey font-bold tracking-wider">
              $12.00
            </p>
            <div className="invisible  w-fit group-hover:visible absolute bottom-[2.5%]    right-[4%] -translate-y-1/4">
              <CartFillIcon />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
