import { Outlet } from "react-router-dom";
import SiderDashboard from "./SiderDashboard";
import { useSelector } from "react-redux";
import Header2 from "./Header2";

const DashLayout = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div>
      <SiderDashboard />
      <div className="relative">
        <div className="w-full relative top-0 h-[60px] border flex justify-end">
          <Header2 />
        </div>
        <Outlet />
        {toggle && (
          <div className="flex w-full justify-end absolute top-0">
            <div
              className="w-[calc(100%-270px)] h-[100vh] overflow-hidden"
              style={{
                background: "rgba( 143, 200, 255, 0.08 )",
                backdropFilter: "blur(4px)",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashLayout;
