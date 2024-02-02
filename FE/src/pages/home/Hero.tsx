import pix from "../../Assets/ele2.png";
import pix1 from "../../Assets/luandary-Man-removebg-preview.png";
import { GiSurferVan } from "react-icons/gi";
import { TbClock24 } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Hero = () => {
	return (
		<div className="w-full h-[95vh] bg-[#F4F9FC] justify-center items-center flex">
			<div className="w-[97%] h-[97%] flex relative flex-wrap">
				<div className="w-[100%]  lg:w-[45%] h-[100%] relative">
					<img
						src={pix}
						alt=""
						className="w-[25%]"
					/>
					<div className="absolute top-[20%] text-[90px] font-extrabold leading-[90px] ">
						WE DO LAUNDRY FOR YOU
					</div>
					<div className="absolute top-[70%] text-[20px]">
						We are the best at What we do You can <br /> ask around!!
					</div>
					<div className="absolute top-[75%] flex justify-between gap-5 mt-[40px]">
						<div className="p-5 bg-slate-500 rounded-xl cursor-pointer">
							Get Started
						</div>
						<div className="p-5 bg-red-200 rounded-xl cursor-pointer">
							Learn More
						</div>
					</div>
				</div>
				<div className="w-[100%]  lg:w-[55%] h-[100%]  relative">
					<div className="absolute top-[64%] right-[60%] w-[35%] h-[12%] bg-yellow-500 rounded-3xl flex justify-center items-center">
						<div className="w-[90%] flex ">
							<div className="h bg-red-500 w-[25%] h-[50px] items-center justify-center flex rounded-xl">
								<AiOutlineSafetyCertificate
									size={30}
									className="text-white"
								/>
							</div>
							<div className="g ml-[20px]">
								<p>Free Delivery</p>
								<p className="text-[13px]"> No charges included</p>
							</div>
						</div>
					</div>

					<div className="absolute top-[45%] right-[50%] w-[35%] h-[12%] bg-yellow-500 rounded-3xl flex justify-center items-center">
						<div className="w-[90%] flex">
							<div className="h bg-red-500 w-[25%] h-[50px] items-center justify-center flex rounded-xl">
								<TbClock24
									size={30}
									className="text-white"
								/>
							</div>
							<div className="ml-[20px]">
								<p>Open 24 Hours</p>
								<p className="text-[13px]">All time All Day</p>
							</div>
						</div>
					</div>

					<div className="absolute top-[23%] right-[50%] w-[300px]  h-[12%] bg-yellow-500 rounded-3xl flex justify-center items-center ">
						<div className="w-[90%] flex">
							<div className="h bg-red-500 w-[25%] h-[50px] items-center justify-center flex rounded-xl">
								<GiSurferVan
									size={30}
									className="text-white"
								/>
							</div>
							<div className="ml-[20px]">
								<p>Safety Guaranteed</p>
								<p className="text-[13px]">
									receive your goods safely
								</p>
							</div>
						</div>
					</div>
					<img
						src={pix1}
						className="w-[90%] ml-[10%]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
