import React from "react";
import { Button } from "../components/Shared";
const SingleProduct = () => {
  const product = {
    name: "Comfy Shirt",
    price: "9.88",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur aperiam omnis itaque magnam reprehenderit labore ut. Neque odit, possimus quae ipsam beatae in repudiandae eum.",
    sku: "ys hsahsa psiapisap",
    company: "Beharsha",
  };
  return (
    <section className="container mx-auto flex md:space-x-12 space-y-6 md:space-y-0 items-center flex-col md:flex-row py-4">
      {/* <ProductImages images={images} /> */}
      <article className="w-[95%] h-[50vh] md:w-1/2 bg-gray-400">
        dgggggggggggg
      </article>
      <article className="w-[95%] md:w-1/2">
        <h2 className="text-2xl md:text-3xl  font-krona font-bold mb-2 text-gray-700">
          {product.name}
        </h2>
        {/* stars */}
        <h5 className="text-lg font-bold text-pink my-1">${product.price}</h5>
        <p className="desc text-lg font-light text-gray-500 my-3">
          {product.description}
        </p>
        {/* <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p> */}
        <p className="flex  my-2">
          <span className="w-1/4 md:w-2/6 lg:w-1/6">SKU :</span>
          <span className="w-3/4 text-left md:w-5/6 lg:w-5/6">
            {product.sku}
          </span>
        </p>
        <p className="flex  my-2">
          <span className="w-1/4 md:w-2/6 lg:w-1/6">Available</span>
          <span className="w-3/4 text-left md:w-5/6 lg:w-5/6">In-Stock</span>
        </p>
        <p className="flex  my-2">
          <span className="w-1/4 md:w-2/6 lg:w-1/6">Brand :</span>
          <span className="w-3/4 text-left md:w-5/6 lg:5/6">
            {product.company}
          </span>
        </p>
        <hr />
        <div className="mt-3">
          <Button text="Add To Cart" type="cart-btn" />
        </div>
        {/* {stock > 0 && <AddToCart product={product} />} */}
      </article>
    </section>
  );
};

export default SingleProduct;
