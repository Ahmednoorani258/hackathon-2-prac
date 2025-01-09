import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { randomStars, randomReview } from "@/helper/random";

interface Products {
  imageUrl: string ;
  productAlt: string;
  name: string;
  price: number;
  discountPercentage: number;
 
}


  

  
  


function ProductsCard({
  imageUrl,
  productAlt,
  name,
  price,
  discountPercentage,
}: Products) {
  return (
    <div className="flex flex-col gap-4 bg-white border rounded-lg shadow hover:shadow-md transition p-4">
      {/* Product Image */}
      <div
        id="product"
        className="relative flex justify-center items-center w-full h-[250px] bg-[#f5f5f5] overflow-hidden rounded"
      >
        <Image
          src={imageUrl}
          alt={productAlt}
          height={280}
          width={280}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
        {/* Add to Cart Hover */}
        <div
          id="cart"
          className="absolute left-0 bottom-0 translate-y-full w-full bg-black text-white py-2 flex justify-center items-center gap-2 transition-all duration-300 group-hover:translate-y-0 cursor-pointer"
        >
          <IoCartOutline className="text-xl" />
          <p className="text-xs">Add To Cart</p>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-start">
        {/* Title */}
        <p className="text-sm font-medium uppercase text-gray-800">{name}</p>
        {/* Price */}
        <div className="flex gap-3 text-sm mt-2">
          <span className="text-[#bd4444] font-bold">${price}</span>
          <span className="text-gray-500 line-through relative">
            ${discountPercentage}
            <small className="w-[40px] h-[1px] bg-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2"></small>
          </span>
        </div>
        {/* Reviews */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {Array.from({ length: randomStars() }, (_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xs" />
            ))}
          </div>
          <span className="text-xs text-gray-500">{randomReview()}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
