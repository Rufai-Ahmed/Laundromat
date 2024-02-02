import { NavLink, useLocation } from "react-router-dom";
import dummy from "../../Assets/dummy.jpg";
import logo from "../../Assets/logoname.png";
import { useState } from "react";

export const Register = () => {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  return (
    <div className="">
      <center className="absolute top-5 w-full justify-center">
        <img src={logo} className="scale-75" />
      </center>
      {pathname.includes("/client") ? (
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-full flex items-center flex-col">
            <div
              className="min-w-[310px] relative"
              onClick={() => setClick(true)}
            >
              <label
                className={`absolute left-3 ${click ? "-top-7" : "top-3"}`}
              >
                Email
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered bg-white input-info w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center h-screen gap-7 flex-wrap py-40 md:py-0">
          <NavLink
            to="client"
            className="card card-bordered border-blue-600 border-[4px] cursor-pointer transition-all duration-300 hover:shadow-xl w-[280px] hover:scale-105 min-h-[400px]"
          >
            <figure>
              <img src={dummy} alt="Client" className=" w-[100%]" />
            </figure>
            <div className="card-body">
              <center className="card-title w-full justify-center">
                Register as a Client
              </center>
              <center>
                Sign up and request for your clothes to be washed and drycleaned
              </center>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-blue-600 mt-4 text-white">
                  Sign Up
                </button>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="provider"
            className="card card-bordered border-blue-600 border-[4px] cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 w-[270px]"
          >
            <figure>
              <img src={dummy} alt="Client" className=" w-full" />
            </figure>
            <div className="card-body">
              <center className="card-title w-full justify-center">
                Register as a Service Provider
              </center>
              <center>
                Sign up to get requests for clothes to be washed and drycleaned
              </center>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-blue-600 mt-4 text-white">
                  Sign Up
                </button>
              </div>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};
