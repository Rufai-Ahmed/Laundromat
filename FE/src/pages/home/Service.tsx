import { FaArrowRight } from "react-icons/fa";
import pix from "../../Assets/vanIMG.png";
import pix1 from "../../Assets/ironIMG.png";
import pix2 from "../../Assets/ScaleIMAG.png";
import pix3 from "../../Assets/clothIMG.png";

const Service = () => {
	return (
		<div className="w-full min-h-[100%] justify-center items-center flex flex-wrap absolute max-sm:mt-[450px] max-lg:mt-[700px] max-md:mt-[530px] mb-[450px] ">
			<div className="w-[97%] min-h-[90vh]  flex justify-center items-center flex-col">
				<div className="text-[70px] font-extrabold">Our Services</div>

				<div className="w-[100%] grid lg:grid-cols-4 md:grid-cols-2 gap-5  ">
					<div className=" h-[100%] lg:h-[95%] bg-[#E8F6FF] mt-[40px] rounded-xl flex justify-center items-center flex-col">
						<div className="min-h-[30px] h-[130px] w-[130px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center border-orange-700">
							<img
								src={pix}
								alt=""
								className="w-[70px]"
							/>
						</div>
						<div>
							<h1 className="f font-extrabold text-[30px] mb-[20px]">
								Laundry Pickup
							</h1>
						</div>
						<div>
							<p className="t text-center mb-[20px]">
								👚🚗 Laundry piling up? We've got you! Schedule a
								pickup, we'll handle the rest. Fresh, clean clothes
								delivered to your door. Easy peasy! 🧺✨ #LaundryEase
							</p>
						</div>
						<div className="flex items-center">
							<a href="">Learn More</a>
							<FaArrowRight />
						</div>
					</div>
					<div className=" h-[100%] lg:h-[95%]  bg-[#E8F6FF] mt-[40px] rounded-xl flex justify-center items-center flex-col">
						<div className="min-h-[30px] h-[130px] w-[130px]  bg-[#FFFFFF] rounded-[50%] flex justify-center items-center ">
							<img
								src={pix1}
								alt=""
								className="w-[70px]"
							/>
						</div>
						<div>
							<h1 className="f font-extrabold text-[30px] mb-[20px]">
								Wash And Fold
							</h1>
						</div>
						<div>
							<p className="t text-center mb-[20px]">
								Elevate your laundry game with our Wash and Fold
								service! 🌟 Drop off, relax, and pick up neatly folded
								freshness. Time-saving simplicity at its best! 🧺✨
								#LaundryMadeEasy
							</p>
						</div>
						<div className="flex items-center">
							<a href="">Learn More</a>
							<FaArrowRight />
						</div>
					</div>
					<div className=" h-[100%] lg:h-[95%]  bg-[#E8F6FF] mt-[40px] rounded-xl flex justify-center items-center flex-col">
						<div className="min-h-[30px] h-[130px] w-[130px]  bg-[#FFFFFF] rounded-[50%] flex justify-center items-center ">
							<img
								src={pix2}
								alt=""
								className="w-[70px]"
							/>
						</div>
						<div>
							<h1 className="f font-extrabold text-[30px] mb-[20px]">
								Bulk Discount
							</h1>
						</div>
						<div>
							<p className="t text-center mb-[20px]">
								👕✨ Introducing our Bulk Discount Bonanza! 🌟 Save
								big on loads of freshness with our exclusive bulk
								discounts. The more you launder, the more you save!!.
							</p>
						</div>
						<div className="flex items-center">
							<a href="">Learn More</a>
							<FaArrowRight />
						</div>
					</div>
					<div className=" h-[100%] lg:h-[95%]  bg-[#E8F6FF] mt-[40px] rounded-xl flex justify-center items-center flex-col">
						<div className="min-h-[30px] h-[130px] w-[130px]  bg-[#FFFFFF] rounded-[50%] flex justify-center items-center ">
							<img
								src={pix3}
								alt=""
								className="w-[70px]"
							/>
						</div>
						<div>
							<h1 className="f font-extrabold text-[30px] mb-[20px]">
								Dry Cleaning
							</h1>
						</div>
						<div>
							<p className="t text-center mb-[20px]">
								Discover the epitome of garment care with our Dry
								Cleaning service! 🧼✨ We pamper your clothes with
								precision, ensuring they emerge refreshed and ready to
								make a lasting statement. #LaundryLuxury
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
