

import Link from "next/link";
import ProductsCard from "./ProductsCard";
import BS1 from '../../public/images/bestSelling/1.png'
import BS2 from '../../public/images/bestSelling/2.png'
import BS3 from '../../public/images/bestSelling/3.png'
import BS4 from '../../public/images/bestSelling/4.png'

function BestSelling() {
  return (
    <div className="flex justify-center items-center">
      <div className='flex flex-col gap-5 mx-5 sm:mx-16 lg:mx-24 my-16 sm:my-12'>
      <div className='flex gap-4 items-center'>
        <div className='w-5 h-10 bg-[#db4444] rounded-sm'></div>
        <p className='font-semibold text-[#db4444]'>This Month</p>
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-6 items-center'>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Best Selling Products</h1>
        </div>
        <Link className="py-3 px-6 sm:py-3 sm:px-12 bg-[#db4444] text-white rounded-sm text-sm sm:text-base" href={''}>
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
        <ProductsCard
          image={BS1}
          productAlt="coat"
          name="The North Coat"
          price={260}
          discountPercentage={360}
         
        />
        <ProductsCard
          image={BS2}
          productAlt="bag"
          name="Gucci duffle bag"
          price={960}
          discountPercentage={1160}
      
        />
        <ProductsCard
          image={BS3}
          productAlt="cpu cooler"
          name="rgb liquid cpu cooler"
          price={160}
          discountPercentage={170}
        
        />
        <ProductsCard
          image={BS4}
          productAlt="book shelf"
          name="Small BookShelf"
          price={360}
          discountPercentage={360}
         
        />
      </div>
    </div>
    </div>
  );
}

export default BestSelling;
