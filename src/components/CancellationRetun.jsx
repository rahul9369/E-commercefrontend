import React from "react";

const CancellationReturns = () => {
  return (
    <div className="container bg-white mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Cancellation & Returns</h1>

      <p className="text-gray-700 leading-6">
        Your satisfaction is our priority. If you're not completely happy with
        your purchase, we provide easy cancellation and return options. Please
        read the policy details below.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cancellation Policy</h2>
      <ul className="list-disc pl-5 text-gray-700 leading-6">
        <li>
          Orders can be canceled within <strong>24 hours</strong> of purchase
          for a full refund.
        </li>
        <li>Once an order is shipped, it cannot be canceled.</li>
        <li>
          To cancel your order, visit the{" "}
          <span className="font-semibold">"My Orders"</span> section or contact
          our support team.
        </li>
        <li>
          Refunds for canceled orders will be processed within{" "}
          <strong>3-5 business days</strong>.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Return Policy</h2>
      <ul className="list-disc pl-5 text-gray-700 leading-6">
        <li>
          Return requests must be placed within <strong>7 days</strong> of
          delivery.
        </li>
        <li>
          Items must be unused, in their original packaging, and include all
          accessories.
        </li>
        <li>Damaged or defective items are eligible for a free replacement.</li>
        <li>
          Refunds for returns will be processed within{" "}
          <strong>5-7 business days</strong> after item verification.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Non-Returnable Items</h2>
      <ul className="list-disc pl-5 text-gray-700 leading-6">
        <li>
          Personal care products, undergarments, and perishable items cannot be
          returned.
        </li>
        <li>
          Customized or personalized products are non-returnable unless
          defective.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Exchange Policy</h2>
      <ul className="list-disc pl-5 text-gray-700 leading-6">
        <li>
          Exchanges are available for size-related issues on clothing and
          footwear.
        </li>
        <li>
          Exchange requests must be placed within <strong>7 days</strong> of
          delivery.
        </li>
      </ul>

      <p className="mt-4 text-gray-700">
        If you have any issues with your order, please visit our{" "}
        <span className="font-semibold">FAQs</span> or contact our customer
        support team for assistance.
      </p>
    </div>
  );
};

export default CancellationReturns;
