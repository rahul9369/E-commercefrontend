import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function ProductCard(props) {
  const { img, id, name, desc, price } = props;
  const navigate = useNavigate(); // Hook to programmatically navigate
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const handleCardClick = () => {
    if (user) {
      navigate(`/products/${id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className="flex justify-center my-4"
      onClick={handleCardClick} // Add onClick handler
    >
      <div className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-sm cursor-pointer">
        {/* Image Section */}
        <img
          src={
            img ||
            "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXJyb3IlMjBpbWd8ZW58MHx8MHx8fDA%3D"
          }
          alt={name || "Product Image"}
          className="w-full h-56 object-cover rounded-t-lg"
        />

        {/* Content Section */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {name || "Unnamed Product"}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {desc ? `${desc.substring(0, 60)}...` : "No description available."}
          </p>
          <div className="flex items-center text-center justify-between">
            <div className="text-lg font-semibold items-center text-center text-orange-600">
              ₹{price || "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
