

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductsCard from "./ProductsCard";
import Link from "next/link";
import EP1 from '../../public/images/explorePRoducts/1.png'
import EP2 from '../../public/images/explorePRoducts/2.png'
import EP3 from '../../public/images/explorePRoducts/3.png'
import EP4 from '../../public/images/explorePRoducts/4.png'
import EP5 from '../../public/images/explorePRoducts/5.png'
import EP6 from '../../public/images/explorePRoducts/6.png'
import EP7 from '../../public/images/explorePRoducts/7.png'
import EP8 from '../../public/images/explorePRoducts/8.png'

function ExploreProducts() {
  return (
   <div className="flex justify-center items-center">
     <div className="flex flex-col gap-5 mx-5 sm:mx-24 my-10 sm:my-32 max-w-7xl">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#db4444] rounded-sm"></div>
        <p className="font-semibold text-[#db4444] text-lg sm:text-xl">Our Products</p>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold">Explore Our Products</h1>
        <div className="flex gap-2">
          <p className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full">
            <FaArrowLeft />
          </p>
          <p className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full">
            <FaArrowRight />
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
        <ProductsCard 
          image={EP1}
          productAlt="pet food"
          name="breed dry dog food"
          price={100}
          discountPercentage={120}
                  />
        <ProductsCard 
          image={EP2}
          productAlt="canon camera"
          name="canon eos dslr camera"
          price={960}
          discountPercentage={1200}
                  />
        <ProductsCard 
          image={EP3}
          productAlt="asus laptop"
          name="asus fhd gaming laptop"
          price={700}
          discountPercentage={900}
                  />
        <ProductsCard 
          image={EP4}
          productAlt="curlogy products"
          name="Curlogy Product Set"
          price={300}
          discountPercentage={350}
                  />
        <ProductsCard 
          image={EP5}
          productAlt="electric car"
          name="Kids electric car"
          price={1200}
          discountPercentage={1500}
                  />
        <ProductsCard 
          image={EP6}
          productAlt="soccer shoes"
          name="jr zoom soccer cleats"
          price={400}
          discountPercentage={420}
                  />
        <ProductsCard 
          image={EP7}
          productAlt="gamepad"
          name="gp11 shooter usb gamepad"
          price={360}
          discountPercentage={400}
                  />
        <ProductsCard 
          image={EP8}
          productAlt="jacket"
          name="Quilted satin jacket"
          price={660}
          discountPercentage={700}
                  />
      </div>

      <Link className="py-3 sm:py-4 px-8 sm:px-12 bg-[#db4444] w-[180px] sm:w-[234px] rounded-sm mx-auto mt-8 text-white text-sm sm:text-base" href={''}>View All Products</Link>
    </div>
   </div>
  );
}

export default ExploreProducts;
