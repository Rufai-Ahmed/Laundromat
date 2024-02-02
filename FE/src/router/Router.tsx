import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/home/HomeScreen";
import { Layout } from "../pages/auth/Layout";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "register",
        element: <Register />,
      },
      {
        index: true,
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
