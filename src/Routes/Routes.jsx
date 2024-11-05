import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Offers from "../Pages/Offers";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/offers",
        element: <Offers></Offers>,
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
