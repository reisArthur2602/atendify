import { createBrowserRouter } from "react-router-dom";
import { SignLayout } from "../layouts/SignLayout";

// sign routes
import Login from "../pages/Sign/Login";
import Register from "../pages/Sign/Register";
import SignErrorPage from "../pages/Sign/SignErrorPage";

export const Routes = createBrowserRouter([
  {
    path: "/sign",
    element: <SignLayout />,
    errorElement: <SignErrorPage />,
    children: [
      { path: "in", element: <Login /> },
      { path: "up", element: <Register /> },
    ],
  },
]);
