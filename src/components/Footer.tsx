import { VscSend } from "react-icons/vsc";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black text-white flex flex-col items-center">
      <footer
        id="footer"
        className="w-full max-w-7xl px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row flex-wrap justify-between gap-10 py-10"
      >
        {/* Subscribe Section */}
        <div className="flex-1 max-w-[300px] space-y-5">
          <h2 className="text-xl font-bold">Exclusive</h2>
          <h4 className="text-lg font-semibold">Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
            <input
              className="w-full px-4 py-2 text-black outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-[#db4444] p-2">
              <VscSend className="text-white text-lg" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex-1 max-w-[175px] space-y-4">
          <h2 className="text-xl font-bold">Support</h2>
          <p className="text-sm">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-xl font-bold">Account</h2>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login/Register</li>
            <li>Cart</li>
            <li>WishList</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-xl font-bold">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Download App</h2>
            <p className="text-sm">Save $3 with App new users only</p>
            <div className="w-[180px]">
              <Image
                src="/images/footerImages/image.png"
                alt="Download App"
                width={180}
                height={80}
                className="rounded-md"
              />
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4">
            <BiLogoFacebook className="h-[24px] w-[24px] cursor-pointer hover:text-[#db4444]" />
            <FiTwitter className="h-[24px] w-[24px] cursor-pointer hover:text-[#db4444]" />
            <FaInstagram className="h-[24px] w-[24px] cursor-pointer hover:text-[#db4444]" />
            <RiLinkedinLine className="h-[24px] w-[24px] cursor-pointer hover:text-[#db4444]" />
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <p className="text-center text-sm opacity-50 py-4">
        Copyright Rimel 2022. All rights reserved.
      </p>
    </div>
  );
}