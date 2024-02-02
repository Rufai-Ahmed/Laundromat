import { NavLink, useLocation } from "react-router-dom";
import dummy from "../../Assets/dummy.jpg";
import logo from "../../Assets/logoname.png";
import { useState } from "react";
import Client from "./User";

export const Register = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div>
      <center className="">
        <img src={logo} className="scale-75 " />
      </center>
      {pathname.includes("/client") ? (
        <Client client={pathname.includes("/client")} />
      ) : pathname.includes("/provider") ? (
        <Client provider={pathname.includes("/provider")} />
      ) : (
        <div className="w-full flex items-center justify-center gap-7 flex-wrap py-40 md:py-0">
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
