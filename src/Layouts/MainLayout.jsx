import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
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
