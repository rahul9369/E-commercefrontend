// PrivacyPolicy.js
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container bg-white mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-6">
        Privacy Policy
      </h1>

      <p className="text-gray-700 leading-7">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information when you use our website. We
        are committed to maintaining the confidentiality and security of your
        personal data.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-purple-700">
        Information We Collect
      </h2>
      <p className="text-gray-700 leading-7 mt-2">
        We may collect personal information such as your name, email address,
        phone number, and payment details when you sign up, make a purchase, or
        contact us.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-purple-700">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mt-2 text-gray-700 leading-7">
        <li>To process and fulfill your orders.</li>
        <li>To improve our website and customer service.</li>
        <li>
          To send you promotional emails and special offers (you can opt out
          anytime).
        </li>
        <li>To ensure security and prevent fraudulent activities.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 text-purple-700">
        How We Protect Your Data
      </h2>
      <p className="text-gray-700 leading-7 mt-2">
        We implement strict security measures to protect your personal data from
        unauthorized access, alteration, or disclosure. Your payment details are
        encrypted and processed through secure payment gateways.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-purple-700">
        Third-Party Services
      </h2>
      <p className="text-gray-700 leading-7 mt-2">
        We may share your data with trusted third-party services for payment
        processing, delivery, and analytics. However, we do not sell or trade
        your personal information to others.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-purple-700">
        Your Choices & Rights
      </h2>
      <p className="text-gray-700 leading-7 mt-2">
        You have the right to access, update, or delete your personal
        information. If you wish to make any changes, please contact us.
      </p>

      <h2 className="text-2xl font-bold mt-6 text-purple-700">Contact Us</h2>
      <p className="text-gray-700 leading-7 mt-2">
        If you have any questions or concerns about this Privacy Policy, feel
        free to reach out to us:
      </p>

      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-800 font-semibold">
          📧 Email: support@yourshop.com
        </p>
        <p className="text-gray-800 font-semibold">
          📞 Phone: +1 (123) 456-7890
        </p>
        <p className="text-gray-800 font-semibold">
          📍 Address: 123 Shopping St, YourCity, YourCountry
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
