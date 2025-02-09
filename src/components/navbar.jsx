import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/AuthSlice";
import { toast } from "react-toastify";

function NavScrollExample() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartData = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully !!!");
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white text-2xl font-bold no-underline hover:no-underline">
          ShopEase
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white text-2xl lg:hidden"
          onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Add New Product (Seller Only) */}
          {user?.usertype === "seller" && (
            <NavLink
              to="/new"
              className={({ isActive }) =>
                `p-2 rounded-lg no-underline ${
                  isActive
                    ? "text-yellow-300 bg-blue-500"
                    : "text-white hover:text-blue-200"
                }`
              }>
              Add New Product
            </NavLink>
          )}

          {/* Search Box */}
          <form className="flex items-center space-x-2">
            <input
              type="search"
              placeholder="Search"
              className="w-40 px-4 py-2 rounded-l-lg bg-blue-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition duration-300">
              Search
            </button>
          </form>

          {user && user.usertype !== "seller" && (
            <NavLink
              to="/addtocart"
              className="block text-white relative p-2 rounded-lg no-underline hover:text-blue-300">
              Cart
              <span className="absolute -top-2 -right-4 bg-yellow-500 text-xs text-white rounded-full px-1">
                {cartData?.length || 0}
              </span>
            </NavLink>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white no-underline px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="text-white no-underline hover:text-blue-200 transition">
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-700 text-white p-4 space-y-4">
          {user?.usertype === "seller" && (
            <NavLink
              to="/new"
              className="block p-2 rounded-lg no-underline hover:text-blue-300">
              Add New Product
            </NavLink>
          )}

          <form className="flex items-center space-x-2">
            <input
              type="search"
              placeholder="Search"
              className="flex-1 px-4 py-2 rounded-l-lg bg-blue-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition duration-300">
              Search
            </button>
          </form>

          {user && (
            <NavLink
              to="/addtocart"
              className="block text-white relative p-2 rounded-lg no-underline hover:text-blue-300">
              Cart
              <span className="absolute -top-2 -right-4 bg-yellow-500 text-xs text-white rounded-full px-1">
                {cartData?.length || 0}
              </span>
            </NavLink>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full bg-red-600 no-underline px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="block w-full no-underline text-center text-white hover:text-blue-300">
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavScrollExample;
