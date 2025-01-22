import React, { useEffect, useState } from "react";
import OfferProduct from "../Components/OfferProduct";

const Offers = () => {
  const [offeredProducts, setProducts] = useState(null);
  useEffect(() => {
    document.title = "Gadget Haven | Exclusive Offer";
  }, []);

  useEffect(() => {
    fetch("productsData.json")
      .then((res) => res.json())
      .then((data) => {
        const offeredProduct = data.filter(
          (product) => product.discount_percent > 0
        );
        setProducts(offeredProduct);
      });
  }, []);

  return (
    <div>
      <div className="header">
        <div className="header bg-[#9538E2] py-8 flex flex-col justify-start items-center">
          <h2 className="text-3xl font-bold text-white">Exclusive Offer!</h2>
          <p className="text-base font-normal my-4 w-6/12 text-white text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="offer-products w-10/12 mx-auto">
          <div className="product-box grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
            {offeredProducts?.map((product, idx) => (
              <OfferProduct product={product} key={idx}></OfferProduct>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
