import { Route, Routes } from "react-router-dom";
// layouts
import { SignLayout } from "../layouts/SignLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";

// sign routes
import Login from "../pages/Sign/Login";
import Register from "../pages/Sign/Register";

// dashboard routes
import Order from "../pages/Dashboard/Order";
import Category from "../pages/Dashboard/Category";
import Customer from "../pages/Dashboard/Customer";

import NotFound from "../pages/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      {/* sign */}
      <Route path="sign" element={<SignLayout />}>
        <Route index element={<Login />} />
        <Route path="up" element={<Register />} />
      </Route>

      {/* dashboard */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Order />} />
        <Route path="category" element={<Category />} />
        <Route path="customers" element={<Customer />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
