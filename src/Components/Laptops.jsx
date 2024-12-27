import React, { useEffect, useState } from "react";
import Laptop from "./Laptop";
import { useLoaderData, useParams } from "react-router-dom";
const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const { product_id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    fetch("productsData.json")
      .then((resp) => resp.json())
      .then((data) => {
        const laptopData = data.filter(
          (product) => product.category === "Laptops"
        );
        setLaptops(laptopData);
      });
  }, []);
  return (
    <div>
      <h1>Hello from laptops</h1>
      {laptops.map((laptop, idx) => (
        <Laptop laptops={laptops} key={idx}></Laptop>
      ))}
    </div>
  );
};

export default Laptops;
