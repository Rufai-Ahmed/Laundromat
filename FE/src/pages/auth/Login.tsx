import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginProvider } from "../../APIs/clientAPI";
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    LoginProvider({ email, password }).then((res) => {
      console.log("thid is login", res);
      const decode: any = jwtDecode(res?.data)?.id;
      console.log(decode);
    });
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      {" "}
      <div className="w-full flex justify-center ">
        <div className="w-[400px] flex items-center space-y-10 flex-col">
          <div
            className="relative w-full"
            onClick={() => setClick(true)}
            onBlur={() => setClick(email ? true : false)}
          >
            <label
              className={`absolute transition-all duration-300 ${
                click ? "-top-7" : "top-3 left-3"
              }`}
            >
              Email
            </label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input input-bordered bg-white input-info w-full "
            />
          </div>
          <div className=" relative w-full">
            <label
              className={`absolute transition-all duration-300 ${
                click1 ? "-top-7" : "top-3 left-3"
              }`}
            >
              Password
            </label>
            <input
              type="text"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                setClick1(password ? true : false);
              }}
              onClick={() => {
                setClick1(true);
              }}
              className="input input-bordered bg-white input-info w-full "
            />
            <button
              onClick={() => {
                handleSubmit();
                console.log("first");
              }}
              className="btn btn-primary text-white text-[17px] bg-blue-600 mt-10 w-full"
            >
              Login
            </button>

            <center className="mt-3">
              Don't have an account?{" "}
              <NavLink className="text-blue-600" to="/auth/register">
                Register here
              </NavLink>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};
