import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { CiMobile4, CiCamera } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import { PiHeadphones } from "react-icons/pi";
import { PiGameController } from "react-icons/pi";

function Category() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-6 my-24 px-12 w-full max-w-7xl ">
        {/* Header */}
        <div className="flex gap-4 items-center">
          <div className="w-5 h-10 bg-[#db4444] rounded-sm"></div>
          <p className="font-semibold text-[#db4444]">Categories</p>
        </div>

        {/* Title and Navigation */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-semibold">Browse By Category</h1>
          <div className="flex gap-2">
            <button className="flex justify-center items-center w-10 h-10 text-lg bg-[#f5f5f5] rounded-full hover:bg-[#db4444] hover:text-white transition-all">
              <FaArrowLeft />
            </button>
            <button className="flex justify-center items-center w-10 h-10 text-lg bg-[#f5f5f5] rounded-full hover:bg-[#db4444] hover:text-white transition-all">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {/* Card: Phones */}
          <div className="flex flex-col justify-center items-center w-full h-[140px] gap-3 border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
            <CiMobile4 className="text-4xl md:text-5xl" />
            <p className="text-sm md:text-base">Phones</p>
          </div>

          {/* Card: Computers */}
          <div className="flex flex-col justify-center items-center w-full h-[140px] gap-3 border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
            <HiOutlineComputerDesktop className="text-4xl md:text-5xl" />
            <p className="text-sm md:text-base">Computers</p>
          </div>

          {/* Card: SmartWatch */}
          <div className="flex flex-col justify-center items-center w-full h-[140px] gap-3 border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
            <TbDeviceWatchStats2 className="text-4xl md:text-5xl" />
            <p className="text-sm md:text-base">SmartWatch</p>
          </div>

          {/* Card: Camera */}
          <div className="flex flex-col justify-center items-center w-full h-[140px] gap-3 border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
            <CiCamera className="text-4xl md:text-5xl" />
            <p className="text-sm md:text-base">Camera</p>
          </div>

          {/* Card: HeadPhones */}
          <div className="flex flex-col justify-center items-center w-full h-[140px] gap-3 border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
            <PiHeadphones className="text-4xl md:text-5xl" />
            <p className="text-sm md:text-base">HeadPhones</p>
          </div>

          {/* Card: Gaming */}
          <div className="flex flex-col justify-center items-center w-full h-[140px] gap-3 border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
            <PiGameController className="text-4xl md:text-5xl" />
            <p className="text-sm md:text-base">Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
