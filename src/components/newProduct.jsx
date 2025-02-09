import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NODE_API_ENDPOINT } from "../utils/utils";

function NewProduct() {
  const [formData, setFormData] = useState({
    img: "",
    name: "",
    price: "",
    desc: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post(
        `${NODE_API_ENDPOINT}/product`, // Example endpoint
        formData,
        Navigate("/")
      );

      console.log("API Response:", response.data);
      setSubmittedData(response.data); // Set response data to preview
      toast.success("Add Product Successfully !!!");

      // Reset the form
      setFormData({
        img: "",
        name: "",
        price: "",
        desc: "",
      });
    } catch (err) {
      console.error("Error submitting product:", err);
      setError("Failed to add the product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl my-3 mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center bg-indigo-500 p-2 rounded-md">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Field */}
        <div>
          <label className="block font-semibold mb-1">Image URL:</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Name Field */}
        <div>
          <label className="block font-semibold mb-1">Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Price Field */}
        <div>
          <label className="block font-semibold mb-1">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter product price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Description Field */}
        <div>
          <label className="block font-semibold mb-1">Description:</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Enter product description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Display Errors */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Display Submitted Data */}
      {submittedData && (
        <div className="mt-8 p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold mb-4">Submitted Product:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Price:</strong> ${submittedData.price}
          </p>
          <p>
            <strong>Description:</strong> {submittedData.description}
          </p>
          {submittedData.image && (
            <img
              src={submittedData.image}
              alt={submittedData.name}
              className="mt-4 w-40 h-auto rounded-lg shadow"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default NewProduct;
