import React, { useState } from "react";
import { Link } from "react-router-dom";

const OfferProduct = ({ product }) => {
  // const { product_id, product_image, product_title, price } = product;
  return (
    <div className="glass p-5 rounded-xl">
      <div className="card h-full  shadow-xl">
        <figure className="h-56 mb-6 border border-[#9538E2]">
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
          <p className="text-xl text-[#09080F99] font-medium">
            {" "}
            $ {product?.price}
          </p>
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
