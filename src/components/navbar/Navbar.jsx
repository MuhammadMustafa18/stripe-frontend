import React from 'react'
import plogo from "../../assets/plogo.png"
import { GoDotFill } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="max-w-[70%] mx-auto">
      <ul className="flex flex-row justify-between py-5">
        <div className="flex flex-row space-x-5">
          <li>Stripe</li>
          <div className="relative group">
            <li className="cursor-pointer">Products</li>
            <div className="absolute top-full px-6 py-4 rounded-lg left-[-25px] group-hover:opacity-100 group-hover:visible opacity-0 invisible bg-white w-100 transition-all duration-200">
              <div className="flex flex-row">
                <img src={plogo} alt="" className="w-15 h-10" />
                <div>
                  <p className="font-bold text-md">Payments</p>
                  <p className="text-sm text-gray-400">Online Payments</p>
                </div>
              </div>
              <div className="ml-15">
                <div className='bg-gray-300 p-1 text-xs mt-2 flex flex-row items-center space-x-1'>
                  <p> Payment Links </p>

                  <GoDotFill size={5} className='mt-1' />

                  <p>no code payments</p>
                </div>

                <p className="bg-gray-300 p-1 text-xs mt-2">
                  Checkout <span className="">no code payments</span>
                </p>
                <p className="bg-gray-300 p-1 text-xs mt-2">
                  Elements <span className="">no code payments</span>
                </p>
              </div>
            </div>
          </div>

          <li>Solutions</li>
          <li>Developers</li>
          <li>Resources</li>
          <li>Pricing</li>
        </div>
        <div className="flex flex-row space-x-3">
          <li>Sign in</li>
          <li>Contact sales</li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar