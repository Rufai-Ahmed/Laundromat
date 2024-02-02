import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import pix from "../../Assets/logoname.png";

const Header = () => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className="w-full h-[10vh] bg-[#F4F9FC]  flex justify-center items-center">
			<div className="w-[97%] h-[90%] justify-between items-center flex">
				<img
					src={pix}
					alt=""
					className="w-[10%]"
				/>

				<div className="flex justify-between items-center w-[30%]">
					<div className="cursor-pointer">Home</div>
					<div className="cursor-pointer">About</div>
					<div
						className="flex items-center gap-2 cursor-pointer"
						onClick={toggleDropdown}
					>
						Pages
						<FaAngleDown className="cursor-pointer" />
						{isDropdownOpen && (
							<div className="dropdown-content absolute top-[8%] ">
								<div>Page 1</div>
								<div>Page 2</div>
								<div>Page 3</div>
							</div>
						)}
					</div>
					<button>Contact</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
