import React, { useState } from "react";
import { Link } from "react-router-dom";

const OfferProduct = ({ product }) => {
  // const { product_id, product_image, product_title, price } = product;
  return (
    <div className="glass p-5 rounded-xl">
      <div className="card h-full  shadow-xl">
        <figure className="h-56 relative mb-6 border border-[#9538E2]">
          <h2 className=" absolute top-2 right-2 bg-slate-400 px-3 py-2 rounded-full text-2xl font-semibold text-red-500">
            {product?.discount_percent} % Off
          </h2>
          <img
            src={product?.product_image}
            alt="Shoes"
            className="rounded-lg w-full h-full"
          />
        </figure>
        <div className="card-body bg-base-300 border border-[#9538E2] p-6 items-start rounded-b-lg text-left">
          <h2 className=" text-2xl font-semibold text-[#09080F]">
            {product?.product_title}
          </h2>
          <div className="price flex justify-between items-center gap-4">
            <p className="text-xl line-through text-[#09080F99] font-medium">
              $ {product?.price}
            </p>
            <p className="text-2xl text-end text-red-600 font-bold">
              ${" "}
              {((product?.price * product?.discount_percent) / 100).toFixed(2)}{" "}
              Price
            </p>
          </div>
          <div className="card-actions">
            <Link
              to={`/products/${product?.product_id}`}
              className="btn btn-wide btn-primary bg-white text-[#9538E2] hover:text-white hover:bg-[#9538E2] text-xl rounded-full border-2 border-[#9538E2]"
            >
              Buy Now !
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferProduct;
