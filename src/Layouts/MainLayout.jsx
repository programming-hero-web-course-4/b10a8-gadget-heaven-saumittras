import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomeNavbar from "../Components/HomeNavbar";

const MainLayout = () => {
  const location = useLocation();

  // const navBar = location.pathname("/");

  return (
    <div>
      <Toaster />
      {/* NavBar Section Start From here */}
      {location.pathname == "/" ? (
        <HomeNavbar></HomeNavbar>
      ) : (
        <>
          <NavBar></NavBar>
        </>
      )}

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
