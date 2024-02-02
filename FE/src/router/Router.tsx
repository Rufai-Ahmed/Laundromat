import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/home/HomeScreen";
import { Layout } from "../pages/auth/Layout";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import DashLayout from "../DashBoard.tsx/DashLayout";
import DashBoard from "../DashBoard.tsx/Dashboard";
import HistoryCard from "../DashBoard.tsx/HistoryCard";

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
