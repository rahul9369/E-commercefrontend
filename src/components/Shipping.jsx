import React from "react";

const Shipping = () => {
  return (
    <div className="container bg-white mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shipping Policy</h1>

      <p className="text-gray-700 leading-6">
        At YourShop, we aim to deliver your products safely and on time. Our
        shipping policies ensure that you receive your orders in the best
        possible condition and within the promised timeframe.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Domestic Shipping</h2>
      <ul className="list-disc pl-5 text-gray-700 leading-6">
        <li>
          <strong>Standard Delivery:</strong> Estimated delivery time is 5-7
          business days.
        </li>
        <li>
          <strong>Express Delivery:</strong> Get your products within 2-3
          business days (additional charges apply).
        </li>
        <li>
          <strong>Same-Day Delivery:</strong> Available in select cities for
          orders placed before 12 PM.
        </li>
        <li>
          <strong>Free Shipping:</strong> Enjoy free shipping on all orders
          above ₹1000.
        </li>
        <li>
          <strong>Order Tracking:</strong> Tracking details will be shared via
          email/SMS once the order is dispatched.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        International Shipping
      </h2>
      <ul className="list-disc pl-5 text-gray-700 leading-6">
        <li>We offer international shipping to multiple countries.</li>
        <li>
          Delivery time varies by location (typically 7-15 business days).
        </li>
        <li>Shipping charges depend on the destination and package weight.</li>
        <li>
          Custom duties and taxes may apply as per the receiving country’s
          regulations.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Additional Information
      </h2>
      <ul className="list-disc pl-5 text-gray-700 leading-6">
        <li>Orders are processed within 24 hours of payment confirmation.</li>
        <li>
          We partner with trusted courier services like Blue Dart, FedEx, and
          DTDC.
        </li>
        <li>
          If your order is delayed, please contact our customer support team.
        </li>
      </ul>

      <p className="mt-4 text-gray-700">
        For any further queries related to shipping, please visit our{" "}
        <span className="font-semibold">FAQs</span> or contact our customer
        support team.
      </p>
    </div>
  );
};

export default Shipping;
