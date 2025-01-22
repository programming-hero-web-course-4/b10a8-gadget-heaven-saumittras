import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const CartCard = () => {
  return (
    <div className=" bg-base-100 my-6 rounded-lg shadow-lg">
      <div className=" flex p-6 lg:flex-row justify-between items-center">
        <div className="image flex flex-col lg:flex-row gap-x-6">
          <figure className="w-52 h-40 rounded-lg overflow-hidden">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="w-full h-full rounded-lg shadow-2xl"
            />
          </figure>
          <div className="flex flex-col justify-items-start gap-y-4">
            <h1 className="text-2xl font-semibold">Samsung Galaxy S23 Ultra</h1>
            <p className="text-lg font-normal text-[#09080F99]">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <h3 className="text-xl text-[#09080FCC] font-semibold">
              Price: $ 999.99
            </h3>
          </div>
        </div>

        <div className="delete flex justify-start items-start">
          <button className="btn text-5xl hover:bg-transparent bg-transparent rounded-full text-red-600">
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
