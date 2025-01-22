import React, { useEffect, useState } from "react";
import WishLists from "../Components/WishLists";
import Carts from "../Components/Carts";

const Dashboard = () => {
  const [isActive, setActive] = useState({ cart: true, btn: "cart" });
  const handleActivebtn = (status) => {
    if (status == "cart") {
      setActive({ cart: true, btn: "cart" });
    } else {
      setActive({ cart: false, btn: "wishlist" });
    }
  };

  useEffect(() => {
    document.title = "Gadget Haven | Dashboard";
  }, []);

  return (
    <div className="space-y-8">
      <div className="header">
        {/* Dashboard Heading and description section start from here */}
        <div className="header bg-[#9538E2] py-8 flex flex-col justify-start items-center">
          <h2 className="text-3xl font-bold text-white">Dashboard</h2>
          <p className="text-base font-normal my-4 w-6/12 text-white text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          {/* Buttons section start from here */}
          <div className="buttons ">
            <button
              onClick={() => handleActivebtn("cart")}
              className={`${
                isActive.cart
                  ? "btn btn-primary bg-white text-[#9538E2] font-semibold text-lg w-40 mr-6 rounded-full hover:border-white hover:bg-purple-400 hover:text-white"
                  : "btn btn-primary bg-[#9538E2] border-2 font-semibold text-lg border-white w-40 mr-6 rounded-full"
              }`}
            >
              Cart
            </button>
            <button
              onClick={() => handleActivebtn("wishlist")}
              className={`${
                !isActive.cart
                  ? "btn btn-primary bg-white text-[#9538E2] font-semibold text-lg w-40 mr-6 rounded-full hover:border-white hover:bg-purple-400 hover:text-white"
                  : "btn btn-primary bg-[#9538E2] border-2 border-white font-semibold text-lg w-40 mr-6 rounded-full hover:bg-purple-400  hover:text-white"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Cart section Start from here */}
      <div className="cart-container bg-gray-100">
        <div
          className={`${isActive.cart ? "block w-11/12 mx-auto" : "hidden"}`}
        >
          <div>
            <Carts></Carts>
          </div>
        </div>

        <div
          className={`${
            isActive.cart ? "hidden" : "block wishList  w-11/12 mx-auto"
          }`}
        >
          <div>
            <WishLists></WishLists>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
