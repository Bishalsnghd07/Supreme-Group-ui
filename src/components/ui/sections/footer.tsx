import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-100 text-black py-8 px-6 sm:px-12">
      <h1 className="py-6 md:px-16">
        <Image
          src="/icons/favicon.svg"
          alt="Logo"
          width={148}
          height={44}
          className="md:text-center flex"
        />
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 px-4 md:px-16 py-2">
        <div>
          <h4 className="font-semibold mb-6">APPLICATIONS</h4>
          <ul className="space-y-4">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Apparel
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Automotive
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Filtration
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Customized Nonwoven
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6">COMPANY</h4>
          <ul className="space-y-4">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Who we are
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Global Competency
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Innovation
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              ESG Impact
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6">MORE</h4>
          <ul className="space-y-4">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Contact Us
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6">FOLLOW US</h4>
          <ul className="space-y-4">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              LinkedIn
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between text-sm mt-6 md:mt-16 px-16">
        <p>©{new Date().getFullYear()}. All Rights Reserved.</p>
        <p className="mt-1 hidden md:flex">
          Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
