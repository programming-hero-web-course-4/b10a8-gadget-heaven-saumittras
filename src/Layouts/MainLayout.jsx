import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* NavBar Section Start From here */}
      <NavBar></NavBar>

      {/* Dynamic Section Start From here */}
      <div className="">
        <Outlet></Outlet>
      </div>

      {/*Footer Section Start From here */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
