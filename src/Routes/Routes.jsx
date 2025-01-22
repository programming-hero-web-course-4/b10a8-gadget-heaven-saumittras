import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Offers from "../Pages/Offers";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Components/ErrorPage";
import Laptops from "../Components/Laptops";
import Product from "../Components/Product";
import Products from "../Components/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
        children: [
          {
            path: "/",
            loader: () => fetch("/productsData.json"),
            element: <Products></Products>,
          },
          {
            path: "/category/:name",
            loader: () => fetch("/productsData.json"),
            element: <Products></Products>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/productsData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
          },
        ],
      },
      {
        path: "/offers",
        element: <Offers></Offers>,
        loader: () => fetch("/productsData.json"),
      },
      {
        path: "/products/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/productsData.json"),
      },
    ],
  },
]);
export default router;
