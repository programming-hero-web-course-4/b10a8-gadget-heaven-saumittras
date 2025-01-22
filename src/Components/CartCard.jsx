import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { deleteCart } from "../utility";

const CartCard = ({ product }) => {
  // const {
  //   product_title,
  //   price,
  //   product_image,
  //   description,
  //   specification,
  //   rating,
  //   availability,
  // } = product;
  const handleDeleteCart = (product) => {
    deleteCart(product);
  };
  return (
    <div className=" bg-base-100 my-6 rounded-lg shadow-lg">
      <div className=" flex p-6 lg:flex-row justify-between items-center">
        <div className="image flex flex-col lg:flex-row gap-x-6">
          <figure className="w-52 h-40 rounded-lg overflow-hidden">
            <img
              src={product?.product_image}
              className="w-full h-full rounded-lg shadow-2xl"
            />
          </figure>
          <div className="flex flex-col justify-items-start gap-y-4">
            <h1 className="text-2xl font-semibold">{product?.product_title}</h1>
            <p className="text-lg font-normal text-[#09080F99]">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <h3 className="text-xl text-[#09080FCC] font-semibold">
              Price: $ {product?.price}
            </h3>
          </div>
        </div>

        <div className="delete flex justify-start items-start">
          <button
            onClick={() => handleDeleteCart(product)}
            className="btn text-5xl hover:bg-transparent bg-transparent rounded-full text-red-600"
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
