import toast from "react-hot-toast";

// to get all cart products from local stroage
const getCartProducts = () => {
  const allCartProducts = localStorage.getItem("cart");
  if (allCartProducts) {
    const cart = JSON.parse(allCartProducts);
    return cart;
  } else {
    return [];
  }
};

// to add products in local Storage

const addCart = (product) => {
  let carts = getCartProducts();
  const isAvilable = carts.find(
    (item) => item.product_id == product.product_id
  );
  if (isAvilable) {
    return toString.error("Already added to Cart");
  }
  carts.push(product);
  localStorage.setItem("cart", JSON.stringify(carts));
  toast.success("Successfully added to cart");
};
