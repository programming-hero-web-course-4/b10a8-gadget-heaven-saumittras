import React, { useEffect, useState } from "react";

const Offers = () => {
  const [offeredProducts, setProducts] = useState(null);
  useEffect(() => {
    document.title = "Gadget Haven | Exclusive Offer";
  }, [offeredProducts]);
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
  console.log(offeredProducts);
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
        <div className="offer-products"></div>
      </div>
    </div>
  );
};

export default Offers;
