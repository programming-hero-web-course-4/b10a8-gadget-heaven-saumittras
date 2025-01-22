import React, { useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { addCart, deleteWishlist } from "../utility";
import { getWishlistProducts } from "../utility";

const WishListCard = ({ product, setProducts, products }) => {
  useEffect(() => {
    const wishlist = getWishlistProducts();
    setProducts(wishlist);
  }, []);
  const handleDelete = (product) => {
    deleteWishlist(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const handleAddCart = (product) => {
    addCart(product);
    deleteWishlist(product);
    const wishlist = getWishlistProducts();
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  return (
    <div className=" bg-base-100 my-6 rounded-lg shadow-lg">
      <div className=" flex p-6 lg:flex-row justify-between items-center">
        <div className="image flex flex-col justify-center items-center lg:flex-row gap-x-6">
          <figure className="w-52 h-40 rounded-lg overflow-hidden">
            <img
              src={product?.product_image}
              className="w-full h-full rounded-lg shadow-2xl"
            />
          </figure>
          <div className="flex flex-col justify-items-start gap-y-2">
            <h1 className="text-2xl font-semibold">{product?.product_title}</h1>
            <p className="text-lg font-normal text-[#09080F99]">
              {product?.product_title}
            </p>
            <h3 className="text-xl text-[#09080FCC] font-semibold">
              Price: $ {product?.price}
            </h3>

            <div className="button">
              <button
                onClick={() => handleAddCart(product)}
                className="btn py-2 bg-[#9538E2] rounded-full btn-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="delete flex justify-start items-start">
          <button
            onClick={() => handleDelete(product)}
            className="btn text-5xl hover:bg-transparent bg-transparent rounded-full text-red-600"
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
