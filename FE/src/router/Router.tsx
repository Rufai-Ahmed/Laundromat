import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/home/HomeScreen";
import { Layout } from "../pages/auth/Layout";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import Verify from "../pages/auth/Verify";
import DashLayout from "../pages/DashBoard/DashLayout";
import DashBoard from "../pages/DashBoard/Dashboard";
import HistoryCard from "../pages/DashBoard/HistoryCard";

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
        path: "register/:type",
        element: <Register />,
      },
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        index: true,
        path: "verify",
        element: <Verify />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashLayout/>,
    children: [
      {
        index: true,
        element: <DashBoard/>,
      },
      {
        index: true,
        path: "history",
        element: (
          <div className="flex w-[100px] justify-end">
            <div className="w-[calc(100% - 270px)] h-[100vh] overflow-hidden">
              <HistoryCard/>
            </div>
          </div>
        ),
      },
    ],
  },
]);
