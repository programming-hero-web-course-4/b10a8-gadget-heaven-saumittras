import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import wishicon from "../assets/wisht.png";
import { getAllProducts, getWishlistProducts } from "../utility";

const HomeNavbar = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    const cart = getAllProducts();
    const wishlist = getWishlistProducts();
    setCart(cart);
    setWishList(wishlist);
  }, []);

  const buttonStyle = {
    color: "black",
    backgroundColor: "transparent",
  };
  const links = (
    <>
      <li className="mr-4 bg-transparent text-black z-10">
        <NavLink
          style={buttonStyle}
          className="bg-transparent text-white"
          to="/"
        >
          <span className="text-white">Home</span>
        </NavLink>
      </li>
      <li className="mr-4 z-10">
        <NavLink style={buttonStyle} to="/statistics">
          <span className="text-white">Statistics</span>
        </NavLink>
      </li>
      <li className="mr-4 z-10">
        <NavLink style={buttonStyle} to="/dashboard">
          <span className="text-white">Dashboard</span>
        </NavLink>
      </li>
      <li className="mr-4 z-10">
        <NavLink style={buttonStyle} to="/offers">
          <span className="text-white">Offers</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#9538E2] w-11/12 mx-auto pt-3 mt-6 rounded-t-3xl justify-around">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost z-10 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="text-xl z-10 font-bold hover:cursor-pointer">
          <span className="text-white">Gadget Heaven</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white px-1">{links}</ul>
      </div>

      {/* Here we will add cart and wishlist section */}

      <div className="flex-none">
        {/* Cart Section is Added here */}
        <div className="dropdown z-[1] mr-3 dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-white btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart?.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cart.length} Items</span>

              <div className="card-actions">
                <NavLink
                  className="btn btn-primary btn-block"
                  style={buttonStyle}
                  to="/dashboard"
                >
                  View Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* WishList added here */}
        <div className="dropdown z-[1] dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg-white z-10 btn-circle"
          >
            <div className="indicator">
              <img src={wishicon} alt="" className="z-[1]" />
              <span className="badge badge-sm indicator-item">
                {wishlist?.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // other
  // return (
  //   <nav>
  //     <div className="navbar bg-base-100">
  //       <div className="flex-1">
  //         <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  //       </div>

  //     </div>
  //   </nav>
  // );
};

export default HomeNavbar;
