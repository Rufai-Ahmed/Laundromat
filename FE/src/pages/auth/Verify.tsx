import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { verifyProvider } from "../../APIs/clientAPI";

const Verify = () => {
  const navigate = useNavigate();
  const [click1, setClick1] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const Handlesubmit = () => {
    verifyProvider({ token: token })
      .then((res) => {
        console.log(res, "verified");
      })
      .then(() => {
        navigate("/auth/login");
      });
  };
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      {" "}
      <div className="w-full flex justify-center ">
        <div className="w-[400px] flex items-center space-y-10 flex-col">
          <div className=" relative w-full">
            <label
              className={`absolute transition-all duration-300 ${
                click1 ? "-top-7" : "top-3 left-3"
              }`}
            >
              token
            </label>
            <input
              type="text"
              placeholder="enter verification token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              onBlur={() => {
                setClick1(token ? true : false);
              }}
              onClick={() => {
                setClick1(true);
              }}
              className="input input-bordered bg-white input-info w-full "
            />
            <button
              className="btn btn-primary text-white text-[17px] bg-blue-600 mt-10 w-full"
              onClick={Handlesubmit}
            >
              Verify
            </button>

            <center className="mt-3">
              Have an account?{" "}
              <NavLink className="text-blue-600" to="/auth/login/client">
                Log in here
              </NavLink>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
