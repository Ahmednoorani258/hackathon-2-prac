import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductsCard from "./ProductsCard";
import FS1 from "../../public/images/flashSale/1.png";
import FS2 from "../../public/images/flashSale/2.png";
import FS3 from "../../public/images/flashSale/3.png";
import FS4 from "../../public/images/flashSale/4.png";
import Link from "next/link";

function FlashSales() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-8 px-4 lg:px-16 my-16">
        {/* Flash Sales Header */}
        <div className="flex flex-col gap-4 items-start">
          {/* Today's Label */}
          <div className="flex gap-2 ">
            <div className="w-2 h-8 bg-[#db4444] rounded-sm"></div>
            <p className="font-semibold text-[#db4444] text-lg">Today's</p>
          </div>

          {/* Flash Sales Title and Timer */}
          <div className="flex  lg:flex-row justify-between w-full items-center lg:items-start">
            <div className="flex flex-row items-center lg:gap-8 gap-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
                Flash Sales
              </h1>

              {/* Timer */}
              <div className="flex gap-4 ">
                {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
                  <div key={unit} className="hidden sm:block flex flex-col items-center text-center">
                    <p className="text-xs">{unit}</p>
                    <p className="text-2xl lg:text-3xl font-bold text-[#db4444]">
                      {["03", "23", "19", "56"][index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-4 mt-4 lg:mt-0">
              <button className="flex justify-center items-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full">
                <FaArrowLeft className="text-gray-600" />
              </button>
              <button className="flex justify-center items-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full">
                <FaArrowRight className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
          <ProductsCard
            image={FS1}
            productAlt="Gamepad"
            title="HAVIT HV-G92 Gamepad"
            price={120}
            cutPrice={160}
            reviewStars={5}
            reviewCount={88}
          />
          <ProductsCard
            image={FS2}
            productAlt="Keyboard"
            title="AK-900 Wired Keyboard"
            price={960}
            cutPrice={1160}
            reviewStars={4}
            reviewCount={75}
          />
          <ProductsCard
            image={FS3}
            productAlt="Monitor"
            title="IPS LCD Gaming Monitor"
            price={370}
            cutPrice={400}
            reviewStars={5}
            reviewCount={99}
          />
          <ProductsCard
            image={FS4}
            productAlt="Chair"
            title="S-Series Comfort Chair"
            price={375}
            cutPrice={400}
            reviewStars={4}
            reviewCount={98}
          />
        </div>


        {/* View All Products Button */}
        <div className="flex justify-center items-center">
        <Link
          href="/products"
          className="py-4 px-12 bg-[#db4444] text-white text-center text-lg font-medium rounded-md mx-auto lg:mx-0"
        >
          View All Products
        </Link>
        </div>
      </div>
    </div>
  );
}

export default FlashSales;
