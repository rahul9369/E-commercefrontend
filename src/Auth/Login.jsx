import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/AuthSlice";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { NODE_API_ENDPOINT } from "../utils/utils";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${NODE_API_ENDPOINT}/login`, {
        email,
        password,
      });

      if (response.data) {
        const allresponse = response.data;
        dispatch(login(allresponse));
        toast.success("Login Successfully !!!");
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while logging in. Please try again.");
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
      dispatch(login(data));
      toast.success("Login Successfully !!!");
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Error in login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-4xl">
        {/* Left Side - GIF */}
        <div className="hidden lg:flex w-1/2 justify-center">
          <img
            src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg"
            alt="Login Animation"
            className="w-full max-w-lg object-cover"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-700">
            Login
          </h1>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2">
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
                className="block text-gray-700 font-medium mb-2">
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300">
              Login
            </button>
          </form>

          <div className="my-6 text-center text-gray-600 font-medium">OR</div>
          <div className="flex justify-center">
            <GoogleLogin onSuccess={loginToGoogle} />
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
