import React from "react";

const Product = ({ product }) => {
  const glass = {
    background: "rgba(255, 255, 255, 0.25)",
    "box-shadow": " 0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    "backdrop-filter": "blur(6px)",
    "-webkit-backdrop-filter": "blur(6px)",
    borderRadius: "10px",
    border: " 1px solid rgba(255, 255, 255, 0.18)",
  };
  const { product_image, product_title, price } = product;
  return (
    <div style={glass} className="glass p-5">
      <div className="card h-full  shadow-xl">
        <figure className="h-56 mb-6 border border-[#9538E2]">
          <img
            src={product_image}
            alt="Shoes"
            className="rounded-lg w-full h-full"
          />
        </figure>
        <div className="card-body bg-base-300 border border-[#9538E2] p-6 items-start rounded-b-lg text-left">
          <h2 className=" text-2xl font-semibold text-[#09080F]">
            {product_title}
          </h2>
          <p className="text-xl text-[#09080F99] font-medium">$ {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary bg-white text-[#9538E2] hover:text-white hover:bg-[#9538E2] text-xl rounded-full border-2 border-[#9538E2]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
