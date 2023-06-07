import { useContext, useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/Authcontex";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";

import Navbar from "./components/navebar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./pages/user/User";
import Customer from "./pages/customer/Customer";
import Product from "./pages/product/Product";
import Vendor from "./pages/vendor/Vendor";
import BillCreate from "./pages/billcreate/BillCreate";
import ProductStock from "./pages/productstock/ProductStock";
import Proposal from "./pages/proposal/Proposal";
import Retainer from "./pages/retainer/Retainer";
import Bill from "./pages/bill/Bill";
function App() {
  const { user } = useContext(AuthContext);
  const Layout = () => {
    return (
      <>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Sidebar />

          <div style={{ flex: "6" }}>
            <Outlet />
          </div>
        </div>
      </>
    );
  };
  const ProtectedRouter = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter>
          <Layout />
        </ProtectedRouter>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/vendor",
          element: <Vendor />,
        },
        {
          path: "/billcreate",
          element: <BillCreate />,
        },
        {
          path: "/productstock",
          element: <ProductStock />,
        },
        {
          path: "/proposal",
          element: <Proposal />,
        },
        {
          path: "/retainer",
          element: <Retainer />,
        },
        {
          path: "/bill",
          element: <Bill />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
