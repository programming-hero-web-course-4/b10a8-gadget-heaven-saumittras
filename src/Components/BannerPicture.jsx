import React from "react";
import BannerImage from "../assets/banner.jpg";

const BannerPicture = () => {
  return (
    <div className="border border-[#FFFFFF] rounded-[2rem] p-6 bg-[#FFFFFF] bg-opacity-30 w-7/12 mx-auto relative bottom-[200px]">
      <img className="rounded-3xl h-[563px] w-full" src={BannerImage} alt="" />
    </div>
  );
};

export default BannerPicture;
