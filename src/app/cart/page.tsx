import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

function Page() {
  return (
    <div className="flex flex-col gap-20 my-10 mx-4 sm:mx-6 lg:mx-24">
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="grid grid-cols-4 text-center items-center h-[72px] rounded-sm shadow-md px-4 sm:px-10 bg-white">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 sm:gap-10 rounded-sm shadow-md px-4 sm:px-10 py-6 bg-white">
            <div className="flex items-center gap-4 relative justify-center">
              <Image
                src="/images/flashSale/3.png"
                alt="LCD Monitor"
                width={50}
                height={50}
              />
              <p className="absolute -top-2 -left-2 p-[1px] rounded-full bg-[#db4444] text-white text-sm font-bold cursor-pointer">
                <RxCross2 />
              </p>
            </div>
            <p className="text-center sm:text-left">LCD Monitor</p>
            <p className="text-center">$650</p>
            <div className="flex justify-center">
              <input
                className="text-black w-[80px] px-3 h-[40px] border-2 border-gray-300 rounded-sm"
                type="number"
                placeholder="01"
              />
            </div>
            <p className="text-center">$650</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 sm:gap-10 rounded-sm shadow-md px-4 sm:px-10 py-6 bg-white">
            <div className="flex items-center gap-4 relative justify-center">
              <Image
                src="/images/flashSale/1.png"
                alt="H1 Gamepad"
                width={50}
                height={50}
              />
            </div>
            <p className="text-center sm:text-left">H1 Gamepad</p>
            <p className="text-center">$550</p>
            <div className="flex justify-center">
              <input
                className="text-black w-[80px] px-3 h-[40px] border-2 border-gray-300 rounded-sm"
                type="number"
                placeholder="02"
              />
            </div>
            <p className="text-center">$1100</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button className="w-full sm:w-[218px] h-[50px] rounded-md border-2 border-gray-300">
            Return To Shop
          </button>
          <button className="w-full sm:w-[195px] h-[50px] rounded-md border-2 border-gray-300">
            Update Cart
          </button>
        </div>
      </div>

      {/* Coupon and Total */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-wrap gap-4">
          <input
            className="flex-1 min-w-[200px] max-w-full h-[50px] border-2 border-gray-300 rounded-md pl-4"
            type="text"
            placeholder="Coupon Code"
          />
          <button className="w-full sm:w-auto h-[50px] rounded-md bg-[#db4444] text-white px-6">
            Apply Coupon
          </button>
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-[400px] border-2 border-gray-300 rounded-md px-6 py-8 bg-white">
          <p className="font-semibold text-lg">Cart Total</p>
          <div className="flex justify-between pb-2 border-b border-gray-200 text-sm">
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <div className="flex justify-between pb-2 border-b border-gray-200 text-sm">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between pb-2 border-b border-gray-200 text-sm">
            <p>Total:</p>
            <p>$1750</p>
          </div>
          <button className="w-full lg:w-auto h-[50px] mx-auto rounded-md bg-[#db4444] text-white px-8">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;