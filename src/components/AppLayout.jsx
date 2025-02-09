import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createuser } from "../features/AuthSlice";
import { createusers } from "../features/CartSlice";
import Footer from "./Footer";

function AppLayout() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(createuser());
        await dispatch(createusers());
        console.log("APIs successfully called.");
      } catch (error) {
        console.error("Error during API calls:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false after API calls
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Optional loading UI
  }

  return (
    <div className="flex flex-col h-[100%]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
