import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
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

  console.log(product_id);
  console.log(id);
  console.log(data);
  console.log(product);

  const {
    product_title,
    price,
    product_image,
    description,
    specification,
    rating,
    availability,
  } = product;

  return (
    <div className=" relative mb-[300px]">
      <div className="header bg-[#9538E2] h-[465px] flex flex-col justify-start items-center">
        <h2 className="text-3xl font-bold text-white mt-8">Product Details</h2>
        <p className="text-base font-normal my-4 w-6/12 text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product details cards */}
      <div className="card card-side absolute top-[170px] left-28 gap-6 bg-base-100 border-2 border-purple-900 shadow-xl p-5 w-10/12 grid grid-cols-3  mx-auto">
        <figure className="col-span-1 border-2 rounded-l-xl">
          <img src={product_image} alt="Movie" />
        </figure>
        <div className="card-body flex flex-col border-2  rounded-r-xl col-span-2 ">
          <div className="">
            <div className="first-part">
              <h2 className="card-title text-3xl font-semibold">
                {product_title}
              </h2>
              <p className="font-semibold text-xl">Price:$ {price}</p>
              <p className="btn border-2 text-green-700 hover:cursor-default rounded-full hover:bg-green-300 border-green-600 bg-green-300">
                {availability ? "In Stock" : "Out Of Stock"}
              </p>
              <p className="font-normal text-[#09080F99] text-lg">
                {description}
              </p>
            </div>
            <div className="middlePart">
              <h3 className="font-bold text-lg">Specifications:</h3>
              <ul className="list-decimal list-inside">
                {specification.map((item) => (
                  <li className="ml-3 text-lg text-[#09080F99] font-normal">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="endPart">
              <h3 className="font-bold text-[#09080F] text-lg">Rating</h3>
              <p>
                <span>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </span>{" "}
                {rating}
              </p>
            </div>
            <div className="button">
              <div className="buttons flex ">
                <button className="flex rounded-full hover:bg-white hover:border-purple-900 bg-[#9538E2] hover:text-[#9538E2] font-bold text-white  btn mr-6">
                  Add To Cart
                  <span>
                    <img src={cart} alt="" />
                  </span>
                </button>
                <button className="btn btn-circle">
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
