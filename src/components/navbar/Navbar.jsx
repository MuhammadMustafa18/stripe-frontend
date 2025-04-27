import React from 'react'
import plogo from "../../assets/plogo.png"
import { GoDotFill } from "react-icons/go";
import heroVid from "../../assets/hero1.mp4";

const Navbar = () => {
  return (
    <div className="relative w-full h-screen object-cover">
      
      <video
        className="w-full absolute"
        src={heroVid}
        autoPlay
        muted
        style={{ clipPath: "polygon(0 0, 160% 0, 0 60%, 0 80%)" }}
      ></video>
      <div className="absolute top-0 left-[15%] w-[70%] flex justify-between mx-auto py-5">
        {/* Left Links */}
        <div className="flex flex-row items-center space-x-7">
          <span className="text-2xl font-bold text-white">Stripe</span>
          <div className="relative group">
            <span className="cursor-pointer text-md font-bold text-white">
              Products
            </span>
            <div className="absolute z-1 top-full px-6 py-4 rounded-lg left-[-25px] group-hover:opacity-100 group-hover:visible opacity-0 invisible bg-white w-100 transition-all duration-200">
              {/* Dropdown */}
              <div className="flex flex-row">
                <img src={plogo} alt="" className="w-15 h-10" />
                <div>
                  <p className="font-bold text-md">Payments</p>
                  <p className="text-sm text-gray-400">Online Payments</p>
                </div>
              </div>

              <div className="ml-15">
                <div className="text-xs py-0.5 px-2 bg-[rgba(0,0,0,0.05)] rounded-sm mt-2 inline-flex flex-row items-center space-x-1">
                  <p className="font-bold">Payment Links</p>
                  <GoDotFill size={5} className="mt-1" />
                  <p className="text-gray-600">no code payments</p>
                </div>
                <div className="text-xs py-0.5 px-2 bg-[rgba(0,0,0,0.05)] rounded-sm mt-2 inline-flex flex-row items-center space-x-1">
                  <p className="font-bold">Payment Links</p>
                  <GoDotFill size={5} className="mt-1" />
                  <p className="text-gray-600">no code payments</p>
                </div>
                <div className="text-xs py-0.5 px-2 bg-[rgba(0,0,0,0.05)] rounded-sm mt-2 inline-flex flex-row items-center space-x-1">
                  <p className="font-bold">Payment Links</p>
                  <GoDotFill size={5} className="mt-1" />
                  <p className="text-gray-600">no code payments</p>
                </div>
              </div>
            </div>
          </div>
          <span className="text-md font-bold text-white">Solutions</span>
          <span className="text-md font-bold text-white">Developers</span>
          <span className="text-md font-bold text-white">Resources</span>
          <span className="text-md font-bold text-white">Pricing</span>
        </div>

        {/* Right Links */}
        <div className="flex flex-row space-x-3 items-center">
          <span className="font-bold text-white">Sign in</span>
          <span className="py-2 px-5 text-sm font-bold bg-white rounded-full">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Contact sales
            </span>
          </span>{" "}
        </div>
      </div>
      <div className="absolute top-[10%] left-[15%] ">
        <div className="text-xs py-0.5 px-2 bg-[rgba(0,0,0,0.5)]  rounded-full text-white inline-block">
          Sessions 2025  ·  May 6–8 · Last chance to register
        </div>
        <div className="text-7xl font-bold w-1/3">
          Financial infrastructure to grow your revenue
        </div>
      </div>
    </div>
  );
}

export default Navbar