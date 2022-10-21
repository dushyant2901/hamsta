import React from "react";
import { CartFillIcon, WishListIcon } from "../../icons";
const ProductCard = ({ item }) => {
  return (
    <article className="w-[45%] md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col  justify-center  rounded-xl p-4 hover:shadow-xl group relative ">
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
      <div className="py-2 ">
        <p className="text-pink text-lg lg:text-xl">Shirt</p>
        <p className="text-md my-1 lg:text-lg font-krona">
          MEN Yarn Fleece Full-Zip Jacket
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xl lg:text-2xl mt-2 text-dark-grey font-bold tracking-wider">
            $12.00
          </p>
          <div className="invisible  w-fit group-hover:visible  ">
            <CartFillIcon />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
