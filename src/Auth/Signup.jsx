import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/AuthSlice";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { NODE_API_ENDPOINT } from "../utils/utils";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username || !email || !password || !usertype) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${NODE_API_ENDPOINT}/signup`, {
        username,
        email,
        password,
        usertype,
      });

      if (response.data) {
        const allresponse = response.data;
        dispatch(login({ allresponse }));
        localStorage.setItem("token", response.data.token);
        toast.success("Signup Successfully !!!");
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setError(response.data.message || "Sign-up failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while signing up. Please try again.");
    }
  };

  const loginToGoogle = async (credentialResponse) => {
    try {
      const user = await fetch(`${NODE_API_ENDPOINT}/callbackGoogle`, {
        method: "POST",
        body: JSON.stringify({ token: credentialResponse.credential }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!user.ok) {
        console.log("Getting error");
        toast.error("Getting error");
      }
      const data = await user.json();
      dispatch(login({ data }));
      localStorage.setItem("token", data.token);
      toast.success("Signup Successfully !!!");
      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.log(error);
      toast.error("Error in login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-4 sm:px-4 lg:px-4">
      <div className="flex flex-col lg:flex-row items-center bg-white   p-4 rounded-xl shadow-2xl w-full max-w-5xl">
        {/* Left Side - GIF */}
        <div className="hidden lg:flex w-[90%] justify-center">
          <img
            src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg"
            alt="Sign Up Animation"
            className="w-full max-w-lg object-cover"
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="w-full lg:w-[90%]">
          <h1 className="text-3xl font-extrabold text-center  text-blue-700">
            Sign Up
          </h1>
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-600 p-3 rounded mb-4 text-sm text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium ">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label
                htmlFor="usertype"
                className="block text-gray-700 font-medium ">
                User Type
              </label>
              <select
                id="usertype"
                value={usertype}
                onChange={(e) => setUsertype(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select User Type</option>
                <option value="consumer">Consumer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300">
              Sign Up
            </button>
          </form>

          <div className="my-6 text-center text-gray-600 font-medium">OR</div>
          <div className="flex justify-center">
            <GoogleLogin onSuccess={loginToGoogle} />
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:underline font-semibold">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
