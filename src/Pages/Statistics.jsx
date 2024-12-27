import React, { useEffect } from "react";
import { use } from "react";
import Chart from "../Components/Chart";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const products = useLoaderData();
  useEffect(() => {
    document.title = "Gadget Haven - Statistics";
  }, []);
  return (
    <div>
      <div className="space-y-8">
        <div className="header">
          <div className="header bg-[#9538E2] py-8 flex flex-col justify-start items-center">
            <h2 className="text-3xl font-bold text-white">Statistics</h2>
            <p className="text-base font-normal my-4 w-6/12 text-white text-center">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>

        <div className="Statistics-container bg-gray-100">
          <div className="statistics">
            <Chart products={products}></Chart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
