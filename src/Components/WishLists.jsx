import { useEffect, useState } from "react";
import { getWishlistProducts } from "../utility/index";
import WishListCard from "./WishListCard";

const WishLists = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const wishlist = getWishlistProducts();
    setProducts(wishlist);
    document.title = "Gadget Heaven - Wishlist";
  }, []);
  return (
    <div className="py-8">
      <h3 className="font-bold text-2xl">Wishlist</h3>
      <div className="wish-list-container gap-y-6 w-11/12 mx-auto  mt-8">
        {products.map((product) => (
          <WishListCard
            key={product.product_id}
            product={product}
            products={products}
            setProducts={setProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default WishLists;
