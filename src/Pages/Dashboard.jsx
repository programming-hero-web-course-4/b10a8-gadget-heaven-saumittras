import React from "react";
import WishLists from "../Components/WishLists";
import Carts from "../Components/Carts";
import sort from "../assets/sort.png";
const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="header">
        <div className="header bg-[#9538E2] py-8 flex flex-col justify-start items-center">
          <h2 className="text-3xl font-bold text-white">Dashboard</h2>
          <p className="text-base font-normal my-4 w-6/12 text-white text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="buttons ">
            <button className="btn btn-primary w-40 mr-6 rounded-full">
              Cart
            </button>
            <button className="btn btn-primary w-40 rounded-full">
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="cart-container bg-gray-100">
        <div className="cart-container w-11/12 mx-auto">
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
              <button className="btn btn-primary w-40 mr-6 rounded-full">
                Purchase
              </button>
            </div>
          </div>
          <div>
            <Carts></Carts>
          </div>
        </div>
        <div className="wishList  w-11/12 mx-auto">
          <h3 className="font-bold text-2xl">Wishlist</h3>
          <div>
            <WishLists></WishLists>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
