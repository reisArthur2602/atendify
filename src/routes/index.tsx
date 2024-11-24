import { createBrowserRouter, Navigate } from "react-router-dom";
import { SignLayout } from "../layouts/SignLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";

// sign routes
import Login from "../pages/Sign/Login";
import Register from "../pages/Sign/Register";
import SignErrorPage from "../pages/Sign/SignErrorPage";

// dashboard routes
import DashboardErrorPage from "../pages/Dashboard/DashboardErrorPage";
import Order from "../pages/Dashboard/Order";
import Category from "../pages/Dashboard/Category";
import Customer from "../pages/Dashboard/Customer";

export const Routes = createBrowserRouter([
  {
    path: "/sign",
    element: <SignLayout />,
    errorElement: <SignErrorPage />,
    children: [
      { path: "in", element: <Login /> },
      { path: "up", element: <Register /> },
      { path: "*", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <DashboardErrorPage />,
    children: [
      { path: "order", element: <Order /> },
      { path: "category", element: <Category /> },
      { path: "customers", element: <Customer /> },
      { path: "*", element: <Order /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/sign/in"} />,
  },
]);
