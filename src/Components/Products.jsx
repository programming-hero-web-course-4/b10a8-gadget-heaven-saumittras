import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const { name } = useParams();

  const data = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (name) {
      const filterProduct = [...data].filter(
        (product) => product.category === name
      );
      setProducts(filterProduct);
    } else {
      setProducts(data);
    }
  }, [name, data]);

  return (
    <div className="product-box grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
      {products.map((product, idx) => (
        <Product product={product} key={idx}></Product>
      ))}
    </div>
  );
};

export default Products;
