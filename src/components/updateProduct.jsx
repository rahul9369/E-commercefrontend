import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NODE_API_ENDPOINT } from "../utils/utils";

function UpdateProduct() {
  const [formData, setFormData] = useState({
    img: "",
    name: "",
    price: "",
    desc: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product data based on ID
    axios
      .get(`${NODE_API_ENDPOINT}/product/${id}`)
      .then((res) => {
        setFormData({
          img: res.data.Prod.img || "",
          name: res.data.Prod.name || "",
          price: res.data.Prod.price || "",
          desc: res.data.Prod.desc || "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch product details.");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update product data using PATCH request
    axios
      .patch(`${NODE_API_ENDPOINT}/product/${id}/edit`, formData)
      .then(() => {
        toast.success("Product updated successfully!"); // Show success toast
        setFormData({
          img: "",
          name: "",
          price: "",
          desc: "",
        });
        navigate("/"); // Redirect to the home page
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update product."); // Show error toast
      });
  };

  return (
    <div className="max-w-xl mt-5 mx-auto p-6 bg-white shadow-md rounded-lg sm:p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 sm:text-xl">
        Update Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL:
          </label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:px-2 sm:py-1"
          />
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:px-2 sm:py-1"
          />
        </div>

        {/* Price Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter product price"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:px-2 sm:py-1"
          />
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description:
          </label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Enter product description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-28 resize-none sm:px-2 sm:py-1 sm:h-20"></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 sm:py-1">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
