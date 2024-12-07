

import Image from "next/image"
import Link from "next/link"
import speaker from '../../public/images/speaker.png'

function SpeakerAd() {
  return (
   <div className="flex justify-center items-center">
     <div className='flex flex-col-reverse lg:flex-row gap-6 mx-5 sm:mx-24 my-10 px-5 max-w-7xl py-12 bg-black'>
      {/* Left Section */}
      <div className="flex flex-col gap-7 w-full">
        <p className="text-green-500 text-sm sm:text-base">Categories</p>
        <h1 className="text-3xl sm:text-5xl leading-tight sm:leading-[60px] text-white">
          Enhance Your Music Experience
        </h1>
        <div className="flex gap-3 sm:gap-5 flex-wrap justify-start sm:justify-start">
          <p className="flex flex-col leading-3 justify-center items-center w-[50px] sm:w-[55px] h-[50px] sm:h-[55px] bg-white rounded-full">
            <span>23</span>
            <span className="text-[10px] sm:text-[11px] font-semibold">Hours</span>
          </p>
          <p className="flex flex-col leading-3 justify-center items-center w-[50px] sm:w-[55px] h-[50px] sm:h-[55px] bg-white rounded-full">
            <span>05</span>
            <span className="text-[10px] sm:text-[11px] font-semibold">Days</span>
          </p>
          <p className="flex flex-col leading-3 justify-center items-center w-[50px] sm:w-[55px] h-[50px] sm:h-[55px] bg-white rounded-full">
            <span>59</span>
            <span className="text-[10px] sm:text-[11px] font-semibold">Minutes</span>
          </p>
          <p className="flex flex-col leading-3 justify-center items-center w-[50px] sm:w-[55px] h-[50px] sm:h-[55px] bg-white rounded-full">
            <span>35</span>
            <span className="text-[10px] sm:text-[11px] font-semibold">Seconds</span>
          </p>
        </div>
        <div className="flex flex-start">
        <Link className="py-3 sm:py-4 px-6 sm:px-12 bg-green-500 text-white text-sm sm:text-base" href={''}>
          Buy Now
        </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full  flex justify-center items-center">
        <Image id="dropShadow" className="w-[300px] sm:w-[600px] h-auto" src={speaker} alt="speaker" />
      </div>
    </div>
   </div>
  )
}

export default SpeakerAd
