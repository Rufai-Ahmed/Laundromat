import dummy from "../../Assets/dummy.jpg";

export const Register = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center h-screen gap-7 flex-wrap py-40 md:py-0">
        <div className="card card-bordered border-blue-600 border-[4px] cursor-pointer transition-all duration-300 hover:shadow-xl w-[360px]">
          <figure>
            <img src={dummy} alt="Client" className=" w-full" />
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
        </div>
        <div className="card card-bordered border-blue-600 border-[4px] cursor-pointer transition-all duration-300 hover:shadow-xl w-[360px]">
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
        </div>
      </div>
    </div>
  );
};
