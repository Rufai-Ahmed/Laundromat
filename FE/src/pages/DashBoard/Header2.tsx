import img2 from "../../Assets/logo.png"


const Header2 = () => {
  return (
    <div className="font-700  w-[calc(100%-256px)] flex justify-between items-center">
      <div className="h-[40px] w-[40px] rounded-[50%] shadow-md flex justify-center items-center ml-[15px]">
        <img src={img2} alt="" />
      </div>
      <div className="flex justify-between items-center w-[12%] mr-[12px]">
        <div className="h-[40px] w-[40px] rounded-[50%] shadow-md overflow-hidden">
          <img src={img2} alt="" />
        </div>
        <button className="border p-2 mr-[15px] rounded-md font-[700]">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header2;
