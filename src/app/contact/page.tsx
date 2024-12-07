import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

function Page() {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-24 my-10 lg:my-20">
      {/* Breadcrumb */}
      <div className="flex flex-wrap gap-2 items-center mt-8 lg:mt-16 mb-6 lg:mb-10 text-sm lg:text-base">
        <Link className="text-gray-500" href={'/'}>
          Home
        </Link>
        <p>/</p>
        <Link className="text-gray-700 font-medium" href={'/contact'}>
          Contact
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Contact Information */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 p-6 lg:p-8 shadow-md rounded-sm">
          <div className="flex items-center gap-4">
            <p className="bg-[#db4444] text-white rounded-full text-xl p-2">
              <FiPhone />
            </p>
            <p className="font-semibold text-lg">Call To Us</p>
          </div>
          <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
          <p className="text-sm text-gray-600">Phone: +923102858075</p>
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center gap-4">
            <p className="bg-[#db4444] text-white rounded-full text-xl p-2">
              <AiOutlineMail />
            </p>
            <p className="font-semibold text-lg">Write To Us</p>
          </div>
          <p className="text-sm text-gray-600">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm text-gray-600">shehzadrahim@gmail.com</p>
          <p className="text-sm text-gray-600">exclusive@gmail.com</p>
        </div>

        {/* Contact Form */}
        <div className="w-full flex flex-col gap-6 p-6 lg:p-8 shadow-md rounded-sm">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <input
              className="bg-gray-100 py-3 px-4 w-full sm:w-[calc(50%-0.5rem)] outline-none rounded-sm"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-gray-100 py-3 px-4 w-full sm:w-[calc(50%-0.5rem)] outline-none rounded-sm"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="bg-gray-100 py-3 px-4 w-full sm:w-[calc(50%-0.5rem)] outline-none rounded-sm"
              type="text"
              placeholder="Your Phone"
            />
          </div>
          <textarea
            className="bg-gray-100 py-3 px-4 outline-none rounded-sm resize-none"
            rows={6}
            placeholder="Your Message"
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-[#db4444] text-white w-full sm:w-auto sm:px-8 h-[50px] rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;