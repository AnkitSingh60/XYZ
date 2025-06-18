import Link from "next/link";
import React from "react";
import LeftArrowIcon from "./icons/LeftArrowIcon";

const Navbar = () => {
  return (
    <>
      {/* Navigation Bar */}

      <div className="mt-[21px] mx-[20px] absolute h-[101px] top-0 left-0 right-0 bg-[#FFFFFF] z-10 flex justify-between items-center px-4 shadow-sm">
        <div className="w-[48px] h-[48px] bg-[#F9F4EE] md:hidden flex justify-center items-center cursor-pointer">
          <button className="w-8 h-8 flex flex-col justify-between items-center p-[6px] cursor-pointer">
            <span className="block w-[22px] h-[1.5px] bg-[#221F20]"></span>
            <span className="block w-[18px] h-[1.5px] bg-[#221F20]"></span>
            <span className="block w-[22px] h-[1.5px] bg-[#221F20]"></span>
          </button>
        </div>
        <div className="mt-[40px] mb-[41px] ml-[39px]">
          <nav className="hidden md:flex space-x-[20px] text-sm text-black">
            <Link
              href="#"
              //   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              About
            </Link>
            <Link
              href="#"
              //   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              News
            </Link>
            <Link
              href="#"
              //   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="#"
              //   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Our Team
            </Link>
            <Link
              href="#"
              //   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Make Enquiry
            </Link>
          </nav>
        </div>
        <div className="mt-[32px] mb-[33px] md:mr-[33px]">
          <button className="w-[148px] h-[36px] border border-black text-sm flex px-[16px] gap-[16px] items-center cursor-pointer">
            Contact us
            <LeftArrowIcon className="w-6 h-8 text-[#221F20]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
