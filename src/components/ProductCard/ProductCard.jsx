import React from "react";
import { CartFillIcon, WishListIcon } from "../../icons";
const ProductCard = ({ item }) => {
  return (
    <article className="xs-[85%] sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-1/6 flex flex-col  justify-center   rounded-xl p-3 hover:shadow-xl group relative md:mx-5 md:my-5 lg:mx-4 lg:my-4">
      <div className="w-full object-cover  rounded-lg overflow-hidden">
        <img
          src="image/testimage.jpg"
          className="w-full h-full group-hover:hidden"
        />
        <img
          src="image/testimage2.jpg"
          className="w-full h-full hidden group-hover:block"
        />
        {/* TODO: second image on hover */}
      </div>

      <div className="invisible absolute top-6 left-4 bottom-0   w-fit group-hover:visible  ">
        <WishListIcon />
      </div>
      <div className="py-2 flex flex-col items-center relative">
        <div>
          <p className="text-pink text-lg lg:text-xl">Shirt</p>
          <p className="text-md my-1 lg:text-lg font-krona">
            MEN Yarn Fleece Full-Zip Jacket
          </p>
          <div className="flex items-center justify-between ">
            <p className="text-xl lg:text-xl mt-1 text-dark-grey font-bold tracking-wider">
              $12.00
            </p>
            <div className="invisible  w-fit group-hover:visible absolute -bottom-[5%]    right-0 -translate-y-1/4">
              <CartFillIcon />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
