import { VscSend } from "react-icons/vsc";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import Image from "next/image"

export default function Footer() {
    return (
       <div className="bg-black text-white flex flex-col justify-center items-center">
         <footer id="footer" className="max-w-7xl px-[50px] md:px-12 flex flex-col flex-wrap sm:flex-row justify-between w-full py-20  gap-8 items-top">
            <div className="max-w-[300px] space-y-5" >
                <h2>Exclusive</h2>
                <h4>Subscribe</h4>
                <p>Get 10% off your first order</p>
                <div className="flex">
                    <input type="text" placeholder="Enter your email" name="text"/>
                    <VscSend/>
                </div>
            </div>
            <div className="max-w-[175px] space-y-4">
                <h2>Support</h2>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="space-y-4">
                <h2>Account</h2>
                <p>My Acoount</p>
                <p>Login/Register</p>
                <p>Cart</p>
                <p>WishList</p>
                <p>Shop</p>
            </div>
            <div className="space-y-4">
                <h2>Quick Link</h2>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className="space-y-4">
                <div className="h-[162px] space-y-4">
                <h2>Download App</h2>
                <p>Save $3 with App new users only</p>
                <div className="flex"> 
                    <Image src={"/images/footerImages/image.png"} alt="footerimage" width={180} height={80}/>
                </div>
                </div>
                <div className="flex h-4 gap-5">
                    <BiLogoFacebook className="h-[24px] w-[24px]"/>
                    <FiTwitter className="h-[24px] w-[24px]"/>
                    <FaInstagram className="h-[24px] w-[24px]"/>
                    <RiLinkedinLine className="h-[24px] w-[24px]"/>
                </div>
            </div>
        </footer>
        <p className="text-center opacity-50">Copyright Rimel 2022. All right reserved</p>
       </div>
    );
}