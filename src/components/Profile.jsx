import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 8901",
    address: "123 Main Street, Springfield, USA",
    profilePicture:
      "https://images.unsplash.com/photo-1719937206589-d13b6b008196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D", // Replace with user's actual profile picture URL
  });

  const handleEditProfile = () => {
    alert("Edit Profile Clicked!");
    // Navigate to an edit profile page or open a modal
  };

  const cartData = useSelector((state) => state.cart.cart);
  const user1 = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log(user1);
    console.log(cartData);
    console.log("hello");
  }, [user1]);

  const handleLogout = () => {
    alert("You have logged out.");
    // Implement logout functionality here
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="flex items-center p-6 bg-blue-600 text-white">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="mb-4">
            <p className="text-gray-600 font-medium">Phone:</p>
            <p>{user.phone}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 font-medium">Address:</p>
            <p>{user.address}</p>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleEditProfile}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
