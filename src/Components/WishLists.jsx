import React from "react";
import WishListCard from "./WishListCard";

const WishLists = () => {
  return (
    <div className="py-8">
      <h3 className="font-bold text-2xl">Wishlist</h3>
      <div className="wish-list-container gap-y-6 w-11/12 mx-auto  mt-8">
        <WishListCard />
        <WishListCard />
        <WishListCard />
        <WishListCard />
      </div>
    </div>
  );
};

export default WishLists;
