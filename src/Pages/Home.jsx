import React, { useState } from "react";
import Banner from "../Components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import Products from "../Components/Products";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Categorys from "../Components/Categorys";

const Home = () => {
  const categorys = useLoaderData();
  useEffect(() => {
    document.title = "Gadget Haven - Home";
  }, []);

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
              <Categorys categorys={categorys}></Categorys>
            </div>
          </div>

          <div className=" col-span-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
