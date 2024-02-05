import pix from "../../Assets/negative-emotions-and-house-chores-concept-astoni-2022-02-04-02-41-07-utc2.png";

const Work = () => {
	return (
		<div className="relative top-[700px] h-[100vh] w-full justify-center items-center flex max-sm:mt-[1400px] max-lg:mt-[950px] max-md:mt-[1450px] bg-[#F4F9FC]">
			<div className="h-[97vh] w-[97%] flex flex-wrap">
				<div className="w-[100%] lg:w-[45%] h-[100%] ">
					<img
						src={pix}
						alt=""
						className="w-[505px]"
					/>
				</div>
				<div className="w-[100%] lg:w-[55%] h-[100%]  flex justify-center items-center flex-col">
					<h1 className="f font-extrabold leading-[90px] text-[70px]">
						Getting Tired With Your Laundry?
					</h1>
					<p className="text-[20px] font-semibold mt-[20px]">
						Feeling weary from the never-ending laundry cycle? Say
						goodbye to the fatigue as we step in to handle the washday
						blues, offering you a haven of convenience where the
						burdens of sorting, washing, and folding are lifted off
						your shoulders. Our meticulous services promise not just
						clean clothes but a revitalized sense of time and energy,
						allowing you to escape the laundry monotony and relish
						moments of leisure.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Work;
