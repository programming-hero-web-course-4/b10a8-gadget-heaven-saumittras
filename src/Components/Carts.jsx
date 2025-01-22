import React, { useState } from "react";
import sort from "../assets/sort.png";
import CartCard from "./CartCard";

const Carts = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modalPrice, setModalPrice] = useState(0);
  return (
    <div className="py-8">
      <div className="tite flex justify-between">
        <h3 className="font-bold text-2xl">Cart</h3>
        <div className="button flex justify-between items-center">
          <h3 className="text-[#0B0B0B] font-bold text-2xl mr-4">
            Total cost:$XXXX
          </h3>
          <button className="btn btn-primary bg-transparent font-semibold text-lg hover:bg-[#9538E2] hover:text-white text-[#9538E2] w-auto mr-6 rounded-full">
            Sort by Price
            <span>
              <img src={sort} alt="" />
            </span>
          </button>
          <button className="btn btn-primary bg-[#9538E2] font-semibold text-lg hover:bg-white hover:text-[#9538E2] text-white w-40 mr-6 rounded-full">
            Purchase
          </button>
        </div>
      </div>

      {/* Cart Card section start from here */}
      <div className="gap-y-6 w-11/12 mx-auto mt-8">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
    </div>
  );
};

export default Carts;
