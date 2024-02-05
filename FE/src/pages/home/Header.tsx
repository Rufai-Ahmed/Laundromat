// import { FaAngleDown, FaBars } from "react-icons/fa";
// import { useState } from "react";
// import pix from "../../Assets/logoname.png";

// const Header = () => {
// 	const [isDropdownOpen, setDropdownOpen] = useState(false);
// 	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

// 	const toggleDropdown = () => {
// 		setDropdownOpen(!isDropdownOpen);
// 	};

// 	const toggleMobileMenu = () => {
// 		setMobileMenuOpen(!isMobileMenuOpen);
// 	};

// 	return (
// 		<div className="w-full h-16 bg-[#F4F9FC] flex justify-center items-center">
// 			<div className="w-11/12 h-3/4 justify-between items-center flex">
// 				<img
// 					src={pix}
// 					alt=""
// 					className="w-1/6"
// 				/>

// 				<div className="hidden md:flex justify-between items-center w-2/5">
// 					<div className="cursor-pointer">Home</div>
// 					<div className="cursor-pointer">About</div>
// 					<div
// 						className="flex items-center gap-2 cursor-pointer relative"
// 						onClick={toggleDropdown}
// 					>
// 						Pages
// 						<FaAngleDown className="cursor-pointer" />
// 						{isDropdownOpen && (
// 							<div className="dropdown-content absolute top-full left-0 bg-white border border-gray-300 rounded-md">
// 								<div className="py-2 px-4">Page 1</div>
// 								<div className="py-2 px-4">Page 2</div>
// 								<div className="py-2 px-4">Page 3</div>
// 							</div>
// 						)}
// 					</div>
// 					<button>Contact</button>
// 				</div>

// 				<div
// 					className="md:hidden cursor-pointer"
// 					onClick={toggleMobileMenu}
// 				>
// 					<FaBars className="text-2xl" />
// 				</div>

// 				{isMobileMenuOpen && (
// 					<div className="md:hidden fixed z-10 left-0 bg-white border border-gray-300 rounded-md h-[100%] w-[100%] top-[0px]">
// 						<div className="py-2 px-4">Home</div>
// 						<div className="py-2 px-4">About</div>
// 						<div className="py-2 px-4">Pages</div>

// 						<div className="py-2 px-4">Contact</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Header;

import { FaAngleDown, FaBars } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import { useState } from "react";
import pix from "../../Assets/logoname.png";

const Header = () => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className="w-full h-16 bg-[#F4F9FC] flex justify-center items-center">
			<div className="w-11/12 h-3/4 justify-between items-center flex">
				<img
					src={pix}
					alt=""
					className="w-[10%]"
				/>

				<div className="hidden md:flex justify-between items-center w-2/5">
					<div className="cursor-pointer">Home</div>
					<div className="cursor-pointer">About</div>
					<div
						className="flex items-center gap-2 cursor-pointer relative"
						onClick={toggleDropdown}
					>
						Pages
						<FaAngleDown className="cursor-pointer" />
						{isDropdownOpen && (
							<div className=" absolute top-full left-0 bg-white border border-gray-300 rounded-md z-10 w-[160px] h-[130px]">
								<div className="py-2 px-4 font-bold hover:bg-slate-300 cursor-pointer hover:rounded-lg">
									Service
								</div>
								<div className="py-2 px-4 font-bold hover:bg-slate-300 cursor-pointer hover:rounded-lg">
									Price
								</div>
								<div className="py-2 px-4 font-bold hover:bg-slate-300 cursor-pointer hover:rounded-lg">
									Testimonial
								</div>
							</div>
						)}
					</div>
					<button>Contact</button>
				</div>

				<div
					className="md:hidden cursor-pointer"
					onClick={toggleMobileMenu}
				>
					<FaBars className="text-2xl" />
				</div>

				{isMobileMenuOpen && (
					<div className="md:hidden fixed z-10 left-0 bg-white border border-gray-300 rounded-md h-[100%] w-[100%] top-[0px]">
						<MdCancelPresentation
							className="absolute top-4 right-4 text-2xl cursor-pointer"
							onClick={toggleMobileMenu}
						/>
						<div className="py-2 px-4">Home</div>
						<div className="py-2 px-4">About</div>
						<div className="py-2 px-4">Pages</div>
						<div className="py-2 px-4">Contact</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
