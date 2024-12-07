import { AiOutlineTruck, AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiHeadsetLight } from "react-icons/pi";

function Support() {
  return (
    <div className="flex justify-center items-center">
      <div className="px-4 sm:px-8 lg:px-24 flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-[88px] my-12 sm:my-16">
        {/* Free and Fast Delivery */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center items-center bg-[#b2b2b2] w-[90px] h-[90px] rounded-full p-[6px] sm:w-[100px] sm:h-[100px]">
            <div className="flex justify-center items-center bg-black p-[10px] sm:p-[12px] rounded-full w-full h-full">
              <AiOutlineTruck className="text-white text-3xl sm:text-4xl" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold uppercase">Free and Fast Delivery</h1>
            <p className="text-xs sm:text-sm lg:text-base">Free delivery for all orders over $140</p>
          </div>
        </div>

        {/* 24/7 Customer Service */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center items-center bg-[#b2b2b2] w-[90px] h-[90px] rounded-full p-[6px] sm:w-[100px] sm:h-[100px]">
            <div className="flex justify-center items-center bg-black p-[10px] sm:p-[12px] rounded-full w-full h-full">
              <PiHeadsetLight className="text-white text-3xl sm:text-4xl" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold uppercase">24/7 Customer Service</h1>
            <p className="text-xs sm:text-sm lg:text-base">Friendly 24/7 customer support</p>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center items-center bg-[#b2b2b2] w-[90px] h-[90px] rounded-full p-[6px] sm:w-[100px] sm:h-[100px]">
            <div className="flex justify-center items-center bg-black p-[10px] sm:p-[12px] rounded-full w-full h-full">
              <AiOutlineSafetyCertificate className="text-white text-3xl sm:text-4xl" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold uppercase">Money Back Guarantee</h1>
            <p className="text-xs sm:text-sm lg:text-base">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
