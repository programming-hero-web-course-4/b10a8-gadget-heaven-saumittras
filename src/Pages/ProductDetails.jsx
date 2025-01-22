import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCart, addWishlist, getWishlistProducts } from "../utility";
import { useEffect, useState } from "react";
import cart from "../assets/cart.png";
import wish from "../assets/wisht.png";

const ProductDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData(product_id);

  const id = parseInt(product_id);
  let product;
  data.map((pro) => {
    if (pro.product_id == product_id) {
      product = pro;
    }
  });

  const {
    product_title,
    price,
    product_image,
    description,
    specification,
    rating,
    availability,
  } = product;

  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = getWishlistProducts();
    const exists = wishlist.some(
      (item) => item.product_id === product.product_id
    );
    setIsInWishlist(exists);
  }, [product.product_id]);

  const handleCart = (product) => {
    addCart(product);
  };

  const handleWishlist = (product) => {
    addWishlist(product);
    setIsInWishlist(true);
  };

  return (
    <div className=" relative mb-[350px]">
      <div className="header bg-[#9538E2] h-[465px] flex flex-col justify-start items-center">
        <h2 className="text-3xl font-bold text-white mt-8">Product Details</h2>
        <p className="text-base font-normal my-4 w-6/12 text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product details cards */}
      <div className="card card-side absolute top-[170px] left-28 gap-6 bg-base-100 border-2 border-purple-900 shadow-xl p-5 w-10/12 grid grid-cols-12  mx-auto">
        <figure className="col-span-5 border-2 rounded-l-xl">
          <img className="h-full w-full" src={product_image} alt="Movie" />
        </figure>
        <div className="card-body flex flex-col border-2  rounded-r-xl col-span-7 ">
          <div className="">
            <div className="first-part my-4">
              <h2 className="card-title text-3xl lg:my-4 font-semibold">
                {product_title}
              </h2>
              <p className="font-semibold text-xl mb-3">Price:$ {price}</p>
              <p className="btn py-1 px-4 border-2 text-green-700 hover:cursor-default rounded-full hover:bg-green-300 border-green-600 mb-3 bg-green-300">
                {availability ? "In Stock" : "Out Of Stock"}
              </p>
              <p className="font-normal mb-3 text-[#09080F99] text-lg">
                {description}
              </p>
            </div>
            <div className="middlePart">
              <h3 className="font-bold text-lg">Specifications:</h3>
              <ul className="list-decimal list-inside mb-3">
                {specification.map((item, idx) => (
                  <li
                    key={idx}
                    className="ml-3 text-lg text-[#09080F99] font-normal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="endPart">
              <h3 className="font-bold mb-3 text-[#09080F] text-lg">Rating</h3>
              <p>
                <span>
                  {
                    <span className="text-[#09080F99] text-lg font-normal">
                      {rating >= 4
                        ? "⭐⭐⭐⭐⭐"
                        : rating >= 3
                        ? "⭐⭐⭐⭐"
                        : rating >= 2
                        ? "⭐⭐⭐"
                        : rating >= 1
                        ? "⭐⭐"
                        : "⭐"}
                    </span>
                  }
                </span>{" "}
                {rating}
              </p>
            </div>
            <div className="button">
              <div className="buttons flex ">
                <button
                  onClick={() => handleCart(product)}
                  className="flex rounded-full hover:bg-white hover:border-purple-900 bg-[#9538E2] hover:text-[#9538E2] font-bold text-white  btn mr-6"
                >
                  Add To Cart
                  <span>
                    <img src={cart} alt="" />
                  </span>
                </button>
                <button
                  onClick={() => handleWishlist(product)}
                  className="btn btn-circle"
                >
                  <img className=" h-6" src={wish} alt="" />
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
