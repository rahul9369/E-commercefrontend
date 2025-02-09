// About.js
import React from "react";

const About = () => {
  return (
    <div className="container bg-white mx-auto w-screen p-6">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-6">About Us</h1>
      <p className="text-gray-700 leading-7">
        Welcome to <span className="font-semibold">YourShop</span>, your
        ultimate destination for an easy, fast, and secure shopping experience.
        We offer a vast collection of high-quality products, ranging from
        fashion, electronics, home essentials, beauty products, and much more.
        Our goal is to bring you the latest trends and top brands at unbeatable
        prices.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-purple-700">
        Why Shop With Us?
      </h2>
      <ul className="list-disc pl-6 mt-2 text-gray-700 leading-7">
        <li>
          <span className="font-semibold">Wide Selection:</span> Thousands of
          products across multiple categories.
        </li>
        <li>
          <span className="font-semibold">Best Deals:</span> Enjoy exclusive
          discounts, flash sales, and special offers.
        </li>
        <li>
          <span className="font-semibold">Fast & Secure Shipping:</span> Quick
          delivery and reliable shipping partners.
        </li>
        <li>
          <span className="font-semibold">24/7 Customer Support:</span> Our
          dedicated team is always ready to assist you.
        </li>
        <li>
          <span className="font-semibold">Secure Payments:</span> Multiple
          payment options with full encryption for your safety.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 text-purple-700">Our Mission</h2>
      <p className="mt-2 text-gray-700 leading-7">
        We are committed to providing a seamless shopping experience with a
        user-friendly platform, high-quality products, and customer-centric
        policies. Our mission is to bring the joy of shopping to your
        fingertips, anytime and anywhere.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-purple-700">
        Join Us Today!
      </h2>
      <p className="mt-2 text-gray-700 leading-7">
        Sign up now to enjoy exclusive deals and a hassle-free shopping
        experience. Follow us on social media to stay updated on the latest
        trends, offers, and new arrivals.
      </p>
    </div>
  );
};

export default About;
