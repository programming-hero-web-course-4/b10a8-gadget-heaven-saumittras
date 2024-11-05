import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./productsData.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <div className="product-box grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
