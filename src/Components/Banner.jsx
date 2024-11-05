import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
  const glass = {
    background: "rgba(255, 255, 255, 0.25)",
    "box-shadow": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    "backdrop-filter": "blur(6px)",
    "-webkit-backdrop-filter": "blur(6px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };
  return (
    <div className="bg-[#9538E2] w-11/12 mx-auto h-screen mb-80 rounded-2xl   ">
      <div className="flex flex-col justify-center items-center gap-y-8 pt-28">
        <h2 className="text-5xl text-center w-10/12 mx-auto font-bold text-white">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="w-6/12 text-center text-white mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn btn-active w-40 rounded-full bg-white hover:bg-purple-900 hover:text-white font-bold text-xl hover:border-white text-[#9538E2] btn-primary">
          Shop Now
        </button>
      </div>

      {/* Div for banner picture */}

      <div
        style={glass}
        className="glass w-9/12 mx-auto  left-40 top-[500px] absolute "
      >
        <figure className=" m-5 lg:h-[560px] ">
          <img className=" rounded-2xl h-full w-full " src={banner} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
