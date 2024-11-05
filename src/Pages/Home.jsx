import React from "react";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div className="">
      <div className="banner">
        <Banner></Banner>
      </div>
      <div>
        <div className="title py-10">
          <h2 className="text-4xl font-bold text-center text-[#0B0B0B]">
            Explore Cutting-Edge Gadgets
          </h2>
        </div>

        <div className="products-container w-11/12 gap-4 mx-auto grid grid-cols-12">
          <div className="col-span-2 ">
            <div className="button-box space-y-4 flex flex-col bg-purple-100 rounded-lg shadow-xl">
              <Link
                className="btn text-lg font-extrabold bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white rounded-full border-2 border-[#9538E2]"
                to="/allproducts"
              >
                All Product
              </Link>
              <Link
                className="btn text-lg font-extrabold bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white rounded-full border-2 border-[#9538E2]"
                to="/laptops"
              >
                Laptops
              </Link>
              <Link
                className="btn text-lg font-extrabold bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white rounded-full border-2 border-[#9538E2]"
                to="/phones"
              >
                Phones
              </Link>
              <Link
                className="btn text-lg font-extrabold bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white rounded-full border-2 border-[#9538E2]"
                to="/accessories"
              >
                Accessories
              </Link>
              <Link
                className="btn text-lg font-extrabold bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white rounded-full border-2 border-[#9538E2]"
                to="/smartwatches"
              >
                Smart Watches
              </Link>
              <Link
                className="btn text-lg font-extrabold bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white rounded-full border-2 border-[#9538E2]"
                to="/macbook"
              >
                MacBook
              </Link>
              <Link
                className="btn text-lg font-extrabold bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white rounded-full border-2 border-[#9538E2]"
                to="/iphone"
              >
                Iphone
              </Link>
            </div>
          </div>

          <div className=" col-span-10">
            <Products></Products>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
