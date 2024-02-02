import { FaArrowRight } from "react-icons/fa";
import pix from "../../Assets/vanIMG.png";
import pix1 from "../../Assets/ironIMG.png";
import pix2 from "../../Assets/ScaleIMAG.png";
import pix3 from "../../Assets/clothIMG.png";

const Service = () => {
	return (
		<div className="w-full min-h-[100%] justify-center items-center flex flex-wrap absolute max-sm:mt-[450px] mb-[450px]">
			<div className="w-[97%] min-h-[90vh]  flex justify-center items-center flex-col">
				<div className="text-[70px] font-extrabold">Our Services</div>

				<div className="w-[100%] grid lg:grid-cols-4 md:grid-cols-2 gap-5  ">
					<div className=" h-[400px] bg-[#E8F6FF] mt-[40px] rounded-xl flex justify-center items-center flex-col">
						<div className="min-h-[30%] w-[40%] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center border-orange-700">
							<img
								src={pix}
								alt=""
								className="w-[70%]"
							/>
						</div>
						<div>
							<h1 className="f font-extrabold text-[30px] mb-[20px]">
								Laundry Pickup
							</h1>
						</div>
						<div>
							<p className="t text-center mb-[20px]">
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut elit tellus, luctus nec
							</p>
						</div>
						<div className="flex items-center">
							<a href="">Learn More</a>
							<FaArrowRight />
						</div>
					</div>
					<div className=" h-[100%] lg:h-[80%]  bg-[#E8F6FF] mt-[40px] rounded-xl flex justify-center items-center flex-col">
						<div className="h-[30%] w-[40%] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center ">
							<img
								src={pix1}
								alt=""
								className="w-[70%]"
							/>
						</div>
						<div>
							<h1 className="f font-extrabold text-[30px] mb-[20px]">
								Wash And Fold
							</h1>
						</div>
						<div>
							<p className="t text-center mb-[20px]">
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut elit tellus, luctus nec
							</p>
						</div>
						<div className="flex items-center">
							<a href="">Learn More</a>
							<FaArrowRight />
						</div>
					</div>
					<div className=" h-[100%] lg:h-[80%]  bg-[#E8F6FF] mt-[40px] rounded-xl flex justify-center items-center flex-col">
						<div className="h-[30%] w-[40%] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center ">
							<img
								src={pix2}
								alt=""
								className="w-[70%]"
							/>
						</div>
						<div>
							<h1 className="f font-extrabold text-[30px] mb-[20px]">
								Bulk Discount
							</h1>
						</div>
						<div>
							<p className="t text-center mb-[20px]">
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut elit tellus, luctus nec
							</p>
						</div>
						<div className="flex items-center">
							<a href="">Learn More</a>
							<FaArrowRight />
						</div>
					</div>
					<div className=" h-[100%] lg:h-[80%]  bg-[#E8F6FF] mt-[40px] rounded-xl flex justify-center items-center flex-col">
						<div className="h-[30%] w-[40%] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center ">
							<img
								src={pix3}
								alt=""
								className="w-[70%]"
							/>
						</div>
						<div>
							<h1 className="f font-extrabold text-[30px] mb-[20px]">
								Dry Cleaning
							</h1>
						</div>
						<div>
							<p className="t text-center mb-[20px]">
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut elit tellus, luctus nec
							</p>
						</div>
						<div className="flex items-center">
							<a href="">Learn More</a>
							<FaArrowRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
