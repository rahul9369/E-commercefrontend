import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Mail, Info, Shield } from "lucide-react";
import { CreditCard, Truck, RefreshCcw, HelpCircle } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 mb-0">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="font-bold ml-8 text-lg mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold flex items-center gap-2 no-underline"
                    : "text-white flex items-center gap-2 no-underline"
                }>
                <Mail size={18} /> Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold flex items-center gap-2 no-underline"
                    : "text-white flex items-center gap-2 no-underline"
                }>
                <Info size={18} /> About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold flex items-center gap-2 no-underline"
                    : "text-white flex items-center gap-2 no-underline"
                }>
                <Shield size={18} /> Privacy Policies
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold ml-8 text-lg mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/payment"
                className={({ isActive }) =>
                  `flex items-center gap-2 no-underline ${
                    isActive ? "text-blue-500" : "text-white"
                  }`
                }>
                <CreditCard size={18} /> Payments
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shipping"
                className={({ isActive }) =>
                  `flex items-center gap-2 no-underline ${
                    isActive ? "text-blue-500" : "text-white"
                  }`
                }>
                <Truck size={18} /> Shipping
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cancellation"
                className={({ isActive }) =>
                  `flex items-center gap-2 no-underline ${
                    isActive ? "text-blue-500" : "text-white"
                  }`
                }>
                <RefreshCcw size={18} /> Cancellation & Returns
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `flex items-center gap-2 no-underline ${
                    isActive ? "text-blue-500" : "text-white"
                  }`
                }>
                <HelpCircle size={18} /> FAQs
              </NavLink>
            </li> */}
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-bold ml-8 text-lg mb-4">Social</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `flex items-center gap-2 no-underline ${
                    isActive ? "text-blue-500 font-semibold" : "text-white"
                  }`
                }>
                <Facebook size={18} /> Facebook
              </NavLink>
            </li>

            <li>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `flex items-center gap-2 no-underline ${
                    isActive ? "text-blue-500 font-semibold" : "text-white"
                  }`
                }>
                <Twitter size={18} /> Twitter
              </NavLink>
            </li>

            <li>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `flex items-center gap-2 no-underline ${
                    isActive ? "text-blue-500 font-semibold" : "text-white"
                  }`
                }>
                <Instagram size={18} /> Instagram
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Payment & Security */}
        <div>
          <h3 className="font-bold text-lg mb-4">Payment</h3>
          <p className="text-sm mb-4">
            We support multiple secure payment options:
          </p>
          <div className="flex flex-wrap gap-4">
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
              className="w-8"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              alt="MasterCard"
              className="w-8"
            />
            <img
              src="https://img.icons8.com/color/48/000000/paytm.png"
              alt="Paytm"
              className="w-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/128px-UPI-Logo-vector.svg.png"
              alt="UPI"
              className="w-8"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700  pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} YourShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
