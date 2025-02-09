import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, remove } from "../features/CartSlice";
import { toast } from "react-toastify"; // Importing Toastify
import { NODE_API_ENDPOINT } from "../utils/utils";
import axios from "axios";
const CartShimmer = () => (
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Section: Items Shimmer */}
    <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
      <div className="animate-pulse">
        <div className="h-8 w-1/3 bg-gray-300 rounded mb-6"></div>
        <div className="space-y-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div>
                  <div>
                    <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-8 w-20 bg-gray-300 rounded"></div>
                  <div className="h-8 w-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>

    {/* Right Section: Summary Shimmer */}
    <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
      <div className="animate-pulse">
        <div className="h-8 w-1/3 bg-gray-300 rounded mb-6"></div>
        <div className="space-y-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-2">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            ))}
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="h-10 w-full bg-gray-300 rounded"></div>
          <div className="h-10 w-full bg-gray-300 rounded"></div>
          <div className="h-10 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const AddToCart = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const cartData = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  console.log(user.id);
  const userid = user.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(cartData);

  const totalPrice = cartData.reduce((sum, product) => sum + product.price, 0);

  const handleProceedToPay = () => navigate("/checkout");
  const handleContinueShopping = () => navigate("/");
  const handleClearCart = () => dispatch(clearCart());
  console.log("first");

  const handleRemove = (product) => {
    console.log("first");
    dispatch(remove(product._id));
    const token = localStorage.getItem("token");
    console.log("first");
    axios
      .delete(`${NODE_API_ENDPOINT}/user/cart/${product._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    toast.success("Item remove to cart!"); // Show success toast
  };

  // Simulate loading for the shimmer effect
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000); // Simulate API call delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        My Shopping Cart
      </h1>
      {loading ? (
        <CartShimmer />
      ) : cartData.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Items in Cart
            </h2>
            <div className="space-y-4">
              {cartData.map((product, index) => (
                <div
                  key={`${product._id}-${index}`}
                  className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">Price: ₹{product.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleRemove(product)}
                      className="px-2 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Cart Summary
            </h2>
            <div className="space-y-4">
              {cartData.map((product) => (
                <div
                  key={product._id}
                  className="flex justify-between items-center border-b pb-2">
                  <p className="text-gray-800 font-medium">{product.name}</p>
                  <p className="text-gray-800 font-bold">₹{product.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t pt-4">
              <p className="text-lg font-semibold text-gray-800">
                Total Price: ₹{totalPrice}
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <button
                onClick={handleProceedToPay}
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">
                Proceed to Pay
              </button>
              <button
                onClick={handleContinueShopping}
                className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
                Continue Shopping
              </button>
              {/* <button
                onClick={handleClearCart}
                className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600">
                Clear Cart
              </button> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg">
          Your cart is empty! Add some items to see them here.
        </div>
      )}
    </div>
  );
};

export default AddToCart;
