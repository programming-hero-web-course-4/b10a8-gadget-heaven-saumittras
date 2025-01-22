import React, { useState, useEffect } from "react";
import sort from "../assets/sort.png";
import { deleteCart, getAllProducts } from "../utility/index";
import CartCard from "./CartCard";
import greenTick from "../assets/greentick.png";

const Carts = () => {
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [modalTotal, setModalTotal] = useState(0);

  useEffect(() => {
    const cart = getAllProducts();
    setProducts(cart);
    calculateTotalCost(cart);
    document.title = "Gadget Heaven - Cart";
  }, [products]);

  const calculateTotalCost = (cartProducts) => {
    const total = cartProducts.reduce((sum, product) => sum + product.price, 0);
    setTotalCost(total);
  };

  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
    calculateTotalCost(sortedProducts);
  };

  const handlePurchase = () => {
    setModalTotal(totalCost);
    setProducts([]);
    setTotalCost(0);
    document.getElementById("my_modal_1").showModal();
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <div className="py-8">
      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center p-8">
          <img className="mx-auto" src={greenTick} alt="" />
          <h1 className="font-bold text-2xl text-[#09080F] mt-6 mb-3">
            Payment Successfully
          </h1>
          <hr />
          <p className="mt-3 text-[#09080F99] font-medium">
            Thanks for purchasing
          </p>
          <p className="mt-3 text-[#09080F99] font-medium">
            Total: {modalTotal}
          </p>
          <form method="dialog">
            <button className="modal-action flex justify-center bg-slate-400 w-full text-center rounded-[2rem] py-2">
              <div className="text-[#09080F] font-semibold">Close</div>
            </button>
          </form>
        </div>
      </dialog>

      <div className="tite flex justify-between">
        <h3 className="font-bold text-2xl">Cart</h3>
        <div className="button flex justify-between items-center">
          <h3 className="text-[#0B0B0B] font-bold text-2xl mr-4">
            Total cost:$ {totalCost}
          </h3>
          <button
            onClick={handleSort}
            className="btn btn-primary bg-transparent font-semibold text-lg hover:bg-[#9538E2] hover:text-white text-[#9538E2] w-auto mr-6 rounded-full"
          >
            Sort by Price
            <span>
              <img src={sort} alt="" />
            </span>
          </button>
          <button
            disabled={totalCost == 0}
            onClick={handlePurchase}
            className="btn btn-primary bg-[#9538E2] font-semibold text-lg hover:bg-white hover:text-[#9538E2] text-white w-40 mr-6 rounded-full"
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Cart Card section start from here */}
      <div className="gap-y-6 w-11/12 mx-auto mt-8">
        {products.map((product) => (
          <CartCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Carts;
